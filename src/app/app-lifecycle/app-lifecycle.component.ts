import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-lifecycle',
  imports: [],
  templateUrl: './app-lifecycle.component.html',
  styleUrl: './app-lifecycle.component.css'
})
export class AppLifecycleComponent implements OnInit, OnChanges, OnDestroy {


  constructor(){
    console.log('Constructor: Component instance created');
  }

  ngOnInit(): void {
      console.log("ngOnInit: Component Initiated");
  }

  ngOnChanges(): void {
      console.log('ngOnChanges: Input Properties changed');
  }

  ngOnDestroy():void{
    console.log('ngOnDestroy: Component destroyed');
  }
}
