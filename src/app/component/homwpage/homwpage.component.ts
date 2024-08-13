import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomecontainerComponent } from '../homecontainer/homecontainer.component';

@Component({
  selector: 'app-homwpage',
  standalone: true,
  imports: [HomecontainerComponent,SidebarComponent],
  templateUrl: './homwpage.component.html',
  styleUrl: './homwpage.component.scss'
})
export class HomwpageComponent {

}
