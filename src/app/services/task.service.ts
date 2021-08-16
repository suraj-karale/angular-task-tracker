import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
