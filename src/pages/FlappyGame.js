export default function FlappyGame() {
  return (
    <section>
      <h2>Flappy Bird Clone</h2>
      <p>Click anywhere to jump and dodge the pipes. Simple, fun, and built with raw HTML/CSS/JS.</p>
      <iframe
        src={`${process.env.PUBLIC_URL}/flappy/flappy.html`}
        width="420"
        height="620"
        title="Flappy Bird Game"
        style={{
          border: "2px solid var(--accent)",
          borderRadius: "12px",
          backgroundColor: "#000",
        }}
      ></iframe>
    </section>
  );
}
