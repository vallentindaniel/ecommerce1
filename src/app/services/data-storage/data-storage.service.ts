import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../auth/user/user';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  user= new Subject<boolean>();

  constructor() {}

}
