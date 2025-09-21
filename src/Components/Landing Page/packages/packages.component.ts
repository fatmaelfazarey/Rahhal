// packages.component.ts
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AllPackagesComponent } from "./packages components/all-packages/all-packages.component";

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [RouterModule, AllPackagesComponent],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  categoryId: string = 'all';

  setCategory(categoryId: string): void {
    this.categoryId = categoryId;
    // console.log(categoryId);
  }
  constructor() {
    console.log(this.categoryId);
  }
}