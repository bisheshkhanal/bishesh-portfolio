export default function FlappyGame() {
  console.log("📦 FlappyGame mounted");

  return (
    <section>
      <h2>Flappy Bird Clone</h2>
      <p>Click anywhere to jump and dodge the pipes. Simple, fun, and built with raw HTML/CSS/JS.</p>
      <iframe
        src={`${window.location.origin}/bishesh-portfolio/flappy/flappy.html`}
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
