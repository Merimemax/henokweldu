import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = "Henok G Woldu Ph.D";
  description = "Data science from georgia state university, researcher in missouri state university";
  constructor() { }

  ngOnInit() {
  }

}
