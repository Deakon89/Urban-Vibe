import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AirQualityService } from '../../service/air-quality-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-display',
  imports: [
    RouterModule, 
    CommonModule, 
    MatCardModule,
  ],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})

// city display
export class DisplayComponent implements OnChanges {
  @Input() city?: string; 
  airQualityInfo: any;
  
  constructor(private airQualityService: AirQualityService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['city'] && this.city) {
      this.airQualityService.getAirQuality(this.city).subscribe({
        next: (data) => {
          console.log(data);
          this.airQualityInfo = data;
        },
        error: (error) => {
          console.error('Error fetching air quality', error);
        }
      });
    }
  }
}
