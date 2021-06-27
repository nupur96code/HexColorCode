import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-enter-colour',
  templateUrl: './enter-colour.component.html',
  styleUrls: ['./enter-colour.component.css']
})
export class EnterColourComponent implements OnInit {
  ColourForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private sharedData: SharedDataService,

  ) {
    this.ColourForm = this.formBuilder.group({
      ColorHexCode: new FormControl(null, [Validators.required, Validators.pattern('^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')]),
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    let self = this
    if (self.ColourForm.valid) {
      let colour = "#" + self.ColourForm.get('ColorHexCode')?.value;
      self.sharedData.setColour(colour);
    }
  }
}
