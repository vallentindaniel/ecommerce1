import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {

  x: boolean = false;
  show: BehaviorSubject<boolean> = new BehaviorSubject(this.x);

  constructor() { }
}
