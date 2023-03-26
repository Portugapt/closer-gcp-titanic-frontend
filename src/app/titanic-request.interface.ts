export interface TitanicRequest {
  Age: number;
  SibSp: number;
  Parch: number;
  Fare: number;
  Sex: 'male' | 'female';
  Embarked: 'C' | 'Q' | 'S';
  Pclass: number;
}

export interface TitanicResponse {
  prediction: number;
  uuid: string;
}
