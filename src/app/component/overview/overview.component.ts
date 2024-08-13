import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SidebarComponent,ChartComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
