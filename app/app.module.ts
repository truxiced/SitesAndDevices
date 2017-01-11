import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { SitesComponent } from 'app/components/sites/sites.component';
import { DetailsComponent } from 'app/components/details/details.component';
import { TreeComponent } from 'app/components/tree/tree.component';
import { TreeItemComponent } from 'app/components/treeItem/treeItem.component';

import { ExpandDirective } from 'app/directives/expand/expand.directive';
import { ToggleIconDirective } from 'app/directives/toggleIcon/toggleIcon.directive';



@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ SitesComponent, DetailsComponent, TreeComponent, TreeItemComponent, ExpandDirective, ToggleIconDirective],
  bootstrap:    [ SitesComponent]
})
export class AppModule { }
