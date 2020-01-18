"use strict";

import Printable from "./Printable";

export default class Todo implements Printable {
  task: string;
  priority: string;
  isDone: boolean;

  constructor(task: string, priority: string, done: boolean) {
    this.task = task;
    this.priority = priority;
    this.isDone = done;
  }

  printAllFields(): string {
    return `Task: ${this.task}  Priority: ${this.priority}  Done: ${this.isDone}`;
  }
}
