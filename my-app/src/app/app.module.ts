import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { ExperiencePipe } from './experience.pipe';
import { RegisterComponent } from './register/register.component';
import { GenderPipe } from './gender.pipe';
import { PnoPipe } from './pno.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { EmpbyidComponent } from './empbyid/empbyid.component';


const appRoot: Routes = [ {path: '', component:LoginComponent},
                         {path: 'login', component:LoginComponent},
                         {path: 'register', canActivate: [AuthGuard], component:RegisterComponent},
                         {path: 'showemp', canActivate: [AuthGuard], component:EmpComponent},
                         {path: 'products', canActivate: [AuthGuard], component:  ProductComponent},
                         {path: 'empbyid', canActivate: [AuthGuard], component: EmpbyidComponent}
                        ];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    EmpComponent,
    ExperiencePipe,
    RegisterComponent,
    GenderPipe,
    PnoPipe,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LogoutComponent,
    EmpbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(appRoot),HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
