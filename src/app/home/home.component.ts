import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.item = af.database.object('/olhoteste');
  }
  save(newName: string,newSize: string) {
    this.item.set({
      name: newName,
      tamanho: newSize
    });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }

  ngOnInit() {
  }

}
