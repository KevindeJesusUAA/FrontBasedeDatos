import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit{
  selectedOption: string = 'producto';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.navigateToForm();
  }

  navigateToForm() {
    this.router.navigate([this.selectedOption]);
  }
}
