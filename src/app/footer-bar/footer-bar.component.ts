import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../dummy-data.service';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {
  name: string;
  constructor(private _service: DummyDataService) {
      this.name = _service.name;

   }

  ngOnInit() {
  }

}
