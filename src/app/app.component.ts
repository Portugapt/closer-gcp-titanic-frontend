import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitanicPredictionService } from './titanic-prediction.service';
import { TitanicRequest } from './titanic-request.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TitanicPredictionService],
})
export class AppComponent {
  titanicForm: FormGroup;
  result: { prediction: number; uuid: string } | null = null;

  constructor(
    private fb: FormBuilder,
    private titanicPredictionService: TitanicPredictionService
  ) {
    this.titanicForm = this.fb.group({
      Age: ['', Validators.required],
      SibSp: ['', Validators.required],
      Parch: ['', Validators.required],
      Fare: ['', Validators.required],
      Sex: ['', Validators.required],
      Embarked: ['', Validators.required],
      Pclass: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.titanicForm.valid) {
      const requestData: TitanicRequest = this.titanicForm.value;
      this.titanicPredictionService.getPrediction(requestData).subscribe(
        (response) => {
          console.log('Success:', response);
          this.result = response;
        },
        (error) => {
          console.error('Error:', error);
          this.result = null;
        }
      );
    }
  }
}
