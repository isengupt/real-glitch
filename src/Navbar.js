import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="top-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
        <div className="frame__title-wrap">
          <h1 className="frame__title">Ishan Sengupta</h1>
          <p className="frame__tagline">Front-end experimentation
          <span class="blinking-cursor">|</span>
          </p>
        </div>

        </div>
        <div clasName="navbar-right">
        <a href="https://www.dropbox.com/s/wchtpctilaxujfv/ISHAN_UPDATED_RESUME.pdf?dl=0">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
