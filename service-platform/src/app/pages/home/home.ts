import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  features = [
    {
      icon: 'assignment',
      title: 'Create Job Matrix',
      description: 'Define your project scope, frameworks, and budget in a structured format.'
    },
    {
      icon: 'dashboard',
      title: 'Manage Projects',
      description: 'Monitor all your active projects in one centralized dashboard.'
    },
    {
      icon: 'schedule',
      title: 'Schedule Calls',
      description: 'Easily book discovery calls, onboarding, and support sessions.'
    },
    {
      icon: 'people',
      title: 'Connect with Talent',
      description: 'Find and collaborate with qualified digital contractors.'
    }
  ];

  steps = [
    {
      number: '1',
      title: 'Create Your Request',
      description: 'Define your project requirements using our job matrix template or from scratch.'
    },
    {
      number: '2',
      title: 'Set Your Budget',
      description: 'Specify budget and payment terms. Our system auto-calculates overhead.'
    },
    {
      number: '3',
      title: 'Schedule Discovery',
      description: 'Book a discovery call with our team to discuss your needs.'
    },
    {
      number: '4',
      title: 'Start Collaborating',
      description: 'Once matched, begin working with your contractor and track progress.'
    }
  ];
}
