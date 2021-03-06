import { Navbar } from "react-bootstrap";

const NavbarComp = () => (
  <>
    <Navbar bg="dark" className="fixed-top">
      <Navbar.Brand href="/">
        <img src="/home.png" width="40" height="40" alt="Home logo" />
      </Navbar.Brand>
      <Navbar.Brand href="/favorite">
        <img src="/heart.png" width="40" height="40" alt="Favorite logo" />
      </Navbar.Brand>
    </Navbar>
  </>
);

export default NavbarComp;
