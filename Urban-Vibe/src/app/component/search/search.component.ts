import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from '../display/display.component';
import { PexelsService } from '../../service/pexels.service';


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
  photos: any[] = [];

  @Output() search = new EventEmitter<string>();

  constructor(private pexelsService: PexelsService) {}

  handleSearch(city: string): void {
    this.currentCity = city;
    this.currentCity = city.trim() !== '' ? city : undefined;
    if (this.currentCity) {
    this.pexelsService.searchPhotos(city).subscribe({
      next: (data) => {
        console.log('Foto ricevute:', data);
        this.photos = data.photos; // Pixabay restituisce le foto in "photos"
      },
      error: (error) => {
        console.error('Errore durante la ricerca delle foto:', error);
      }
    });
    }  else {
    this.photos = [];
  }
  
}

  clearSearch(): void {
    this.searchQuery = '';
    this.search.emit(this.searchQuery);
    this.currentCity = undefined;
    this.photos = [];
  }

}
