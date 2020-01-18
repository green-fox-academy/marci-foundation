"use strict";

export default class Todo {
  task: string;
  priority: string;
  isDone: boolean;

  constructor(task: string, priority: string, isDone: boolean) {
    this.task = task;
    this.priority = priority;
    this.isDone = isDone;
  }
}
