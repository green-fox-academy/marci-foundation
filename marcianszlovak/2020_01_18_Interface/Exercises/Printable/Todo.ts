"use strict";

import Printable from "./Printable";

export default class Todo implements Printable {
  task: string;
  priority: string;
  isDone: boolean;

  constructor(
    task: string = "Task: Buy milk",
    priority: string = "Priority: high",
    isDone: boolean = true
  ) {
    this.task = task;
    this.priority = priority;
    this.isDone = isDone;
  }

  printAllFields(): string {
    return this.task + this.priority + this.isDone;
  }
}
