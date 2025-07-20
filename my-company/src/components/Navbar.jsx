import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '10px', backgroundColor: "#2F4F7F", display: "flex", justifyContent: "center" }}>
      <Link to="/" style={{ margin: '10px', color: '#fff' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px', color: '#fff' }}>About</Link>
      <Link to="/services" style={{ margin: '10px', color: '#fff' }}>Services</Link>
      <Link to="/contact" style={{ margin: '10px', color: '#fff' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
