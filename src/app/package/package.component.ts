import { Component } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  title: string = 'Popular Packages';
  packages: any[] = [
    {id: 1, name: 'Beach Getaway', description: 'Relax and unwind on a beautiful beach.', price: 999},
    {id: 2, name: 'City Adventure', description: 'Explore a vibrant city full of history and culture.', price: 1499},
    {id: 3, name: 'Mountain Retreat', description: 'Get away from it all and enjoy the tranquility of the mountains.', price: 1999}
  ];

  packageClicked(id: number) {
    console.log(`Package ${id} clicked!`);
  }

}
