export interface Payment {
  id?: number;
  userCode: string;
  payerName: string;
  amount: number;
  status: string;
}
