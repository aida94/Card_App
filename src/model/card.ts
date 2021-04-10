export interface CardInterface {
  id: number;
  name: string;
  cardNumber: number;
  expiryDate: string;
  cvc: number;
}

export class Card {
  id: number;
  name: string;
  cardNumber: number;
  expiryDate: string;
  cvc: number;

  constructor(data: CardInterface) {
    this.id = data.id;
    this.name = data.name;
    this.cardNumber = data.cardNumber;
    this.expiryDate = data.expiryDate;
    this.cvc = data.cvc;
  }
}
