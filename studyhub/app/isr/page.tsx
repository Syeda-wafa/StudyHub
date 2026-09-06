import "./isr.css";

export const revalidate = 60;

export default function ISRPage() {
  const generatedAt = new Date().toLocaleString();

  return (
    <main className="render-page">

      <section className="render-header">
        <div className="render-container">

          <span className="render-label">
            NEXT.JS RENDERING
          </span>

          <h1>
            Incremental Static Regeneration
          </h1>

          <p>
            This page can be regenerated periodically without
            rebuilding the entire application.
          </p>

        </div>
      </section>

      <section className="render-content">
        <div className="render-card">

          <div className="render-badge">
            ISR
          </div>

          <h2>
            Incremental Static Regeneration
          </h2>

          <p>
            This page is regenerated after the configured
            revalidation period.
          </p>

          <div className="render-info">
            <span>
              Revalidation
            </span>

            <strong>
              Every 60 seconds
            </strong>
          </div>

          <div className="render-info">
            <span>
              Generated at
            </span>

            <strong>
              {generatedAt}
            </strong>
          </div>

        </div>
      </section>

    </main>
  );
}