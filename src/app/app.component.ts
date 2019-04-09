import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images;
  user: any[];
  constructor(db: AngularFireDatabase) {
    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    db.list('/user').valueChanges().subscribe(user => {
        this.user = user;
        console.log(this.user);
     });
  }
}
