
"use client";

import { useState } from "react";
import Link from "next/link";
import "./DashboardProgress.css";

interface CourseProgress {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

const initialCourses: CourseProgress[] = [
  {
    id: "1",
    title: "Next.js Fundamentals",
    instructor: "John Smith",
    progress: 60,
    totalLessons: 12,
    completedLessons: 7,
  },
  {
    id: "2",
    title: "React Advanced",
    instructor: "Sarah Khan",
    progress: 35,
    totalLessons: 15,
    completedLessons: 5,
  },
  {
    id: "3",
    title: "Node.js Backend",
    instructor: "Ali Ahmed",
    progress: 20,
    totalLessons: 14,
    completedLessons: 3,
  },
];

export default function DashboardProgress() {
  const [courses, setCourses] =
    useState<CourseProgress[]>(initialCourses);

  const [activeCourse, setActiveCourse] =
    useState("1");

  const selectedCourse = courses.find(
    (course) => course.id === activeCourse
  );

  const totalCourses = courses.length;

  const completedLessons = courses.reduce(
    (total, course) => total + course.completedLessons,
    0
  );

  const totalLessons = courses.reduce(
    (total, course) => total + course.totalLessons,
    0
  );

  const overallProgress = Math.round(
    courses.reduce((total, course) => total + course.progress, 0) /
      totalCourses
  );

  const completeNextLesson = () => {
    setCourses((currentCourses) =>
      currentCourses.map((course) => {
        if (course.id !== activeCourse) {
          return course;
        }

        const newCompletedLessons = Math.min(
          course.completedLessons + 1,
          course.totalLessons
        );

        const newProgress = Math.round(
          (newCompletedLessons / course.totalLessons) * 100
        );

        return {
          ...course,
          completedLessons: newCompletedLessons,
          progress: newProgress,
        };
      })
    );
  };

  return (
    <div className="dashboard-progress">

      {/* Stats */}

      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon">
            📚
          </div>

          <div>
            <span className="stat-value">
              {totalCourses}
            </span>

            <span className="stat-name">
              Enrolled Courses
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            ✓
          </div>

          <div>
            <span className="stat-value">
              {completedLessons}
            </span>

            <span className="stat-name">
              Completed Lessons
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            🎯
          </div>

          <div>
            <span className="stat-value">
              {overallProgress}%
            </span>

            <span className="stat-name">
              Overall Progress
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            ⏱
          </div>

          <div>
            <span className="stat-value">
              18h
            </span>

            <span className="stat-name">
              Learning Time
            </span>
          </div>
        </div>

      </div>

      {/* Overall Progress */}

      <section className="overall-card">

        <div className="overall-header">

          <div>
            <p className="card-label">
              YOUR PROGRESS
            </p>

            <h2>
              Keep Learning
            </h2>
          </div>

          <span className="overall-percentage">
            {overallProgress}%
          </span>

        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${overallProgress}%` }}
          />
        </div>

        <p className="progress-message">
          You have completed {completedLessons} out of{" "}
          {totalLessons} lessons.
        </p>

      </section>

      {/* Courses */}

      <section className="my-courses">

        <div className="section-heading">
          <div>
            <p className="card-label">
              CONTINUE LEARNING
            </p>

            <h2>
              My Courses
            </h2>
          </div>
        </div>

        <div className="course-progress-layout">

          {/* Course List */}

          <div className="progress-course-list">

            {courses.map((course) => (
              <button
                key={course.id}
                className={`progress-course ${
                  activeCourse === course.id
                    ? "active"
                    : ""
                }`}
                onClick={() => setActiveCourse(course.id)}
              >

                <div className="course-icon">
                  📚
                </div>

                <div className="progress-course-info">

                  <h3>
                    {course.title}
                  </h3>

                  <p>
                    {course.completedLessons} of{" "}
                    {course.totalLessons} lessons
                  </p>

                  <div className="small-progress-track">
                    <div
                      className="small-progress-fill"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />
                  </div>

                </div>

                <span className="course-percent">
                  {course.progress}%
                </span>

              </button>
            ))}

          </div>

          {/* Selected Course */}

          {selectedCourse && (
            <div className="selected-course">

              <p className="card-label">
                CURRENT COURSE
              </p>

              <h2>
                {selectedCourse.title}
              </h2>

              <p className="selected-instructor">
                Instructor: {selectedCourse.instructor}
              </p>

              <div className="large-progress">

                <div className="large-progress-header">
                  <span>
                    Course Progress
                  </span>

                  <strong>
                    {selectedCourse.progress}%
                  </strong>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${selectedCourse.progress}%`,
                    }}
                  />
                </div>

              </div>

              <p className="lesson-count">
                {selectedCourse.completedLessons} of{" "}
                {selectedCourse.totalLessons} lessons completed
              </p>

              <div className="selected-actions">

                <Link
                  href={`/courses/${selectedCourse.id}`}
                  className="view-course-button"
                >
                  View Course
                </Link>

                <button
                  className="complete-lesson-button"
                  onClick={completeNextLesson}
                >
                  Mark Next Lesson Complete
                </button>

              </div>

            </div>
          )}

        </div>

      </section>

    </div>
  );
}