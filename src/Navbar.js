import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="top-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-title navbar-item">ISHAN SENGUPTA</div>
          <div className="navbar-item ">DIGITAL <span class="blinking-cursor">|</span></div>
        </div>
        <div clasName="navbar-right">
          <div className="navbar-item typing">BUZZWORD</div>
        </div>
      </div>
    </div>
  );
}
