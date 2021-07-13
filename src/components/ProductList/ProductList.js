import PropTypes from 'prop-types';

import { ProductCard } from 'components/ProductCard';

import styles from './ProductList.module.scss';

const ProductList = ({ children, priceColor, price, products }) => {
  return (
    <div>
      {children}
      <h2>{price}$</h2>
      <ul className={styles.ProductList}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
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
  priceColor: PropTypes.string,
};

ProductList.defaultProps = {
  children: 'Product List',
};

export default ProductList;
