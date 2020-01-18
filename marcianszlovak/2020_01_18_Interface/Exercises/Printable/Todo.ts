"use strict";

import Printable from "./Printable";

export default class Todo implements Printable {
  task: string;
  priority: string;
  isDone: boolean;

  constructor(task: string, priority: string, isDone: boolean) {
    this.task = task;
    this.priority = priority;
    this.isDone = isDone;
  }
}
