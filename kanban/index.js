import kanban from "./kanban.js";
// console.log(kanban.getAllTasks());

// console.log(kanban.getTasks(1));
// console.log(kanban.insertTask(1, "Edit kanban Project"));

// kanban.deleteTask(232);
console.log(kanban.getTasks());
kanban.updateTask(1436, {
    columnId: 0,
    content: "hello wolrd repvir"
});
console.log(kanban.getAllTasks());