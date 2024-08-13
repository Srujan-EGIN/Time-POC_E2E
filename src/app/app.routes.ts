import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomwpageComponent } from './component/homwpage/homwpage.component';
import { AddtimeComponent } from './component/addtime/addtime.component';
import { CalendarviewComponent } from './component/calendarview/calendarview.component';
import { OverviewComponent } from './component/overview/overview.component';
import { TracktimeComponent } from './component/tracktime/tracktime.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';

export const routes: Routes = [
  {path : "", component : LoginComponent},
    {path : "addtime", component : AddtimeComponent},
    {path : "calview", component : CalendarviewComponent},
    {path : "track", component : TracktimeComponent},
    {path : "userprofile", component : UserprofileComponent},
    {path : "overview", component : OverviewComponent},
  {path : "home", component : HomwpageComponent},
];
