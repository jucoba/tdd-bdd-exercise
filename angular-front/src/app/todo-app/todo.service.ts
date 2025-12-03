import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  description?: string;
  completed: boolean;
  state: 'pending' | 'completed';
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  // In a real app this could call the backend.
  // For unit testing we will mock this service.
  createTask(title: string, description: string): Task {
    return {
      title,
      description,
      completed: false,
      state: 'pending',
    };
  }
}
