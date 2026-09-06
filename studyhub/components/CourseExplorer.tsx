"use client";

import { useState } from "react";
import { Course } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import "./CourseExplorer.css";

interface CourseExplorerProps {
  courses: Course[];
}

export default function CourseExplorer({
  courses,
}: CourseExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(courses.map((course) => course.category))
    ),
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      course.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="course-explorer">

      <div className="explorer-filters">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="explorer-result">
        <p>
          {filteredCourses.length} course
          {filteredCourses.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      ) : (
        <div className="no-courses">
          <h3>No courses found</h3>

          <p>
            Try a different search or category.
          </p>
        </div>
      )}

    </div>
  );
}