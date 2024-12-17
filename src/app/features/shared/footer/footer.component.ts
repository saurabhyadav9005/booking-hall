import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   public icons = [];
   faCoffee = faCoffee;
   currentDate = new Date();
   myMoment: moment.Moment = moment();
}
