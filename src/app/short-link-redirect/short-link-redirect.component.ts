import { Component, OnInit } from '@angular/core';
import { collection, collectionData, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RedirectStore } from '../short-link/short-link.component';

@Component({
  selector: 'app-short-link-redirect',
  templateUrl: './short-link-redirect.component.html',
  styleUrls: ['./short-link-redirect.component.css']
})
export class ShortLinkRedirectComponent implements OnInit{
  item$: Observable<RedirectStore[]>;
  itemCollection: CollectionReference<DocumentData>;

  key = '';

  constructor(private router: Router, private store: Firestore) {
    this.itemCollection = collection(store, 'redirects');
    this.item$ = collectionData(this.itemCollection) as Observable<RedirectStore[]>;
  }

  ngOnInit(): void {
    this.key = this.router.url.split('/')[2];
    console.log(this.key);
    this.item$.subscribe(items => {
      items.forEach(item => {
        if (item.shortUrl === this.key){
          window.location.href = item.url;
        }
      })
    })
  }

}
