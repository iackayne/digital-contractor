import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>Digital Contractor</h4>
          <p>Professional service contracting platform for digital talent.</p>
        </div>

        <div class="footer-section">
          <h5>Platform</h5>
          <ul>
            <li><a routerLink="/service-request">Create Request</a></li>
            <li><a routerLink="/dashboard">Dashboard</a></li>
            <li><a routerLink="/scheduling">Schedule Call</a></li>
            <li><a routerLink="/about">About</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h5>Company</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h5>Connect</h5>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Digital Contractor. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {}
