export class Extinction {
  id: number;
  name: string;
  animalClass: string;
  year: string;
  era: string;
  area: string;

  constructor(id?: number, name?: string, animalClass?: string,
              year?: string, era?: string, area?: string) {
      this.id = id;
      this.name = name;
      this.animalClass = animalClass;
      this.year = year;
      this.area = area;
      this.era = era;
    }
}
