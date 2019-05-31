import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = "Henok G Woldu PhD";
  description = "Data Science from Georgia State University, researcher in Missouri State University";
  constructor() { }

  ngOnInit() {
  }

}
