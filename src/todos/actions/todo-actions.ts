"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

const sleep = (seconds: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  await sleep(3);

  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo con id ${id} no encontrado.`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");

  return updatedTodo;
};

export const addNewTodo = async (
  description: string
): Promise<Todo | { message: string }> => {
  try {
    const body = { description };

    const newTodo = await prisma.todo.create({ data: body });

    revalidatePath("/dashboard/server-todos");

    return newTodo;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: `No se ha podido crear el TODO con la descripcion: ${description}`,
    };
  }
};

export const deleteCompletedTodos = async (): Promise<
  boolean | { message: string }
> => {
  try {
    await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    });

    revalidatePath("/dashboard/server-todos");

    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: `No se han podido borrar los TODOs completados.`,
    };
  }
};
