import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'spy-parent',
  templateUrl: './spy.component.html',
  providers:  [LoggerService]
})
export class SpyParentComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {
    this.logger.log(`constructor`);
  }

  ngOnInit() {
    this.logger.log(`onInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page111
  ngDoCheck() { this.logger.log('DoCheck'); }

  ngAfterContentInit() { this.logger.log('AfterContentInit');  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logger.log('AfterContentChecked'); }

  ngAfterViewInit() { this.logger.log('AfterViewInit'); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logger.log('AfterViewChecked'); }

  ngOnDestroy() { this.logger.log('OnDestroy'); }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('reset');
    this.heroes = [];
    this.logger.tick();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/