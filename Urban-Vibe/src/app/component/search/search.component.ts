import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from '../display/display.component';


@Component({
  selector: 'app-searchbar',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    DisplayComponent
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchbarComponent {
  currentCity?: string;
  searchQuery: string = '';

  @Output() search = new EventEmitter<string>();

  // onSearch(): void {
  //   this.search.emit(this.searchQuery);
  // }

  handleSearch(city: string): void {
    this.currentCity = city;
    this.currentCity = city.trim() !== '' ? city : undefined;
  }

  // onSearchChange(): void {
  //   this.search.emit(this.searchQuery);
  // }

  clearSearch(): void {
    this.searchQuery = '';
    this.search.emit(this.searchQuery);
  }

}
