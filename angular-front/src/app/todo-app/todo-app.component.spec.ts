import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TodoAppComponent } from './todo-app.component';
import { Task, TodoService } from './todo.service';

class FakeTodoService implements TodoService {
  lastCreatedTask: Task | null = null;

  createTask(title: string, description: string): Task {
    const task: Task = {
      title,
      description,
      completed: false,
      state: 'pending',
    };
    this.lastCreatedTask = task;
    return task;
  }
}

describe('TodoAppComponent', () => {
  let component: TodoAppComponent;
  let fixture: ComponentFixture<TodoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAppComponent],
      providers: [
        { provide: TodoService, useClass: FakeTodoService },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task and update pending tasks count', () => {
    component.newTaskTitle = 'Buy groceries';
    component.addTask();

    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].title).toBe('Buy groceries');
    expect(component.getPendingTasksCount()).toBe(1);
    expect(component.showError).toBeFalse();
  });

  it('should show error when trying to add a task without title', () => {
    component.newTaskTitle = '   ';
    component.addTask();

    expect(component.tasks.length).toBe(0);
    expect(component.showError).toBeTrue();
  });
});
