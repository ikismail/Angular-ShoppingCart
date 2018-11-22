import { Injectable } from '@angular/core';
import { tasks } from '../moke_data/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return new Promise((resolve, reject) => {
      resolve(tasks);
    });
  }

}
