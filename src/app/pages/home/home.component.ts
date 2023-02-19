import {Component, OnInit} from '@angular/core';
import {OlympicService} from 'src/app/core/services/olympic.service';
import {LegendPosition} from "@swimlane/ngx-charts";
import {Olympic} from "../../core/models/Olympic";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private olympics!: Olympic[];

  ngOnInit(): void {
    this.olympics = this.olympicService.getOlympics();
    console.log(this.olympics);

    this.single = [{
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
      {
        "name": "United States",
        "value": 50000,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "France",
        "value": 36745,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "United Kingdom",
        "value": 36240,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Spain",
        "value": 33000,
        "extra": {
          "code": "es"
        }
      },
      {
        "name": "Italy",
        "value": 35800,
        "extra": {
          "code": "it"
        }
      }]
  }

  single!: Object[];
  view: [number, number] = [1000, 700];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: string = 'cool';

  constructor(private olympicService: OlympicService) {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
