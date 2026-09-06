import DashboardProgress from "@/components/DashboardProgress";
import "./dashboard.css";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">

      {/* Dashboard Header */}

      <section className="dashboard-header">
        <div className="dashboard-header-container">

          <p className="dashboard-label">
            MY LEARNING
          </p>

          <h1 className="dashboard-title">
            Learning Dashboard
          </h1>

          <p className="dashboard-description">
            Track your courses, lessons and learning progress
            in one place.
          </p>

        </div>
      </section>

      {/* Dashboard Content */}

      <section className="dashboard-section">
        <div className="dashboard-container">

          <DashboardProgress />

        </div>
      </section>

    </main>
  );
}