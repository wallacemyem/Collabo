import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
//import { ProfilePage } from '../profile';
import 'rxjs/Rx';

import { ListingModel } from './listing.model';
import { ListingService } from './listing.service';
import { ProfilePage } from '../profile/profile';
//import { LoginPage } from '../login/login';


@Component({
  selector: 'listing-page',
  templateUrl: 'listing.html',
})
export class ListingPage {
  listing: ListingModel = new ListingModel();

  constructor(
    public nav: NavController,
    public listingService: ListingService
  ) {}

  ionViewDidLoad() {
    this.listingService
      .getData()
      .then(data => {
        this.listing.banner_image = data.banner_image;
        this.listing.banner_title = data.banner_title;
        this.listing.populars = data.populars;
        this.listing.categories = data.categories;
      });
  }


  goToFeed(category: any) {
    console.log("Clicked category.link", category);
    this.nav.push(ProfilePage, { category: category });
  }

  goToListing() {
    this.nav.push(ListingPage);

}
}