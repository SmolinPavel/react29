import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ProductCard } from 'components/ProductCard';
import { increment } from 'store/counter';

import styles from './ProductList.module.scss';

const ProductList = ({ children, products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <div>
      {children}
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
