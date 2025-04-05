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
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-sky-300 py-12 px-6">
      <Typography
        variant="h2"
        className="text-center font-bold text-gray-800 mb-10"
      >
        Featured Products
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="transition-transform duration-300 hover:scale-105 bg-white shadow-xl rounded-2xl overflow-hidden"
          >
            <CardBody className="p-4 flex flex-col items-center text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-40 object-cover rounded-xl mb-4 shadow-md"
              />
              <Typography variant="h6" className="font-semibold text-gray-900">
                {product.title}
              </Typography>
              <Typography className="text-gray-600 text-sm mt-1">
                ${product.price}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 pb-4 text-center">
              <Link to={`/product/${product.id}`}>
                <Button
                  color="light-blue"
                  size="sm"
                  className="px-6 py-2 rounded-full shadow hover:shadow-md transition duration-300"
                >
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
