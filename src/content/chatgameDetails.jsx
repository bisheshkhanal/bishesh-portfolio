const ChatGameDetails = () => (
  <div>
    <img
      src={`${process.env.PUBLIC_URL}/chat-game/game-sequence.png`}
      alt="Game Sequence UI"
      style={{ width: '80%', borderRadius: '12px', marginBottom: '1.5rem' }}
    />

    <h3>Distributed Systems Design</h3>

    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '2rem' }}>
      <img
        src={`${process.env.PUBLIC_URL}/chat-game/system-diagram.png`}
        alt="System Architecture Diagram"
        style={{ width: '30%', borderRadius: '12px' }}
      />

      <div style={{ flex: 1 }}>
        <p>
          The Chat Game was built from scratch using core distributed systems principles: fault tolerance, replication, and decentralized coordination.
          It features a custom architecture with multiple servers, proxies, and browser clients. Proxies perform health checks and load balancing.
          Clients store local game state and serve as active recovery agents.
        </p>
        <p>
          Each client polls the server every second to sync game state, achieving near-real-time consistency using a client-server model.
          Leader clients (hosts) control transitions, but the system self-recovers from crashes by reassigning server roles and syncing from the most recent state.
          Proxies store active game snapshots and reroute clients when necessary.
        </p>
        <p>
          All recovery and transitions are handled gracefully using heartbeat protocols, replicated game state, and leader timeouts.
          The result is a multiplayer system resilient to network failures, with decentralized redundancy built-in.
        </p>
      </div>
    </div>
  </div>
);

export default ChatGameDetails;
