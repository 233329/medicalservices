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
          `https://dummyjson.com/products/${id}`
        );
        setProduct({ ...response.data, quantity: 1 });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <Typography className="text-center py-10 text-blue-800 font-semibold">
        Loading...
      </Typography>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-sky-300 py-12 px-4 overflow-x-hidden">
      <Card className="max-w-3xl mx-auto shadow-2xl rounded-2xl bg-white">
        <CardBody className="p-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 w-40 object-cover rounded-xl mb-4 shadow-md"
          />
          <div className="text-center md:text-left flex-1 min-w-[250px]">
            <Typography variant="h5" className="font-bold text-gray-800">
              {product.title}
            </Typography>
            <Typography className="text-lg text-blue-700 mt-1 font-semibold">
              ${product.price}
            </Typography>
            <Typography className="mt-3 text-gray-700 text-sm leading-relaxed">
              {product.description}
            </Typography>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button color="blue" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
              <Link to="/">
                <Button color="gray">Back to Home</Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductDetails;
