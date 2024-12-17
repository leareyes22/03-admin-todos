import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { object, string, boolean } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take tiene que ser un num." },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip tiene que ser un num." },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json(todos);
}

const postSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const body = await postSchema.validate(await request.json());

    const todo = await prisma.todo.create({ data: body });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE() {
  try {
    await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    });

    return NextResponse.json({
      message: "Todos los TODOs completados han sido borrados.",
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
