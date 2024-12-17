import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../../../shared/header/header.component';
import {FooterComponent} from '../../../shared/footer/footer.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HallUtilsService } from '../../services/hall-utils.service';
import { searchHall } from './browsehall.model';


@Component({
  selector: 'app-browsehalls',
  standalone:true,
  imports: [CommonModule, HeaderComponent, FooterComponent, AutoCompleteModule, ReactiveFormsModule],
  templateUrl: './browsehalls.component.html',
  styleUrl: './browsehalls.component.scss'
})
export class BrowsehallsComponent implements OnInit{
  searchHallForm: FormGroup;
  eventTypeArr:any[] = [];
  capacityArr:any[] = [];
  availableHallList:any[]=[];

  constructor(private hallService: HallUtilsService) {
    this.initializeForm();

    this.eventTypeArr = [
      { id:1, type:"Wedding"},
      { id:2, type:"Birthday"},
      { id:3, type:"Reception"},
    ]
    this.capacityArr = [
      { id:1, type:"100-200"},
      { id:2, type:"200-500"},
      { id:3, type:"500-1000"},
      { id:4, type:"1000-2000"},
    ]
  }

  initializeForm(){
    this.searchHallForm = new FormGroup({
      location:new FormControl('', [Validators.nullValidator]),  
      date: new FormControl('', [Validators.nullValidator]),  
      budget: new FormControl('', [Validators.nullValidator]),
      eventType:new FormControl('', [Validators.nullValidator]),
      capacity:new FormControl('', [Validators.nullValidator])
    });
  }
  ngOnInit() {
      this.getAvailableHall();
}
search(){
  console.log("values", this.searchHallForm.value);
}

getAvailableHall(){
  this.availableHallList = [
    {
      id:1, 
      name:'abc', 
      description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      images:"assets/images/card-img.png"
    },
    {
      id:2, 
      name:'pqr', 
      description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      images:"assets/images/card-img.png"
    },
    {
      id:3, 
      name:'xyz', 
      description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      images:"assets/images/card-img.png"
    },
    {
      id:4, 
      name:'lmn', 
      description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      images:"assets/images/card-img.png"
    }

  ]
}
}
