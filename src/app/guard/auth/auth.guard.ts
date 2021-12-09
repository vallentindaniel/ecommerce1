import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthentificated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataStorageService: DataStorageService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      this.dataStorageService.user.subscribe(usr=>{
        this.isAuthentificated = true; ;
      })

      if( storeData != null && storeData == "true")
         this.isAuthentificated = true;
      else
         this.isAuthentificated = false;

      if (!this.isAuthentificated) {
        this.router.navigate(['auth']);
        return false;
      }
      return true;
  }

}
