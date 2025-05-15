const IndieBunnyDetails = () => (
  <div>
    <h3>Platform Overview</h3>
    <p>
      Indie Bunny is a full-stack game marketplace designed to uplift indie game developers through a unique
      tipping and mystery reward system. Players can support developers directly, browse listings with region-adjusted
      pricing, and receive surprise games from the Mystery Pool.
    </p>

    <h4>Key Features</h4>
    <ul>
      <li><strong>Tipping System:</strong> Players tip developers and get access to a mystery pool of games.</li>
      <li><strong>Three Roles:</strong> Players, Developers (auto-upgrade after approval), and Admins.</li>
      <li><strong>Dynamic Listings:</strong> Includes regular and temporary game promotions with time windows.</li>
      <li><strong>Secure Auth:</strong> Firebase-managed login tied to role-specific views and Django logic.</li>
      <li><strong>Database:</strong> Supabase-hosted PostgreSQL with full normalization, including wishlists, purchases, and tips.</li>
    </ul>

    <p>
      The project combines cloud deployment (Render, Vercel, Supabase), a Django API, and a React interface 
      to create a developer-first, player-friendly indie ecosystem. It showcases scalable full-stack architecture,
      thoughtful data modeling, and real-world marketplace logic.
    </p>
  </div>
);

export default IndieBunnyDetails;
