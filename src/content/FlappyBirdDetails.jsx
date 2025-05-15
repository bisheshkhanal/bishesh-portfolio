const FlappyBirdDetails = () => (
  <div>
    <h3>Project Overview</h3>
    <p>
      This Flappy Bird remake is a pure HTML/CSS/JavaScript browser game built from scratch without any frameworks.
      It features smooth gravity simulation, randomized obstacles, collision detection, and responsive jump controls.
    </p>

    <h4>Core Mechanics</h4>
    <ul>
      <li><strong>Gravity & Jump:</strong> Object falls naturally and jumps on click using `setInterval`-based physics.</li>
      <li><strong>Obstacle Logic:</strong> Pipes and gaps animate from right to left, with gap position randomized every cycle.</li>
      <li><strong>Collision Detection:</strong> JS checks if the object hits a pipe or falls off-screen and triggers a reset.</li>
      <li><strong>Sound Feedback:</strong> Howler.js provides distinct sound cues for success and game over.</li>
    </ul>

    <p>
      Despite being a small project, it demonstrates a great blend of animation, input handling, and simple physics — making it a fun and clean coding experiment.
    </p>
  </div>
);

export default FlappyBirdDetails;
