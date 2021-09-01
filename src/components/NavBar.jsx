import { Nav } from "react-bootstrap";

const NavBar = () => (
  <Nav
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    className="px-1 bg-dark text-white"
  >
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Series</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">New & Popular</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ml-auto mr-5">
      <Nav.Link eventKey="link-4">Search</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default NavBar;
