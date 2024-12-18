"use client";

//import { useRouter } from "next/navigation";
import { v6 } from "uuid";
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
// import * as api from "@/todos/helpers/todos";
import { toggleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  //const router = useRouter();

  /*const toggleTodo = async (id: string, complete: boolean) => {
    await api.updateTodo(id, complete);

    router.refresh();
  };*/

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.length
        ? todos.map((todo) => (
            <TodoItem key={v6()} todo={todo} toggleTodo={toggleTodo} />
          ))
        : null}
    </div>
  );
};
