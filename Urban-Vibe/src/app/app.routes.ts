import { Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { SearchbarComponent } from './component/search/search.component';
import { DisplayComponent } from './component/display/display.component';
import { ProfileComponent } from './component/profile/profile.component';


export const routes: Routes = [
    {  path: '', component: HomeComponent , children: [
        { path: 'about-us', component: AboutUsComponent, data:{animation: 'about-us'} },
        { path: 'profile', component: ProfileComponent, data:{animation: 'profile'} },
        { path: 'search', component: SearchbarComponent, data:{animation: 'search'}},
        { path: 'display/:city', component: DisplayComponent, data:{animation: 'display'}},   
    ]},
    
];
