import {Component, OnInit} from '@angular/core';
import {OlympicService} from "../../core/services/olympic.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OlympicDataLine, Series} from "../../core/models/Classes";
import {Olympic} from "../../core/models/Olympic";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  multi!: any[];

  legend: boolean = false;
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
    try {
      this.olympicService.getOlympics().subscribe(value => {
        this.olympics = value;
        this.country = value.find(value1 => value1.id === this.countryId) as Olympic;
        if (!this.country) {
          this.errorDataSetLoaded = true;
        }
        this.getOlympicDataSetLine(this.country);
        this.numberOfMedals = this.getNumberOfMedals(this.country);
        this.numberOfAthletes = this.getNumberOfAthletes(this.country);
        this.numberOfEntries = this.getNumberOfEntries(this.country);
      });
    } catch (e) {
      this.errorDataSetLoaded = true;
    }
    this.errorDataSetLoaded = this.olympicService.error;
  }

  private getOlympicDataSetLine(country: Olympic): void {
    let series: Series[] = country.participations.map(value => {
      return new Series(value.medalsCount, value.year.toString());
    })
    this.olympicDataSetLine.push(new OlympicDataLine(country.country, series));
    this.multi = this.olympicDataSetLine;
  }

  getNumberOfEntries(olympic: Olympic): number {
    return olympic.participations.length;
  }

  getNumberOfMedals(olympic: Olympic): number {
    return olympic.participations.reduce((allMedals, previousValue) => allMedals + previousValue.medalsCount, 0);
  }

  getNumberOfAthletes(olympic: Olympic): number {
    return olympic.participations.reduce((allAthletes, previousValue) => allAthletes + previousValue.athleteCount, 0);
  }

  onBack(): void {
    this.rout.navigateByUrl("");
  }
}
