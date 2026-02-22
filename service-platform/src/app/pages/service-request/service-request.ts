import { Component, signal } from '@angular/core';
import { CommonModule, FormModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-service-request',
  standalone: true,
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
  ],
  templateUrl: './service-request.html',
  styleUrl: './service-request.scss',
})
export class ServiceRequest {
  form: FormGroup;
  selectedFrameworks = signal<string[]>([]);
  selectedPaymentTerms = signal<string[]>([]);

  frameworks = [
    'Daily Activity Logs',
    'Weekly Development Report',
    'Monthly Case Summary',
    'Creating Memo',
    'Communicating Inquiries',
    'Navigating Proprietary Tools',
    'CI/CD Pipeline',
    'Code Review Process',
  ];

  paymentTerms = [
    'Upfront Payment',
    'Milestone-Based',
    'Weekly Invoicing',
    'Monthly Invoicing',
    'Retainer Model',
  ];

  budgetRanges = [
    { value: '1k-5k', label: '$1,000 - $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
  ];

  templates = [
    { name: 'Web Development', value: 'web-dev' },
    { name: 'Mobile App', value: 'mobile' },
    { name: 'Data Analytics', value: 'analytics' },
    { name: 'Cloud Infrastructure', value: 'cloud' },
    { name: 'Custom Project', value: 'custom' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      template: ['', Validators.required],
      projectName: ['', Validators.required],
      projectContext: ['', Validators.required],
      projectIntent: ['', Validators.required],
      sampleOutput: [''],
      outputGuidelines: [''],
      budgetRange: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      additionalNotes: [''],
    });
  }

  toggleFramework(framework: string): void {
    const current = this.selectedFrameworks();
    if (current.includes(framework)) {
      this.selectedFrameworks.set(current.filter(f => f !== framework));
    } else {
      this.selectedFrameworks.set([...current, framework]);
    }
  }

  togglePaymentTerm(term: string): void {
    const current = this.selectedPaymentTerms();
    if (current.includes(term)) {
      this.selectedPaymentTerms.set(current.filter(t => t !== term));
    } else {
      this.selectedPaymentTerms.set([...current, term]);
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        frameworks: this.selectedFrameworks(),
        paymentTerms: this.selectedPaymentTerms(),
      };
      console.log('Form submitted:', formData);
      alert('Service request submitted! Check console for details.');
    }
  }

  resetForm(): void {
    this.form.reset();
    this.selectedFrameworks.set([]);
    this.selectedPaymentTerms.set([]);
  }
}
