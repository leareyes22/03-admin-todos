import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description:
          "Ipsum occaecat cillum esse et velit eiusmod officia sit nulla ullamco ad amet consequat.",
      },
      {
        description:
          "Aliqua non elit do veniam laboris deserunt velit eu aute excepteur voluptate in aliqua mollit.",
      },
      {
        description:
          "Tempor qui tempor duis eiusmod sint in amet sint sunt esse cupidatat non ipsum laborum.",
      },
      {
        description: "Deserunt anim commodo mollit ut esse do.",
        complete: true,
      },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
