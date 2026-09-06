import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import "./lesson-details.css";

interface LessonDetailsProps {
  params: Promise<{
    id: string;
    lessonId: string;
  }>;
}

const lessons = [
  {
    id: "1",
    title: "Introduction to the Course",
    duration: "12 min",
    description:
      "Get introduced to the course and understand what you will learn throughout the lessons.",
    content: [
      "Understand the purpose of this course.",
      "Learn what topics will be covered.",
      "Understand how to approach the lessons.",
    ],
  },
  {
    id: "2",
    title: "Understanding the Fundamentals",
    duration: "18 min",
    description:
      "Learn the fundamental concepts that form the foundation of this course.",
    content: [
      "Understand the core concepts.",
      "Learn important terminology.",
      "Explore practical examples.",
    ],
  },
  {
    id: "3",
    title: "Working with Components",
    duration: "22 min",
    description:
      "Learn how to work with reusable components and organize your application effectively.",
    content: [
      "Understand reusable components.",
      "Learn component structure.",
      "Build simple reusable UI elements.",
    ],
  },
  {
    id: "4",
    title: "Building Your First Project",
    duration: "25 min",
    description:
      "Apply the concepts you have learned by building a practical project.",
    content: [
      "Plan your project.",
      "Build the main features.",
      "Test and improve your project.",
    ],
  },
  {
    id: "5",
    title: "Best Practices",
    duration: "16 min",
    description:
      "Learn useful development practices that can help you write cleaner and better code.",
    content: [
      "Write clean and maintainable code.",
      "Follow consistent development practices.",
      "Improve your project structure.",
    ],
  },
];

export default async function LessonDetails({
  params,
}: LessonDetailsProps) {
  const { id, lessonId } = await params;

  const course = courses.find((course) => course.id === id);

  const lesson = lessons.find(
    (lesson) => lesson.id === lessonId
  );

  if (!course || !lesson) {
    return (
      <main className="lesson-details-page">
        <div className="lesson-not-found">
          <h1>Lesson Not Found</h1>

          <p>
            The lesson you are looking for does not exist.
          </p>

          <Link
            href={`/courses/${id}`}
            className="back-button"
          >
            ← Back to Course
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="lesson-details-page">

      {/* Lesson Header */}

      <section className="lesson-header">
        <div className="lesson-header-container">

          <div className="lesson-breadcrumb">
            <Link href="/courses">
              Courses
            </Link>

            <span> / </span>

            <Link href={`/courses/${course.id}`}>
              {course.title}
            </Link>

            <span> / Lesson {lesson.id}</span>
          </div>

          <span className="lesson-label">
            LESSON {lesson.id}
          </span>

          <h1 className="lesson-title">
            {lesson.title}
          </h1>

          <p className="lesson-description">
            {lesson.description}
          </p>

          <div className="lesson-meta">

  <span className="lesson-course">
    <Image
      src={course.image}
      alt={course.title}
      width={28}
      height={28}
      className="lesson-course-image"
    />

    {course.title}
  </span>

  <span>⏱ {lesson.duration}</span>

  <span>👤 {course.instructor}</span>

</div>

        </div>
      </section>

      {/* Lesson Content */}

      <section className="lesson-content-section">
        <div className="lesson-content-container">

          <article className="lesson-content">

            {/* Video / Course Image */}

            <div className="video-placeholder">

              <Image
                src={course.image}
                alt={`${course.title} lesson`}
                fill
                sizes="(max-width: 800px) 100vw, 700px"
                className="lesson-video-image"
              />

              <div className="video-overlay">

                <div className="play-icon">
                  ▶
                </div>

                <p>
                  Lesson Video
                </p>

                <span>
                  Video content will be available here
                </span>

              </div>

            </div>

            <div className="lesson-text">

              <h2>
                About This Lesson
              </h2>

              <p>
                In this lesson, you will learn important concepts
                related to {course.title}. Follow the lesson
                carefully and practice the concepts as you learn.
              </p>

              <h2>
                What You&apos;ll Learn
              </h2>

              <ul>
                {lesson.content.map((item) => (
                  <li key={item}>
                    ✓ {item}
                  </li>
                ))}
              </ul>

              <div className="lesson-complete">

                <h3>
                  Ready to continue?
                </h3>

                <p>
                  Complete this lesson and move on to the next one.
                </p>

                <button className="complete-button">
                  Mark Lesson Complete
                </button>

              </div>

            </div>

          </article>

          {/* Sidebar */}

          <aside className="lesson-sidebar">

            <div className="sidebar-card">

              <p className="sidebar-label">
                CURRENT COURSE
              </p>

              <h3>
                {course.title}
              </h3>

              <div className="sidebar-info">

                <span>
                  📖 {course.lessons} Lessons
                </span>

                <span>
                  ⏱ {course.duration}
                </span>

                <span>
                  ★ {course.rating}
                </span>

              </div>

              <Link
                href={`/courses/${course.id}`}
                className="course-button"
              >
                View Course
              </Link>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}