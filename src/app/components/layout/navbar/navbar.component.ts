import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToggleSidebarService } from 'src/app/services/components/toggle-sidebar/toggle-sidebar.service';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  show: boolean = false;

  private userSub: any;
  isAuthentificated: boolean = false;



  constructor(
    private toggleSidebar: ToggleSidebarService,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) {

  }

  toggle(){
    this.show = !this.show;
    this.toggleSidebar.show.next(this.show);
  }

  logout(){
    this.authService.logout();
    this.isAuthentificated = false;
  }

  ngOnInit(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      this.dataStorageService.user.subscribe(usr=>{
        this.isAuthentificated = true; ;
      })

      if( storeData != null && storeData == "true")
         this.isAuthentificated = true;
      else
         this.isAuthentificated = false;
  }

}
