import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

interface Project {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'completed';
  progress: number;
  budget: string;
  deadline: string;
  category: string;
  lastUpdate: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTableModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  projects = signal<Project[]>([
    {
      id: '1',
      name: 'E-commerce Platform Redesign',
      status: 'active',
      progress: 65,
      budget: '$15,000',
      deadline: '2024-06-15',
      category: 'Web Development',
      lastUpdate: '2 hours ago',
    },
    {
      id: '2',
      name: 'Mobile App Backend API',
      status: 'active',
      progress: 40,
      budget: '$8,500',
      deadline: '2024-07-20',
      category: 'Backend Development',
      lastUpdate: '1 day ago',
    },
    {
      id: '3',
      name: 'Data Analytics Dashboard',
      status: 'pending',
      progress: 0,
      budget: '$5,000',
      deadline: '2024-06-30',
      category: 'Data Analytics',
      lastUpdate: 'Not started',
    },
    {
      id: '4',
      name: 'Cloud Migration Project',
      status: 'active',
      progress: 85,
      budget: '$20,000',
      deadline: '2024-05-30',
      category: 'Cloud Infrastructure',
      lastUpdate: '5 hours ago',
    },
    {
      id: '5',
      name: 'UI/UX Design System',
      status: 'completed',
      progress: 100,
      budget: '$12,000',
      deadline: '2024-04-15',
      category: 'Design',
      lastUpdate: 'Completed',
    },
  ]);

  get activeProjects(): Project[] {
    return this.projects().filter(p => p.status === 'active');
  }

  get pendingProjects(): Project[] {
    return this.projects().filter(p => p.status === 'pending');
  }

  get completedProjects(): Project[] {
    return this.projects().filter(p => p.status === 'completed');
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'primary';
      case 'pending':
        return 'warn';
      case 'completed':
        return 'accent';
      default:
        return 'basic';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'active':
        return 'play_circle';
      case 'pending':
        return 'schedule';
      case 'completed':
        return 'check_circle';
      default:
        return 'help_circle';
    }
  }
}
