import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Talent {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  bio: string;
  image: string;
  email: string;
  linkedIn: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  talents: Talent[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Senior Full-Stack Developer',
      expertise: ['React', 'Node.js', 'TypeScript', 'AWS'],
      bio: 'With 8+ years of experience, Sarah specializes in building scalable web applications and mentoring development teams.',
      image: '#',
      email: 'sarah@digitalcontractor.com',
      linkedIn: '#',
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Cloud & DevOps Specialist',
      expertise: ['Kubernetes', 'Docker', 'AWS', 'CI/CD'],
      bio: 'Expert in cloud infrastructure and container orchestration, with a track record of optimizing deployment pipelines.',
      image: '#',
      email: 'michael@digitalcontractor.com',
      linkedIn: '#',
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      title: 'Product Designer',
      expertise: ['UX/UI Design', 'Figma', 'Design Systems', 'User Research'],
      bio: 'Passionate about creating intuitive interfaces and user-centered design solutions for complex applications.',
      image: '#',
      email: 'emma@digitalcontractor.com',
      linkedIn: '#',
    },
    {
      id: '4',
      name: 'David Patel',
      title: 'Data Engineer',
      expertise: ['Python', 'SQL', 'Apache Spark', 'Data Warehousing'],
      bio: 'Specializes in building data pipelines and analytics solutions that drive business intelligence.',
      image: '#',
      email: 'david@digitalcontractor.com',
      linkedIn: '#',
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      title: 'Backend Architect',
      expertise: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
      bio: 'Experienced in designing robust backend systems and leading technical architecture decisions.',
      image: '#',
      email: 'lisa@digitalcontractor.com',
      linkedIn: '#',
    },
    {
      id: '6',
      name: 'James Wilson',
      title: 'Mobile Developer',
      expertise: ['React Native', 'Swift', 'Flutter', 'iOS'],
      bio: 'Creates seamless mobile experiences across platforms with focus on performance and user engagement.',
      image: '#',
      email: 'james@digitalcontractor.com',
      linkedIn: '#',
    },
  ];
}
