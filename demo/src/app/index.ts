import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {Angulartics2, Angulartics2On} from 'angulartics2';
import {Angulartics2GoogleAnalytics} from 'angulartics2/src/providers/angulartics2-google-analytics';
import {Angulartics} from './angulartics2.workaround';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  NgbdAccordion,
  NgbdAlert,
  NgbdButtons,
  NgbdCarousel,
  NgbdCollapse,
  NgbdDropdown,
  NgbdModal,
  NgbdPagination,
  NgbdPopover,
  NgbdProgressbar,
  NgbdRating,
  NgbdTabs,
  NgbdTimepicker,
  NgbdTooltip,
  NgbdTypeahead
} from './components';

import {DefaultComponent} from './default';
import {GettingStarted} from './getting-started';
import {ContentWrapper, SideNavComponent} from './shared';
import {AppComponent} from './app.component';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    GettingStarted,
    NgbdAccordion,
    NgbdAlert,
    NgbdButtons,
    NgbdCarousel,
    NgbdCollapse,
    NgbdDropdown,
    NgbdModal,
    NgbdPagination,
    NgbdPopover,
    NgbdProgressbar,
    NgbdRating,
    NgbdTabs,
    NgbdTimepicker,
    NgbdTooltip,
    NgbdTypeahead,
    ContentWrapper,
    SideNavComponent,
    Angulartics2On
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NgbModule
  ],
  providers: [
    {provide: Angulartics2, useClass: Angulartics},
    Angulartics2GoogleAnalytics],
  bootstrap: [AppComponent]
})
export class NgbdModule {
}
