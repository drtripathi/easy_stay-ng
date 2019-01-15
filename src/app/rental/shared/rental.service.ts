
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RentalService {
	
	
	private rentals: any[] = [{
  	id: 1,
  	title: "Central Apartment",
  	city: "New York",
  	street: "Times Square",
  	category: "apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 3,
  	description: "Very nice Apartment",
  	dailyRate: 34,
  	shared: false,
  	createdAt: "24/12/2018"
  },
  {
  	id: 2,
  	title: "Central Apartment",
  	city: "Santa Clara",
  	street: "New Hall",
  	category: "apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 3,
  	description: "Very nice Apartment",
  	dailyRate: 34,
  	shared: true,
  	createdAt: "24/12/2018"
  },
  {
  	id: 3,
  	title: "Central Apartment 2",
  	city: "San Francisco",
  	street: "Campbell",
  	category: "studio",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 1,
  	description: "Very nice Apartment",
  	dailyRate: 34,
  	shared: false,
  	createdAt: "12/09/2018"
  },
  {
  	id: 4,
  	title: "Central Apartment 3",
  	city: "New York",
  	street: "Times Square",
  	category: "apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 3,
  	description: "Very nice Apartment",
  	dailyRate: 34,
  	shared: false,
  	createdAt: "09/05/2018"
  }];

  public getRentals(): any{
  
  	const rentalObservable = new Observable((observer) =>{
  		
  	
  	setTimeout(() => {
  
  		observer.next(this.rentals);
  	}, 1000);

  	setTimeout(() => {
  
  		observer.error("I am error");
  	}, 2000);

  	setTimeout(() => {
  
  		observer.complete();
  	}, 3000);

  	});
  
  	return rentalObservable;
  }
}

