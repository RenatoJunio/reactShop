import classes from "./PageSummary.module.css";

const PageSummary = () => {
  return (
    <section className={classes.summary}>
      <p>Disclaimer: None of these items are being sold on this page.</p>
      <p>
        This is a simple and dynamic single-page app used to practice login and
        add-to-cart options.
      </p>
      <p>
        Despite not being an actual shop, the orders will be registerd on the
        database.
      </p>
      <p>
        Upcoming features: pagination, toggle filters, search, sign in and
        login.
      </p>
    </section>
  );
};

export default PageSummary;
