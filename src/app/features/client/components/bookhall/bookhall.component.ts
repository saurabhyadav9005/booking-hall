import { Component } from '@angular/core';
import {HeaderComponent} from '../../../shared/header/header.component';
import {FooterComponent} from '../../../shared/footer/footer.component';


@Component({
  selector: 'app-bookhall',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './bookhall.component.html',
  styleUrl: './bookhall.component.scss'
})
export class BookhallComponent {

}
