import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = "Henok G Woldu PhD";
  description = "Biostatistician | Data Scientist | Public Health Researcher";
  constructor() { }

  ngOnInit() {
  }

}
