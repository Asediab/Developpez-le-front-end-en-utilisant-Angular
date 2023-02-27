import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountryDetailsComponent} from './country-details.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Participation} from "../../core/models/Participation";
import {Olympic} from "../../core/models/Olympic";

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let participations: Array<Participation> = [];
  let olympics: Array<Olympic> = [];

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [CountryDetailsComponent]
    });


    participations.push(new class implements Participation {
      athleteCount: number = 20;
      city: string = 'Londres';
      id: number = 1;
      medalsCount: number = 1;
      year: number = 2020;
    });

    participations.push(new class implements Participation {
      athleteCount: number = 200;
      city: string = 'Londre2';
      id: number = 2;
      medalsCount: number = 3;
      year: number = 2021;
    });

    olympics.push(new class implements Olympic {
      country: string = 'France';
      id: number = 1;
      participations: Participation[] = participations;
    });


    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    olympics = [];
    participations = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count the number of Medals', () => {
    let olympic = olympics[0];
    // @ts-ignore
    expect(component.getNumberOfMedals(olympic)).toBe(4)
  });

  it('should count the number of Entries', () => {
    let olympic = olympics[0];
    // @ts-ignore
    expect(component.getNumberOfEntries(olympic)).toBe(2)
  });

  it('should count the number of Athletes', () => {
    let olympic = olympics[0];
    // @ts-ignore
    expect(component.getNumberOfAthletes(olympic)).toBe(220)
  });
});
