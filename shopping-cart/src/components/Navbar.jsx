
import { Link } from 'react-router-dom';

const Navbar = ({cart}) => {
  let totalInCart = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <nav data-testid="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
          <span>{totalInCart > 0 ? totalInCart : ""}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
