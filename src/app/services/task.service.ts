import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskFace } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // HTTP client

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:8080/tasks"

  constructor(private http: HttpClient) { }

  deleteTask(task: TaskFace): Observable<TaskFace> {
    const url = `${this.apiUrl}/${task.taskId}`;
    return this.http.delete<TaskFace>(url);
  }

  updateTaskReminder(task: TaskFace): Observable<TaskFace> {
    const url = `${this.apiUrl}/${task.taskId}`;
    console.log(`${this.apiUrl}/${task.taskId}`)
    return this.http.put<TaskFace>(url, task);
  }

  addTask(task: TaskFace): Observable<TaskFace> {
    return this.http.post<TaskFace>(this.apiUrl, task);
  }

  getTasks(): Observable<TaskFace[]> {
    return this.http.get<TaskFace[]>(this.apiUrl);
  }
}
