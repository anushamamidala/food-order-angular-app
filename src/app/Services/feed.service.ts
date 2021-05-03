import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) { }

  getAllFeeds(){
      return this.http.get('assets/feed.json')
  }
}