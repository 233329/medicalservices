import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // Add a quantity field to each product so we can handle cart logic
        const dataWithQuantity = response.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setProducts(dataWithQuantity);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <Typography variant="h3" className="text-center font-bold mb-6">
        Products
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="shadow-lg">
            <CardBody className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mb-4 object-contain"
              />
              <Typography variant="h5" className="text-center">
                {product.title}
              </Typography>
              <Typography color="gray" className="mt-2">
                ${product.price}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link to={`/product/${product.id}`}>
                <Button color="blue">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
