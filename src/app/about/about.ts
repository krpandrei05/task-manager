import { Component } from '@angular/core';

interface Milestone {
  hash: string;
  tag: string;
  message: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly milestones: Milestone[] = [
    { hash: '006dd99', tag: 'Course 1', message: 'REST API for tasks, in memory' },
    { hash: 'c2cb848', tag: 'Homework 1', message: 'Validation for TaskDTO fields' },
    { hash: '3a5d323', tag: 'Homework 2', message: 'SQL queries and stored procedure' },
    { hash: '9241036', tag: 'Homework 3', message: 'Task entity with full CRUD stack' },
    { hash: '3fd3cfb', tag: 'Homework 4', message: 'Angular frontend talks to the API' },
    { hash: '93f4753', tag: 'Homework 5', message: 'Search by subject, status, user, due date' },
    {
      hash: 'f3133c4',
      tag: 'Homework 6',
      message: 'Registration with hashed and salted passwords',
    },
    {
      hash: '576f683',
      tag: 'Homework 7',
      message: 'JWT stored, attached and validated end to end',
    },
    { hash: 'cc79a43', tag: 'Homework 8', message: 'Roles and permissions, admin page' },
    { hash: '8d5ded7', tag: 'Homework 9', message: 'CSV and Excel import and export' },
    { hash: 'd42be49', tag: 'Homework 10', message: 'Pagination, sorting, missing authorization' },
    { hash: 'f14ec9e', tag: 'Homework 11', message: 'Unit tests, 97% instruction coverage' },
  ];
}
