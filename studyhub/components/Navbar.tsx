import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link href="/" className="logo">
          StudyHub
        </Link>

        <div className="nav-links">
          <Link href="/">
            Home
          </Link>

          <Link href="/courses">
            Courses
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/ssr">
            SSR
          </Link>

          <Link href="/ssg">
            SSG
          </Link>

          <Link href="/isr">
            ISR
          </Link>
        </div>

      </div>
    </nav>
  );
}