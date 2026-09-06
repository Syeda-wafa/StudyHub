import "./ssg.css";

export default function SSGPage() {
  return (
    <main className="render-page">

      <section className="render-header">
        <div className="render-container">

          <span className="render-label">
            NEXT.JS RENDERING
          </span>

          <h1>
            Static Site Generation
          </h1>

          <p>
            This page is generated ahead of time and served as
            static content.
          </p>

        </div>
      </section>

      <section className="render-content">
        <div className="render-card">

          <div className="render-badge">
            SSG
          </div>

          <h2>
            Static Site Generation
          </h2>

          <p>
            The page is generated during the build process.
            It is suitable for content that does not change
            frequently.
          </p>

          <div className="render-info">
            <span>
              Rendering
            </span>

            <strong>
              Build Time
            </strong>
          </div>

        </div>
      </section>

    </main>
  );
}