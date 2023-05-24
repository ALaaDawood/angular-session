import { Component, OnInit } from '@angular/core';
import { AgeServiceService } from '../services/age-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  data!: any;
  form!: FormGroup;

  constructor(
    private ageService: AgeServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
    });
   }

  onSubmit(): void {
    this.ageService.get(this.form.value.name).subscribe(age => {
      this.data = age;
    });
  }

}
