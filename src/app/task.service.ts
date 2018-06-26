import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task, StatusType } from './constants';

export class TaskService {
  taskList: Task[];
  observer;

  constructor() {
    const tmpList = [{
      id: 0,
      status: StatusType.NotStarted,
      title: 'Walk the Dog',
      description: 'Keep the dog happy...',
    },
    {
      id: 1,
      status: StatusType.InProgress,
      title: 'Take a Shower',
      description: 'Got to smell good...',
    },
    {
      id: 2,
      status: StatusType.Completed,
      title: 'Order Dinner',
      description: 'No need to be hungry...',
    },
    {
      id: 3,
      status: StatusType.InProgress,
      title: 'Clean the Office',
      description: 'Keep it nice and tidy...',
    },
    {
      id: 4,
      status: StatusType.Completed,
      title: 'Pay the Bills',
      description: 'My favorite chour...',
    },
    {
      id: 5,
      status: StatusType.Completed,
      title: 'Buy new Books',
      description: 'Need some stuff to read...',
    }
    ];
    this.taskList = tmpList;
  }

  filterTasks(statusType: StatusType, taskList: Task[] = []): Task[] {
    return taskList.filter((task) => {
      return task.status === statusType;
    });
  }

  getTasks(): Observable<Task[]> {
    return new Observable((observer) => {
      this.observer = observer;
      return this.observer.next(this.taskList);
    });
  }

  updateTask(id: number, status: StatusType) {
    this.taskList.find(item => item.id === id).status = status;
  }

  addTask(title: string, description: string) {
    this.taskList.push({
      id: this.taskList.length,
      status: StatusType.NotStarted,
      title: title,
      description: description,
    });
    this.observer.next(this.taskList);
  }
}
