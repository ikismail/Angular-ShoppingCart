import { tasks } from "./../../../shared/moke_data/tasks";
import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import * as _ from "lodash";
@Component({
  selector: "app-task-board",
  templateUrl: "./task-board.component.html",
  styleUrls: ["./task-board.component.scss"],
})
export class TaskBoardComponent implements OnInit {
  kanbanContainers = [
    {
      title: "Todo",
      id: "todoList",
      connectedTo: ["inProgressList"],
      item: _.sortBy(
        tasks.filter((task) => task.boardId === "IK_TODO"),
        ["columnIndex"]
      ),
    },
    {
      title: "In Progress",
      id: "inProgressList",
      connectedTo: ["todoList", "completedList"],
      item: _.sortBy(
        tasks.filter((task) => task.boardId === "IK_PROGRESS"),
        ["columnIndex"]
      ),
    },
    {
      title: "Completed",
      id: "completedList",
      connectedTo: ["inProgressList"],
      item: _.sortBy(
        tasks.filter((task) => task.boardId === "IK_COMPLETED"),
        ["columnIndex"]
      ),
    },
  ];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container.data);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  onSelect(event) {
    console.log(event);
  }
}
