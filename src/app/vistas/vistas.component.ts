import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent {
  selectedOption: string = 'producto';

  constructor(private router: Router) { }

  navigateToForm() {
    this.router.navigate([this.selectedOption]);
  }
}
