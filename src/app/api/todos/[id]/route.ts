import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { boolean, object, string } from "yup";
import { Todo } from "@prisma/client";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });

  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await getTodo(id);

  if (!todo)
    return NextResponse.json(
      { message: `No se ha encontrado el TODO con el id ${id}.` },
      { status: 404 }
    );

  return NextResponse.json(todo);
}

const putSchema = object({
  complete: boolean().optional(),
  description: string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await getTodo(id);

  if (!todo)
    return NextResponse.json(
      { message: `No se ha encontrado el TODO con el id ${id}.` },
      { status: 404 }
    );

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
