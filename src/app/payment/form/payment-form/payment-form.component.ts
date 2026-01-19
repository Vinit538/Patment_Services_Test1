import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../payment.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-form.component.html'
})
export class PaymentFormComponent implements OnInit {

  id: number | null = null;
  isEdit = false;

  payment = {
    payerName: '',
    amount: 0,
    status: 'PENDING'
  };

  constructor(
    private route: ActivatedRoute,
    private service: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId) {
      // ✅ EDIT MODE
      this.isEdit = true;
      this.id = Number(paramId);

      this.service.getById(this.id).subscribe(data => {
        this.payment = data;
      });
    }
  }

  save() {
    if (this.isEdit && this.id !== null) {
      this.service.update(this.id, this.payment).subscribe(() => {
        alert('Payment updated');
        this.router.navigate(['/payments']);
      });
    } else {
      this.service.create(this.payment).subscribe(() => {
        alert('Payment added');
        this.router.navigate(['/payments']);
      });
    }
  }
}
