import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // تحديد الإحداثيات والمستوى الافتراضي للتكبير
    this.map = L.map('map').setView([24.7136, 46.6753], 8); // الرياض

    // تحميل خريطة من OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // إضافة ماركر
    L.marker([24.7136, 46.6753])
      .addTo(this.map)
      .bindPopup('موقعنا الحالي')
      .openPopup();
  }
}
