import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserviewComponent } from './userview/userview.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UsergraphComponent } from './usergraph/usergraph.component';
import { AdmingraphComponent } from './admingraph/admingraph.component';
import { AdmintopbarComponent } from './admintopbar/admintopbar.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminViewComponent,
    UserviewComponent,
    TopbarComponent,
    UsergraphComponent,
    AdmingraphComponent,
    AdmintopbarComponent
  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path:'register', component: RegisterComponent },
      { path:'adminview', component: AdminViewComponent , canActivate: [AuthGuardService]},
      { path:'userview', component: UserviewComponent , canActivate: [AuthGuardService]},
      { path:'admingraph', component: AdmingraphComponent, canActivate: [AuthGuardService]},
      { path:'usergraph', component: UsergraphComponent, canActivate: [AuthGuardService]}
    ])
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
