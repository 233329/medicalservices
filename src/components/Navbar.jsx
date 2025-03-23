import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* New Products Button */}
        <Link to="/">
          <Button color="white" className="text-blue-500">
            Products
          </Button>
        </Link>
        <Link to="/cart">
          <Button color="white" className="text-blue-500">
            Cart
          </Button>
        </Link>
        <Link to="/login">
          <Button color="white" className="text-blue-500">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button color="white" className="text-blue-500">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
