import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ REQUIRED
import { Router } from '@angular/router';
import { PaymentService } from '../../payment.service';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [CommonModule],   // ✅ THIS FIXES *ngFor
  templateUrl: './payment-list.component.html',
})
export class PaymentListComponent implements OnInit {

  payments: any[] = [];

  constructor(
    private service: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments() {
    this.service.getAll().subscribe(data => {
      this.payments = data;
    });
  }

  deletePayment(id: number) {
    this.service.delete(id).subscribe(() => {
      this.loadPayments();
    });
  }

  editPayment(id: number) {
    this.router.navigate(['/payments/edit', id]);
  }
}
