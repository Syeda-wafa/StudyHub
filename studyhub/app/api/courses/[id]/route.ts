import { NextResponse } from "next/server";
import { courses } from "@/data/courses";

interface CourseApiProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: CourseApiProps
) {
  const { id } = await params;

  const course = courses.find(
    (course) => course.id === id
  );

  if (!course) {
    return NextResponse.json(
      {
        success: false,
        message: "Course not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    success: true,
    course,
  });
}