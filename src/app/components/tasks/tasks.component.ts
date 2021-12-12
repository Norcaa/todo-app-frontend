import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskFace } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: TaskFace[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) =>  this.tasks = tasks);
    console.log(this.tasks)
  }

  deleteTask(task: TaskFace){
    this.taskService.deleteTask(task)
    .subscribe(() => (this.tasks = this.tasks.filter(t => t.taskId !== task.taskId)));
  }

  toggleReminder (task: TaskFace){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: TaskFace) {
    this.taskService.addTask(task).subscribe((task) =>  this.tasks.push(task));
  }

}