import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import "./page.css";

const popularCourses = courses.slice(0, 3);

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">

            <p className="hero-label">
              YOUR LEARNING JOURNEY STARTS HERE
            </p>

            <h1 className="hero-title">
              Learn New Skills.
              <br />
              Build Your Future.
            </h1>

            <p className="hero-description">
              StudyHub helps you learn programming and technology
              through structured courses, practical lessons and
              progress tracking.
            </p>

            <div className="hero-buttons">
              <Link href="/courses" className="primary-btn">
                Explore Courses
              </Link>

              <Link href="/dashboard" className="secondary-btn">
                View Dashboard
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-container">

          <div>
            <div className="stat-number">20+</div>
            <div className="stat-label">Courses</div>
          </div>

          <div>
            <div className="stat-number">100+</div>
            <div className="stat-label">Lessons</div>
          </div>

          <div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Learning Topics</div>
          </div>

        </div>
      </section>

      {/* Popular Courses */}
      <section className="courses-section">

        <div className="section-header">
          <div>
            <p className="section-label">
              START LEARNING
            </p>

            <h2 className="section-title">
              Popular Courses
            </h2>

            <p className="section-description">
              Explore our most popular learning resources.
            </p>
          </div>

          <Link href="/courses" className="view-all">
            View All →
          </Link>
        </div>

        <div className="course-grid">

          {popularCourses.map((course) => (
            <article
              key={course.id}
              className="course-card"
            >

              <div className="course-image">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="course-image-img"
                />
              </div>

              <span className="course-level">
                {course.level}
              </span>

              <h3 className="course-title">
                {course.title}
              </h3>

              <p className="course-description">
                {course.description}
              </p>

              <Link
                href={`/courses/${course.id}`}
                className="course-link"
              >
                View Course →
              </Link>

            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta">

          <h2 className="cta-title">
            Ready to start learning?
          </h2>

          <p className="cta-description">
            Choose a course, start learning and track your
            progress with StudyHub.
          </p>

          <Link href="/courses" className="cta-btn">
            Browse Courses
          </Link>

        </div>
      </section>

    </main>
  );
}