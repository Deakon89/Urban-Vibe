import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routeAnimations } from '../../route-animation';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [routeAnimations],
  template: `
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `
})
export class HomeComponent {
  menuActive: boolean = false;

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'github-brands',
      domSanitizer.bypassSecurityTrustResourceUrl('/Urban-Vibe/public/github-brands.svg')
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

 
  
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  hasChildRoute(outlet: RouterOutlet): boolean {
    return outlet.isActivated;
  }
}
