import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
  ],
  template: `
    <mat-toolbar class="navbar">
      <div class="navbar-container">
        <a routerLink="/" class="logo">Digital Contractor</a>
        
        <nav class="nav-links">
          <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            Home
          </a>
          <a mat-button routerLink="/service-request" routerLinkActive="active">
            Create Request
          </a>
          <a mat-button routerLink="/dashboard" routerLinkActive="active">
            Dashboard
          </a>
          <a mat-button routerLink="/about" routerLinkActive="active">
            About
          </a>
        </nav>

        <div class="navbar-actions">
          <button mat-icon-button [matMenuTriggerFor]="userMenu">
            <mat-icon>account_circle</mat-icon>
          </button>
          <mat-menu #userMenu="matMenu">
            <button mat-menu-item>Profile</button>
            <button mat-menu-item>Settings</button>
            <mat-divider></mat-divider>
            <button mat-menu-item>Sign Out</button>
          </mat-menu>
        </div>
      </div>
    </mat-toolbar>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {}
