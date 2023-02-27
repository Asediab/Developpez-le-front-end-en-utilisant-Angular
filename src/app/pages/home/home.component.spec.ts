import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Olympic} from "../../core/models/Olympic";
import {Participation} from "../../core/models/Participation";

describe('HomeComponent', () => {
  let participations: Array<Participation> = [];
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let olympics: Array<Olympic> = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [HomeComponent]
      }
    );

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

    olympics.push(new class implements Olympic {
      country: string = 'France2';
      id: number = 2;
      participations: Participation[] = participations;
    })

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    olympics = [];
    participations = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count the number of medals', () => {
    let olympic = olympics[0];
    // @ts-ignore
    expect(component.getAllMedals(olympic)).toBe(4)
  });

  it('should count the number of countries', () => {
    // @ts-ignore
    expect(component.getNumberOfCountries(olympics)).toBe(2)
  });

  it('should count the number of Olympic games', () => {
    // @ts-ignore
    expect(component.getNumberOfJO(olympics)).toBe(2)
  });

});
