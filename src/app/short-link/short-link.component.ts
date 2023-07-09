import { Component } from '@angular/core';
import { collectionData, Firestore, addDoc } from '@angular/fire/firestore';
import { collection, CollectionReference, DocumentData } from '@firebase/firestore';
import { count, filter, isEmpty, map, Observable, take } from 'rxjs';


interface Item {
  name: string;
}

export interface RedirectStore {
  url: string;
  shortUrl: string;
}

@Component({
  selector: 'app-short-link',
  templateUrl: './short-link.component.html',
  styleUrls: ['./short-link.component.css']
})
export class ShortLinkComponent {
  item$: Observable<RedirectStore[]>;
  itemCollection: CollectionReference<DocumentData>;

  url: string = '';
  shortUrl: string = '';
  isUsed: boolean | undefined = false;

  constructor(private store: Firestore) {
    this.itemCollection = collection(store, 'redirects');
    this.item$ = collectionData(this.itemCollection) as Observable<RedirectStore[]>;
    this.shortUrl = this.makeid(5);
  }

  public async storeInput() {
    console.log('store url', this.url);
    console.log('store shortUrl', this.shortUrl);
    if(!this.url.startsWith('https://')) {
      this.url = 'https://' + this.url;
    }
    await addDoc(this.itemCollection, {url: this.url, shortUrl: this.shortUrl});
  }

  async checkUsage() {
    console.log('usage');
    const items: RedirectStore[] = [];
    const bla = this.item$.pipe(
      take(1),
      map(x => x.filter(i => i.shortUrl === this.shortUrl)),
      isEmpty()
    )
    bla.subscribe(y => console.log(y));

    this.isUsed = !await bla.toPromise();
    console.log(this.isUsed);
  }

  makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


}
