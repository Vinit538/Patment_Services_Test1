import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {

  payments: any[] = [];

  constructor(private service: PaymentService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data: any[]) => {
      this.payments = data;
    });
  }
}
