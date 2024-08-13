import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-calendarview',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './calendarview.component.html',
  styleUrl: './calendarview.component.scss'
})
export class CalendarviewComponent {

}
