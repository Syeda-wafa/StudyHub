import "./ssr.css";

export const dynamic = "force-dynamic";

export default function SSRPage() {
  const generatedAt = new Date().toLocaleString();

  return (
    <main className="render-page">

      <section className="render-header">
        <div className="render-container">

          <span className="render-label">
            NEXT.JS RENDERING
          </span>

          <h1>
            Server-Side Rendering
          </h1>

          <p>
            This page is rendered on the server for every request.
          </p>

        </div>
      </section>

      <section className="render-content">
        <div className="render-card">

          <div className="render-badge">
            SSR
          </div>

          <h2>
            Server-Side Rendering
          </h2>

          <p>
            The page is generated dynamically on the server
            whenever a user requests it.
          </p>

          <div className="render-info">
            <span>
              Rendered at
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