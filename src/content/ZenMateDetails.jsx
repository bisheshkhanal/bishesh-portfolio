const ZenMateDetails = () => (
  <div>
    <h3>ZenMate (WIP)</h3>
    <p>
      ZenMate is a full-stack meditation and mindfulness app designed to help users track sessions, maintain mental
      well-being, and stay motivated through social and AI-powered features. The app reflects solid system design,
      scalable architecture, and thoughtful user-centric workflows.
    </p>

    <h4>Planned Core Features</h4>
    <ul>
      <li><strong>Session Tracking:</strong> Users log meditation duration, mood, and notes, with session types and privacy options.</li>
      <li><strong>Streaks & Milestones:</strong> Daily streak tracking and milestone achievements (weekly/monthly) with EXP rewards.</li>
      <li><strong>Friend System:</strong> Mutual friend requests and visibility control to track and compare progress with peers.</li>
      <li><strong>AI Chatbot:</strong> A server-hosted AI assistant (powered by phi-2 on AWS EC2) that analyzes session history to deliver personalized support.</li>
      <li><strong>Subscriptions:</strong> Premium users unlock AI chatbot access, full streak insights, and long-term session analytics via Stripe, Apple Pay, or Google Pay.</li>
    </ul>

    <h4>Tech Stack</h4>
    <ul>
      <li><strong>Frontend:</strong> React Native with Expo</li>
      <li><strong>Backend:</strong> Django REST Framework with PostgreSQL</li>
      <li><strong>Auth:</strong> Supabase Auth (JWT-based)</li>
      <li><strong>Hosting:</strong> Render (backend) + Supabase (PostgreSQL)</li>
      <li><strong>AI Chatbot:</strong> FastAPI server on AWS EC2 running a local LLM (phi-2)</li>
    </ul>

    <p>
      ZenMate is being built with scalability and utility in mind. It emphasizes meaningful mental health support
      over glamor, and demonstrates full-stack cloud-native architecture with real-world AI integration.
    </p>
  </div>
);

export default ZenMateDetails;
