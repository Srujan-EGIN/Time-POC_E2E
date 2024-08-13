import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddtimeComponent } from './component/addtime/addtime.component';
import { CalendarviewComponent } from './component/calendarview/calendarview.component';
import { HomecontainerComponent } from './component/homecontainer/homecontainer.component';
import { OverviewComponent } from './component/overview/overview.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TracktimeComponent } from './component/tracktime/tracktime.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { HomwpageComponent } from './component/homwpage/homwpage.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './component/chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ChartComponent, CommonModule, LoginComponent, AddtimeComponent, CalendarviewComponent, HomecontainerComponent, HomwpageComponent, OverviewComponent, SidebarComponent, TracktimeComponent, UserprofileComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'time-app-regi';
}
