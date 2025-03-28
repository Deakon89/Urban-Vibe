import { Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { SearchbarComponent } from './component/search/search.component';
import { animation } from '@angular/animations';
import { DisplayComponent } from './component/display/display.component';

export const routes: Routes = [
    {  path: '', component: HomeComponent , children: [
        { path: 'about-us', component: AboutUsComponent, data:{animation: 'about-us'} },
        { path: 'search', component: SearchbarComponent, data:{animation: 'search'}, children: [
            { path: 'display/:city', component: DisplayComponent, data:{animation: 'display'} },
        ] },
    ]},
    
];
