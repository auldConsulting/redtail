import { Injectable } from '@angular/core';

@Injectable()
export class DummyDataService {

  private localName: string = "Harold";

  name: string = "this string comes from an injected service - albeit simple its useful.";
  names: string[] = ["dave", "john", "mark", "paul", "will", "haydn", "all these names come from the dummydataservice",
    this.localName
  ];
  constructor() { }

}
