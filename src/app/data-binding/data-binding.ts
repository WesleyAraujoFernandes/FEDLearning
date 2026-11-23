import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name: string = 'FED Learning';
  topic: string = '4 Types of Data Binding...';
  image: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGm3-EPGReO14nVGJKy2EWN5Fd1hWhZEQ3TrXjNaXw5A&s=10';
  onSubmitClick() {
    alert('Data saved successfully.');
  }

  onCountryChange() {
    alert('Country has change');
  }
}
