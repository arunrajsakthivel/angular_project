import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
  title: string = 'Popular Places';
  places: Place[] = [
    {
      name: 'Tamil Nadu',
      description: 'The Pride of India',
      image: 'assets/images/tamilnadu.jpg',
      fullDescription:'Thanjavur (Tanjavur or Tanjore) is a temple site in the Tamil Nadu region of southern India. Thanjavur was the capital of the great Chola (Cola) king Rajaraja I, and it was he who commissioned the site\'s magnificent temple, the Brihadishvara, in the early 11th century CE.',
      showFullDescription:false
    },
    {
      name: 'Paris',
      description: 'The City of Love',
      image: 'assets/images/paris.jpg',
      fullDescription:'Paris is a diverse and sophisticated city that appeals to the wealthy but can also be enjoyed on a budget. In addition to the Eiffel Tower, Paris has countless other gorgeous landmarks and monuments that add to the beauty of the spacious boulevards and their charming cafés.',
      showFullDescription:false
    },
    {
      name: 'New York',
      description: 'The Big Apple',
      image: 'assets/images/new-york.jpg',
      fullDescription:'There is something magical about New York City. From the hustle and bustle of Times Square to the iconic skyline, NYC is a city like no other. Whether you’re visiting for the first time or the hundredth time, it’s guaranteed to be an unforgettable experience.',
      showFullDescription:false
    },
    {
      name: 'Tokyo',
      description: 'The Land of the Rising Sun',
      image: 'assets/images/tokyo.jpg',
      fullDescription:'No buildings in Tokyo are listed as World Heritage Sites. Among buildings, only the Jizo Hall of Shofuku-ji, a suburban temple, is a National treasure. Other popular attractions include the Imperial Palace, Meiji Shrine, and Sensō-ji, a popular temple. Many tourists, particularly foreigners, visit Tsukiji Fish Market.',
      showFullDescription:false
    },
    {
      name: 'London',
      description: 'The Capital of England',
      image: 'assets/images/london.jpg',
      fullDescription:'A visit to London is a must for everyone as this is one city that will make you fall in love with it so much that you\'ll want to keep coming back. With stunning architecture, gorgeous gardens, magnificent towers, busy streets, many shops, and some iconic sites, London is everything dreamy.',
      showFullDescription:false
    },
    {
      name: 'Rome',
      description: 'The Eternal City',
      image: 'assets/images/rome.jpg',
      fullDescription:'With its unparalleled history, Rome is the third most visited city in Europe and the fourteenth worldwide. It attracts visitors from all over the world who are impatient to discover the city\'s impressive monuments and archaeological sites; not to mention its renowned cuisine and its lively atmosphere.',
      showFullDescription:false
    },
    {
      name: 'Sydney',
      description: 'The Harbour City',
      image: 'assets/images/sydney.jpg',
      fullDescription:'A city of iconic attractions and brilliant beaches, Sydney is a destination you\'ll never forget. Sydney is home to must-visit icons like the Sydney Harbour Bridge and Opera House, but this Harbour City is constantly evolving.',
      showFullDescription:false
    },
    {
      name: 'Barcelona',
      description: 'The City of Gaudi',
      image: 'assets/images/barcelona.jpg',
      fullDescription:'Barcelona is a Mediterranean city with excellent beaches and good weather. Art, gastronomy, and sports excel exceptionally. Gaudi\'s architecture, 28 Michelin stars restaurants (2024), and the Barcelona Football Club (soccer) have made our city a world-famous travel destination. Barcelona is much more.',
      showFullDescription:false
    },
    {
      name: 'Dubai',
      description: 'The City of Gold',
      image: 'assets/images/dubai.jpg',
      fullDescription:'With stunning architecture, fancy hotels, shopping festivals, majestic skyscrapers, glittering skylines, and giant shopping malls, Dubai is truly a paradise for scores of tourists from around the world.',
      showFullDescription:false
    },
    {
      name: 'Venice',
      description: 'The Floating City',
      image: 'assets/images/venice.jpg',
      fullDescription:'Old buildings and grand palaces rise from the water, adding to the timeless feel of the place. Blending history, art and culture with a good dose of delectable food and drink, it\'s somewhere that should be on everyone\'s bucket list.',
      showFullDescription:false
    },
    {
      name: 'Santorini',
      description: 'The Gem of the Aegean',
      image: 'assets/images/santorini.jpg',
      fullDescription:'Santorini is a fantastic Cycladic island in the southern Aegean Sea with astonishing volcanic scenery and world-famous sunset vistas. It comprises a luxury-oriented destination that is perfect for couples, with rich viticulture and history to dive into.',
      showFullDescription:false
    }
  ];

  toggleDescription(place: Place): void {
    // Toggle the visibility of full description for the given place
    place.showFullDescription = !place.showFullDescription;
  }
}

interface Place {
  name: string;
  description: string;
  image: string;
  fullDescription: string;
  showFullDescription: boolean;
}
