import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTimepickerModule,
    MatIconModule,
  ],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  bookingForm: FormGroup;
  bookingConfirmed = signal(false);
  confirmedBooking = signal<any>(null);

  callTypes = [
    { value: 'discovery', label: 'Discovery Call', duration: '30 mins' },
    { value: 'onboarding', label: 'Onboarding Session', duration: '60 mins' },
    { value: 'support', label: 'Support & Check-in', duration: '30 mins' },
    { value: 'consultation', label: 'Technical Consultation', duration: '45 mins' },
    { value: 'retrospective', label: 'Project Retrospective', duration: '60 mins' },
  ];

  timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      callType: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: [''],
      agreeTerms: [false, Validators.requiredTrue],
    });
  }

  submitBooking(): void {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;
      this.confirmedBooking.set({
        ...formData,
        callTypeLabel: this.callTypes.find(c => c.value === formData.callType)?.label,
      });
      this.bookingConfirmed.set(true);
      console.log('Booking submitted:', formData);
    }
  }

  resetForm(): void {
    this.bookingForm.reset();
    this.bookingConfirmed.set(false);
    this.confirmedBooking.set(null);
  }

  getDayOfWeek(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
}
