import http from "http";
import {TodolistService} from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");

    switch (request.method) {
        case "GET":
            service.getTodolist(request, response);
            break;
        case "POST":
            service.createTodo(request, response);
            break;
        case "PUT":
            service.updateTodo(request, response);
            break;
        case "DELETE":
            service.deleteTodo(request, response);
            break;
    }
});

server.listen(3000);
