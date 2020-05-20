import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character1-page',
  templateUrl: './create-character1-page.component.html',
  styleUrls: ['./create-character1-page.component.css']
})
export class CreateCharacter1PageComponent implements OnInit {

  imageIsClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickj(){
    this.imageIsClicked = !this.imageIsClicked;
    console.log("ccccc");
  }

}
