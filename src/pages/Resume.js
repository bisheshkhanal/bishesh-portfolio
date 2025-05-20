import React from 'react';

export default function Resume() {
  return (
    <section style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 0", textAlign: "center" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>My Resume</h2>
      <iframe
        src={`${process.env.PUBLIC_URL}/Bishesh_Khanal_Resume.pdf`}
        width="100%"
        height="1000px"
        title="Bishesh Khanal Resume"
        style={{
          border: "2px solid var(--accent)",
          borderRadius: "12px",
          background: "#232946",
          minHeight: "60vh"
        }}
      />
      <div style={{ marginTop: 24 }}>
        <a
          href={`${process.env.PUBLIC_URL}/Bishesh_Khanal_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="action-link"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}
