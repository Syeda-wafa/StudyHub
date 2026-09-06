import { courses } from "@/data/courses";
import CourseExplorer from "@/components/CourseExplorer";
import "./courses.css";

export default function CoursesPage() {
  return (
    <main className="courses-page">

      <section className="courses-header">
        <div className="courses-header-container">

          <p className="courses-label">
            EXPLORE & LEARN
          </p>

          <h1 className="courses-title">
            Explore Our Courses
          </h1>

          <p className="courses-description">
            Learn practical skills through structured courses
            designed for beginners and experienced developers.
          </p>

        </div>
      </section>

      <section className="courses-list-section">
        <div className="courses-container">

          <div className="courses-toolbar">
            <div>
              <h2>All Courses</h2>

              <p>
                Find the right course for your learning journey.
              </p>
            </div>
          </div>

          <CourseExplorer courses={courses} />

        </div>
      </section>

    </main>
  );
}