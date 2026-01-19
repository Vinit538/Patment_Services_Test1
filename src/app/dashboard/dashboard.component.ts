import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ✅ ADD THIS
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ ADD FormsModule
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  total = 0;
  success = 0;
  failed = 0;
  pending = 0;

  paymentId!: number;
  payment: any = null;
  message = '';

  constructor(private service: PaymentService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats() {
    this.service.getAll().subscribe((data: any[]) => {
      this.total = data.length;
      this.success = data.filter(p => p.status?.toUpperCase() === 'SUCCESS').length;
      this.failed = data.filter(p => p.status?.toUpperCase() === 'FAILED').length;
      this.pending = data.filter(p => p.status?.toUpperCase() === 'PENDING').length;
    });
  }

  getById() {
    if (!this.paymentId) {
      this.message = 'Please enter payment ID';
      return;
    }

    this.service.getById(this.paymentId).subscribe({
      next: data => {
        this.payment = data;
        this.message = '';
      },
      error: () => {
        this.payment = null;
        this.message = 'Payment not found';
      }
    });
  }

  deleteById() {
    if (!this.paymentId) {
      this.message = 'Please enter payment ID';
      return;
    }

    if (!confirm('Are you sure you want to delete this payment?')) {
      return;
    }

    this.service.delete(this.paymentId).subscribe({
      next: () => {
        this.message = 'Payment deleted successfully';
        this.payment = null;
        this.paymentId = 0;
        this.loadStats();
      },
      error: () => {
        this.message = 'Delete failed';
      }
    });
  }
}
