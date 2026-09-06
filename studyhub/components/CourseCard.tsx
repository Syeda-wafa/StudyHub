import Image from "next/image";
import Link from "next/link";
import { Course } from "@/data/courses";
import "./CourseCard.css";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">

      <div className="course-image">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 950px) 50vw, 33vw"
          className="course-image-img"
        />
      </div>

      <div className="course-content">

        <div className="course-top">
          <span className="course-category">
            {course.category}
          </span>

          <span className="course-rating">
            ★ {course.rating}
          </span>
        </div>

        <h2 className="course-title">
          {course.title}
        </h2>

        <p className="course-description">
          {course.description}
        </p>

        <div className="course-info">
          <span>👤 {course.instructor}</span>
          <span>📖 {course.lessons} Lessons</span>
          <span>⏱ {course.duration}</span>
        </div>

        <div className="course-bottom">

          <span className="course-level">
            {course.level}
          </span>

          <Link
            href={`/courses/${course.id}`}
            className="course-button"
          >
            View Course
          </Link>

        </div>

      </div>
    </article>
  );
}