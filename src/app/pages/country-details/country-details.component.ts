import {Component, OnInit} from '@angular/core';
import {OlympicService} from "../../core/services/olympic.service";
import {Router} from "@angular/router";
import {OlympicDataLine} from "../../core/models/Interfaces";
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
  olympicDataSetLine!: OlympicDataLine[];
  olympics!: Olympic[];

  constructor(private olympicService: OlympicService,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  onSelect(data: any): void {
  }

  onActivate(data: any): void {
  }

  onDeactivate(data: any): void {
  }
}
