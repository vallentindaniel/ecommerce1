import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Category} from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.categoriesCollection = afs.collection<Category>('categories');
    this.categories = this.categoriesCollection.valueChanges({ idField: 'categoryID' });
  }

  getCategories(){
    return this.categories;
  }

}
