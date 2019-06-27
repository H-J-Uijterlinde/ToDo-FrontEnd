import {ToDo} from './ToDo';

export interface ToDoResponse {
  _embedded: {
    ToDos: ToDo[]
  };
  _links: {
    self: {
      href: string
    }
  };
}
