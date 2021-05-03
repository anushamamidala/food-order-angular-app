import { Component, OnInit } from '@angular/core';
import { Feed } from '../Model/feed';
import { FeedService } from '../Services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedItems: Feed[];
  selectedItems: Feed[];
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.getAllFeeds().subscribe((data: Feed[]) => {
      console.log(data)
      this.feedItems = data;
      this.selectedItems = this.feedItems;

    });
  }

  onSearchInputChange(event) {
    if (event.target.value == "") {
      this.selectedItems = this.feedItems;
    }
    else {
      this.selectedItems = this.feedItems.filter(val => val.name.toLowerCase().includes(event.target.value.toLowerCase()));
    }
    console.log(event.target.value)
  }

}
