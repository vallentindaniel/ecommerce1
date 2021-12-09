import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToggleSidebarService } from 'src/app/services/components/toggle-sidebar/toggle-sidebar.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //opened: boolean =  true;

  show: boolean =  false;

  constructor(
    private toggleSidebar: ToggleSidebarService
  ) {
  }

  ngOnInit(): void {
    this.toggleSidebar.show.subscribe((show)=>{
      this.show = show;
    });
  }

}
