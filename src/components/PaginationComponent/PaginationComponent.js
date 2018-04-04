import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PaginationComponent.scss";

const PaginationComponent = ({ props }) => (
  <nav className="pagination" role="navigation" aria-label="pagination">
    <Link
      className="pagination-previous"
      to={`/page/${parseInt(props.currentPage) - 1}`}
      disabled={props.currentPage <= 1}
    >
      Previous
    </Link>
    <Link
      className="pagination-next"
      to={`/page/${parseInt(props.currentPage) + 1}`}
    >
      Next page
    </Link>
  </nav>
);

PaginationComponent.propTypes = {
  currentPage: PropTypes.number,
  pageUp: PropTypes.func,
  pageDown: PropTypes.func
};

export default PaginationComponent;
