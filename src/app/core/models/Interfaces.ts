export class OlympicDataPipe {
  name!: string;
  value!: number;
  extra!: Extra;


  constructor(name: string, value: number, extra: Extra) {
    this.name = name;
    this.value = value;
    this.extra = extra;
  }
}

export class Extra {
  id!: number;
  country!: string;

  constructor(id: number) {
    this.id = id;
  }
}

export class OlympicDataLine {
  name!: string;
  series!: Series[];


  constructor(name: string, series: Series[]) {
    this.name = name;
    this.series = series;
  }
}

export class Series {
  value!: number;
  name!: string;


  constructor(value: number, name: string) {
    this.value = value;
    this.name = name;
  }
}
