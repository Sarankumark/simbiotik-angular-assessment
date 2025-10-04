import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-routing-map',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './routing-map.component.html',
  styleUrl: './routing-map.component.css'
})
export class RoutingMapComponent {

}
