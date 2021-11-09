import { Fragment } from "react";

import PageSummary from "./PageSummary";
import AvailableProducts from "./AvailableProducts";

const Products = () => {
  return (
    <Fragment>
      <PageSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
