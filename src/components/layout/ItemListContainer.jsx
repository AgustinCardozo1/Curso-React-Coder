import PropTypes from "prop-types";

const ItemListContainer = ({ data }) => {
  return <h1>{data}</h1>;
};

// Definición de prop-types
ItemListContainer.propTypes = {
  data: PropTypes.string.isRequired, // Puedes ajustar el tipo según lo que esperes (en este caso, un string)
};

export default ItemListContainer;
