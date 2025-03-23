// src/pages/Cart.jsx
import { useCart } from "../components/CartContext";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10 px-4">
      <Typography variant="h3" className="text-center font-bold mb-6">
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h5" className="text-center">
          Your cart is empty.
        </Typography>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex justify-between items-center shadow-md"
            >
              <CardBody className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="small" color="gray">
                    ${item.price} x {item.quantity}
                  </Typography>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="sm"
                      color="blue"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </Button>
                    <Typography variant="h6">{item.quantity}</Typography>
                    <Button
                      size="sm"
                      color="blue"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </CardBody>
              <Button color="red" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Card>
          ))}
          <div className="flex justify-between items-center p-4 mt-4 border-t border-gray-300">
            <Typography variant="h4">Total: ${total.toFixed(2)}</Typography>
            <Button color="blue" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>
      )}
      <div className="text-center mt-6">
        <Link to="/">
          <Button color="blue">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
