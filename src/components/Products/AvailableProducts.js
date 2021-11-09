import { useEffect, useState } from "react";

import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";
import ProductsPagination from "./ProductsPagination";

const Availableproducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://react-login-cart-default-rtdb.europe-west1.firebasedatabase.app/items.json"
      );

      if (!response.ok) throw new Error("Something went wrong");

      const responseData = await response.json();

      const loadedProducts = [];
      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.productsLoading}>
        <p> Loading... </p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.productsLoading}>
        <p> {httpError} </p>
      </section>
    );
  }

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = productsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className={classes.products}>
      <Card>
        <ul>{currentProduct}</ul>
        <ProductsPagination
          productsPerPage={productsPerPage}
          totalProducts={productsList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Card>
    </section>
  );
};

export default Availableproducts;
