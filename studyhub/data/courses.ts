export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  instructor: string;
  level: string;
  lessons: number;
  duration: string;
  rating: number;
  image: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Next.js Fundamentals",
    description:
      "Learn Next.js App Router, Server Components, dynamic routing, API routes and deployment.",
    category: "Web Development",
    instructor: "John Smith",
    level: "Beginner",
    lessons: 12,
    duration: "4 Weeks",
    rating: 4.8,
    image: "/images/nextjs.png",
  },

  {
    id: "2",
    title: "React Advanced",
    description:
      "Master React hooks, reusable components, state management and modern React patterns.",
    category: "Frontend",
    instructor: "Sarah Khan",
    level: "Intermediate",
    lessons: 15,
    duration: "5 Weeks",
    rating: 4.7,
    image: "/images/react.png",
  },

  {
    id: "3",
    title: "Node.js Backend",
    description:
      "Build powerful backend applications and REST APIs using Node.js and Express.",
    category: "Backend",
    instructor: "Ali Ahmed",
    level: "Intermediate",
    lessons: 14,
    duration: "5 Weeks",
    rating: 4.9,
    image: "/images/nodejs.png",
  },

  {
    id: "4",
    title: "TypeScript Essentials",
    description:
      "Learn TypeScript fundamentals, interfaces, types, generics and practical development.",
    category: "Programming",
    instructor: "Emily Wilson",
    level: "Beginner",
    lessons: 10,
    duration: "3 Weeks",
    rating: 4.6,
    image: "/images/typescript.png",
  },

  {
    id: "5",
    title: "MongoDB Basics",
    description:
      "Understand MongoDB databases, collections, documents, queries and Mongoose.",
    category: "Database",
    instructor: "David Lee",
    level: "Beginner",
    lessons: 11,
    duration: "3 Weeks",
    rating: 4.7,
    image: "/images/mongodb.png",
  },

  {
    id: "6",
    title: "Full Stack MERN",
    description:
      "Build complete full-stack applications using MongoDB, Express, React and Node.js.",
    category: "Full Stack",
    instructor: "Michael Brown",
    level: "Advanced",
    lessons: 20,
    duration: "8 Weeks",
    rating: 4.9,
    image: "/images/mern.png",
  },
];