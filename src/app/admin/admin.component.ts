import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../dummy-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _service: DummyDataService) { }
  
  ngOnInit() {
  }

}
