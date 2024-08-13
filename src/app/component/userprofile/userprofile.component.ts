import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [SidebarComponent,RouterLink],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss'
})
export class UserprofileComponent {

}
