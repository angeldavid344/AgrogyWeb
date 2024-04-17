import { Component } from '@angular/core';
import { NavComponent } from "../../shared/nav/nav.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [NavComponent]
})
export class DashboardComponent {

}
