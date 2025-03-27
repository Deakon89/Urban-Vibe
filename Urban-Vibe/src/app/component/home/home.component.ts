import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menuActive: boolean = false;
  

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  hasChildRoute(outlet: RouterOutlet): boolean {
    return outlet.isActivated;
  }
}
