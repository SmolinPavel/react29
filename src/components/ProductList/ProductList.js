import PropTypes from 'prop-types';

export const ProductList = ({ children, price, products }) => {
  return (
    <div>
      {children}
      <h2>{price}$</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <img width="100" src={product.image} alt={product.name} />
            <div>
              Price: <b>{product.price}$</b>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  children: PropTypes.node,
  price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
};

ProductList.defaultProps = {
  children: 'Product List',
};
