import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./layout/publico/login/login/login.component";
import { HeaderComponent } from "./shared/header/header.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, HeaderComponent, DashboardComponent, FooterComponent]
})
export class AppComponent {
  title = 'AgrogyWeb';
}
