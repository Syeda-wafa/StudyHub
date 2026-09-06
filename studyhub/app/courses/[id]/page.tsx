import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import "./course-details.css";

interface CourseDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const lessons = [
  {
    id: 1,
    title: "Introduction to the Course",
    duration: "12 min",
  },
  {
    id: 2,
    title: "Understanding the Fundamentals",
    duration: "18 min",
  },
  {
    id: 3,
    title: "Working with Components",
    duration: "22 min",
  },
  {
    id: 4,
    title: "Building Your First Project",
    duration: "25 min",
  },
  {
    id: 5,
    title: "Best Practices",
    duration: "16 min",
  },
];

export default async function CourseDetails({
  params,
}: CourseDetailsProps) {
  const { id } = await params;

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return (
      <main className="course-details-page">
        <div className="not-found">
          <h1>Course Not Found</h1>

          <p>
            The course you are looking for does not exist.
          </p>

          <Link href="/courses" className="back-button">
            ← Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="course-details-page">

      {/* Hero */}
      <section className="course-hero">
        <div className="course-hero-container">

          <div className="course-hero-content">

            <span className="course-category">
              {course.category}
            </span>

            <h1>
              {course.title}
            </h1>

            <p className="course-hero-description">
              {course.description}
            </p>

            <div className="course-meta">
              <span>👤 {course.instructor}</span>
              <span>📖 {course.lessons} Lessons</span>
              <span>⏱ {course.duration}</span>
              <span>★ {course.rating}</span>
            </div>

          </div>

          {/* Course Image */}
          <div className="course-preview">

            <div className="preview-image">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 900px) 100vw, 350px"
                className="course-preview-image"
              />
            </div>

            <h2>
              {course.title}
            </h2>

            <p>
              {course.level} Level
            </p>

            <button className="start-button">
              Start Learning
            </button>

          </div>

        </div>
      </section>

      {/* Course Content */}
      <section className="course-content-section">
        <div className="course-content-container">

          {/* Main Content */}
          <div className="course-main">

            <div className="about-course">
              <h2>
                About This Course
              </h2>

              <p>
                This course is designed to help you build a strong
                understanding of {course.title}. You will learn
                practical concepts through structured lessons and
                hands-on examples.
              </p>

              <p>
                By the end of this course, you will have a better
                understanding of the core concepts and be able to
                apply them in real-world projects.
              </p>
            </div>

            {/* Lessons */}
            <div className="lessons-section">

              <div className="lessons-header">
                <div>
                  <h2>
                    Course Content
                  </h2>

                  <p>
                    {lessons.length} lessons • {course.duration}
                  </p>
                </div>
              </div>

              <div className="lessons-list">

                {lessons.map((lesson, index) => (
                  <Link
                    key={lesson.id}
                    href={`/courses/${course.id}/lessons/${lesson.id}`}
                    className="lesson-item"
                  >
                    <div className="lesson-number">
                      {index + 1}
                    </div>

                    <div className="lesson-info">
                      <h3>
                        {lesson.title}
                      </h3>

                      <span>
                        ⏱ {lesson.duration}
                      </span>
                    </div>

                    <div className="lesson-status">
                      →
                    </div>
                  </Link>
                ))}

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <aside className="course-sidebar">

            <div className="sidebar-card">

              <h3>
                What You&apos;ll Learn
              </h3>

              <ul>
                <li>✓ Understand core concepts</li>
                <li>✓ Build practical projects</li>
                <li>✓ Follow industry best practices</li>
                <li>✓ Improve your development skills</li>
                <li>✓ Apply knowledge to real projects</li>
              </ul>

              <Link
                href="/courses"
                className="sidebar-button"
              >
                Browse More Courses
              </Link>

            </div>

          </aside>

        </div>
      </section>

      {/* Back */}
      <div className="back-container">
        <Link href="/courses" className="back-link">
          ← Back to All Courses
        </Link>
      </div>

    </main>
  );
}