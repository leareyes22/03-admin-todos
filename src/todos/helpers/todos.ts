import { Todo } from "@prisma/client";
import { GenericResponse } from "../index";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete };

  const dbTodo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return dbTodo;
};

export const newTodo = async (
  description: string,
  complete: boolean
): Promise<Todo> => {
  const body = { description, complete };

  const createdTodo = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return createdTodo;
};

export const deleteCompletedTodos = async (): Promise<GenericResponse> => {
  const deletedTodos = await fetch("/api/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return deletedTodos;
};
