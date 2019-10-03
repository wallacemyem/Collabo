import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { SchedulePage } from '../schedule/schedule';
import { GridPage } from '../grid/grid';
import { FeedPage } from '../feed/feed';
import { ListingPage } from '../listing/listing';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor() {
    this.tab1Root = ListingPage;
    this.tab2Root = ProfilePage;
    this.tab3Root = SchedulePage;
    this.tab4Root = GridPage;
    this.tab5Root = NotificationsPage;
  }
}
