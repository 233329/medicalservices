import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../components/CartContext";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        // Ensure the product has a quantity property for the cart
        setProduct({ ...response.data, quantity: 1 });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return <Typography className="text-center py-10">Loading...</Typography>;

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="max-w-2xl mx-auto shadow-lg p-6">
        <CardBody className="text-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-60 mx-auto mb-4 object-contain"
          />
          <Typography variant="h2" className="font-bold">
            {product.title}
          </Typography>
          <Typography color="gray" className="mt-2">
            ${product.price}
          </Typography>
          <Typography className="mt-4">{product.description}</Typography>
          <div className="mt-6 flex justify-center gap-4">
            <Button color="blue" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
            <Link to="/">
              <Button color="gray">Back to Home</Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductDetails;
