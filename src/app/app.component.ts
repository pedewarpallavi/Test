import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import { InputformComponent } from './inputform/inputform.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'angularMaterial_ProfileEditModal';

  destroyed = new Subject<void>();
  currentScreenSize: string;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);


  constructor(public dialog:MatDialog, private user:UserService,breakpointObserver: BreakpointObserver){
  
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
     
    }

    ngOnDestroy() {
      this.destroyed.next();
      this.destroyed.complete();
    }
  
userDispalyData:any;

ngOnInit(){

}

ngDoCheck(){

  this.userDispalyData = this.user.user
}



  openDialog() {
    this.dialog.open(InputformComponent);
  }

  
}


