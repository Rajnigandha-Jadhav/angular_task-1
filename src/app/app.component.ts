import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myApp';
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  submitForm(data: any) {
    console.log(data);
  }
}