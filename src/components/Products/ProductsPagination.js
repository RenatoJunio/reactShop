import classes from "./ProductsPagination.module.css";

const ProductsPagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.container}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number
                ? [classes.button, classes.active].join(" ")
                : classes.button
            }
            onClick={() => {
              paginate(number);
            }}
          >
            <a href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductsPagination;
