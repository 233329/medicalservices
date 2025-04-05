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
              className="p-4 flex flex-col sm:flex-row justify-between items-center shadow-md"
            >
              <CardBody className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-40 w-40 object-cover rounded-xl mb-4 shadow-md"
                />
                <div className="flex-1 text-center sm:text-left">
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="small" color="gray">
                    ${item.price} x {item.quantity}
                  </Typography>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
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
                <div className="mt-4 sm:mt-0">
                  <Button color="red" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </CardBody>
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
