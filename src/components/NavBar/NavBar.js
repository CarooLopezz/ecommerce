import CartWidget from "../CartWidget/CartWidget"
import Nav from 'react-bootstrap/Nav';
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
                <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Q&A</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Login</Nav.Link>
                </Nav.Item>
                </Nav>

            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar