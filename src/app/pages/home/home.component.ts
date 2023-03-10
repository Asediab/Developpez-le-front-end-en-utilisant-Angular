import {Component, OnDestroy, OnInit} from '@angular/core';
import {OlympicService} from 'src/app/core/services/olympic.service';
import {LegendPosition} from "@swimlane/ngx-charts";
import {Olympic} from "../../core/models/Olympic";
import {Extra, OlympicDataPipe} from "../../core/models/Classes";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  olympics!: Olympic[];
  olympicDataPipe!: OlympicDataPipe[];
  errorDataSetLoaded: boolean = true;
  numberOfJO!: number;
  numberOfCountries!: number;
  subscription!: Subscription;


  single!: Object[];
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  colorScheme: string = 'cool';

  constructor(private olympicService: OlympicService,
              private router: Router) {
  }
  ngOnInit(): void {
    try {
      this.subscription = this.olympicService.getOlympics().subscribe(value => {
        this.olympics = value;
        this.getOlympicDataSet();
        this.numberOfJO = this.getNumberOfJO(this.olympics);
        this.numberOfCountries = this.getNumberOfCountries(this.olympics);
      });
    } catch (e) {
      this.errorDataSetLoaded = true;
      this.subscription.unsubscribe();
    }
    this.errorDataSetLoaded = this.olympicService.error;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getOlympicDataSet(): void {
    this.olympicDataPipe = this.olympics.map(value => {
      return new OlympicDataPipe(value.country, this.getAllMedals(value), new Extra(value.id));
    })
    this.single = this.olympicDataPipe;
  }

  private getNumberOfJO(olympics: Olympic[]): number {
    let yearsOfOlympicGames: number[] = [];
    for (let olympic of olympics) {
      for (let participation of olympic.participations) {
        if (!yearsOfOlympicGames.includes(participation.year)) {
          yearsOfOlympicGames.push(participation.year)
        }
      }
    }
    return yearsOfOlympicGames.length;
  }

  private getNumberOfCountries(olympics: Olympic[]): number {
    let countries: string[] = [];
    for (let olympic of olympics) {
      if (!countries.includes(olympic.country)) {
        countries.push(olympic.country)
      }
    }
    return countries.length;
  }

  private getAllMedals(olympic: Olympic): number {
    return olympic.participations.reduce((allMedals, previousValue) => allMedals + previousValue.medalsCount, 0);
  }

  onSelect(data: any): void {
    this.router.navigateByUrl('country/' + data.extra.id);
  }
}
