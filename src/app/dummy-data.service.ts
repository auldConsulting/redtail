import { Injectable } from '@angular/core';

@Injectable()
export class DummyDataService {

  name: string = "this string comes from an injected service - albeit simple its useful.";
  constructor() { }

}
