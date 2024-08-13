import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-tracktime',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './tracktime.component.html',
  styleUrl: './tracktime.component.scss'
})
export class TracktimeComponent {

}
