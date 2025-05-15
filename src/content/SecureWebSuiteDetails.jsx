const SecureWebSuiteDetails = () => (
  <div>
    <h3>System Design Overview</h3>
    <p>
      SecureWebSuite is a Java-based secure networking application that provides both HTTP and reliable UDP-based file transfer services.
      It features a multithreaded server capable of handling concurrent clients and authenticates all users using SHA-256 hashing.
    </p>

    <h4>Core Components</h4>
    <ul>
      <li><strong>Authenticator:</strong> Validates user credentials using SHA-256 digests.</li>
      <li><strong>HttpServer & Client:</strong> Classic socket-based HTTP server with multithreaded request handling.</li>
      <li><strong>Stop-and-Wait File Transfer:</strong> Custom UDP protocol to ensure packet reliability for larger files.</li>
      <li><strong>FileDownloader & FileUtils:</strong> Modular utilities for secure download and file management operations.</li>
    </ul>

    <p>
      This suite demonstrates secure socket programming, custom protocol design, and fault-tolerant networking behavior — 
      making it a robust model for building low-level secure communications.
    </p>
  </div>
);

export default SecureWebSuiteDetails;
