import { Component } from '@angular/core';

interface Package {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  destinations: string[];
}

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  title: string = 'Available Packages';

  packages: Package[] = [
    {
      id: 1,
      name: 'Platinum Package',
      description: 'Experience luxury and extravagance with our Platinum Package. This package includes luxurious accommodations, private transportation, gourmet dining experiences, and exclusive access to premium attractions.',
      price: '100,000 INR',
      duration: '7 days',
      destinations: ['Paris', 'Maldives', 'Switzerland']
    },
    {
      id: 2,
      name: 'Gold Package',
      description: 'Indulge in a premium travel experience with our Gold Package. Enjoy deluxe accommodations, guided tours of iconic landmarks, and immersive cultural experiences.',
      price: '70,000 INR',
      duration: '5 days',
      destinations: ['Dubai', 'Rome', 'Bali']
    },
    {
      id: 3,
      name: 'Silver Package',
      description: 'Discover the beauty of our Silver Package. This package offers comfortable accommodations, guided sightseeing tours, and authentic local cuisine.',
      price: '50,000 INR',
      duration: '4 days',
      destinations: ['New York', 'Venice', 'Tokyo']
    },
    {
      id: 4,
      name: 'Honeymoon Package',
      description: 'Celebrate your love with our Honeymoon Package. Enjoy romantic getaways, candlelight dinners, and breathtaking views in some of the world\'s most romantic destinations.',
      price: '90,000 INR',
      duration: '6 days',
      destinations: ['Santorini', 'Bora Bora', 'Maui']
    },
    {
      id: 5,
      name: 'Family Trip Package',
      description: 'Create unforgettable memories with our Family Trip Package. Enjoy fun-filled activities, family-friendly accommodations, and exciting adventures suitable for all ages.',
      price: '60,000 INR',
      duration: '5 days',
      destinations: ['Orlando', 'Hawaii', 'Costa Rica']
    },
    {
      id: 6,
      name: 'Group Trip Package',
      description: 'Embark on an adventure with our Group Trip Package. Experience camaraderie, exciting excursions, and shared memories with your friends or colleagues.',
      price: '55,000 INR',
      duration: '4 days',
      destinations: ['Amsterdam', 'Barcelona', 'Prague']
    },
    // Add more packages as needed...
  ];

  selectedPackageId: number | null = null;

  viewDetails(packageId: number): void {
    if (this.selectedPackageId === packageId) {
      this.selectedPackageId = null;
    } else {
      this.selectedPackageId = packageId;
    }
  }
}
