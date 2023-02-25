import {Component, OnInit} from '@angular/core';
import {OlympicService} from "../../core/services/olympic.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OlympicDataLine, Series} from "../../core/models/Interfaces";
import {Olympic} from "../../core/models/Olympic";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  multi!: any[];

  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Medals';
  timeline: boolean = false;
  colorScheme: string = 'cool';


  errorDataSetLoaded: boolean = true;
  numberOfEntries!: number;
  numberOfMedals!: number;
  numberOfAthletes!: number;
  olympicDataSetLine: OlympicDataLine[] = [];
  olympics!: Olympic[];
  country!: Olympic;
  countryId!: number;

  constructor(private olympicService: OlympicService,
              private router: ActivatedRoute,
              private rout: Router) {
  }

  ngOnInit(): void {
    this.countryId = +this.router.snapshot.params['id'];
    console.log(this.countryId);
    try {
      this.olympicService.getOlympics().subscribe(value => {
        this.olympics = value;
        this.country = value.find(value1 => value1.id === this.countryId) as Olympic;
        if (!this.country) {
          this.errorDataSetLoaded = true;
        }
        console.log(this.country);
        this.getOlympicDataSetLine(this.country);
        this.numberOfMedals = this.getNumberOfMedals(this.country);
        console.log(this.numberOfMedals);
        this.numberOfAthletes = this.getNumberOfAthletes(this.country);
        console.log(this.numberOfAthletes);
        this.numberOfEntries = this.getNumberOfEntries(this.country);
        console.log(this.numberOfEntries);
      });
    } catch (e) {
      this.errorDataSetLoaded = true;
    }

    this.errorDataSetLoaded = this.olympicService.error;
  }

  private getOlympicDataSetLine(country: Olympic): void {
    console.log(country);
    let series: Series[] = country.participations.map(value => {
      return new Series(value.medalsCount, value.year.toString());
    })
    console.log(series);
    this.olympicDataSetLine.push(new OlympicDataLine(country.country, series));
    this.multi = this.olympicDataSetLine;
    console.log(this.multi)
  }

  getNumberOfEntries(olympic: Olympic): number {
    return olympic.participations.length;
  }

  getNumberOfMedals(olympic: Olympic): number {
    return olympic.participations.reduce((allMedals, previousValue) => allMedals + previousValue.medalsCount, 0);
  }

  getNumberOfAthletes(olympic: Olympic): number {
    return olympic.participations.reduce((allMedals, previousValue) => allMedals + previousValue.athleteCount, 0);
  }

  onBack(): void {
    this.rout.navigateByUrl("");
  }
}
