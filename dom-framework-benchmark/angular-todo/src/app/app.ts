import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskName = '';
  priority = 'Low';
  tasks: any[] = [];

  renderTime = 0;
  updateTime = 0;
  deleteTime = 0;

  addTask() {
    if (!this.taskName.trim()) {
      alert('Please enter a task name.');
      return;
    }

    this.tasks = [
      ...this.tasks,
      {
        id: Date.now(),
        name: this.taskName,
        priority: this.priority,
      },
    ];

    this.taskName = '';
    this.priority = 'Low';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== id
    );
  }

  editTask(id: number) {
    const newName = prompt(
      'Enter new task name:'
    );

    if (!newName) return;

    this.tasks = this.tasks.map(
      (task) => {
        if (task.id === id) {
          return {
            ...task,
            name: newName,
          };
        }

        return task;
      }
    );
  }

  async generateTasks(count: number) {
    const generated: any[] = [];

    for (let i = 1; i <= count; i++) {
      generated.push({
        id: i,
        name: `Task ${i}`,
        priority: 'Medium',
      });
    }

    const start = performance.now();

    this.tasks = generated;

    await new Promise((r) =>
      setTimeout(r, 0)
    );

    this.renderTime =
      performance.now() - start;
  }

  update50Tasks() {
    const start = performance.now();

    this.tasks = this.tasks.map(
      (task, index) => {
        if (index < 50) {
          return {
            ...task,
            priority: 'High',
          };
        }

        return task;
      }
    );

    this.updateTime =
      performance.now() - start;
  }

  delete50Tasks() {
    const start = performance.now();

    this.tasks = this.tasks.slice(50);

    this.deleteTime =
      performance.now() - start;
  }

  getMemoryUsage() {
    const perf: any = performance;

    if (perf.memory) {
      return (
        perf.memory.usedJSHeapSize /
        1024 /
        1024
      ).toFixed(2);
    }

    return 'Not Supported';
  }
}