import { useState } from 'react';

import { products } from 'api/products.json';
import ProductList from 'components/ProductList';
import { DeliveryList } from 'components/DeliveryList';
import { Reviews } from 'components/Reviews';

const initialBasket = {};
products.forEach((product) => {
  initialBasket[product.id] = 0;
});

const App = () => {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState('');
  const [basket, setBasket] = useState(initialBasket);

  const handleChange = (event) => setSearch(event.target.value);

  const updateBasket = (productId, newValue) =>
    setBasket((prevBasket) => ({ ...prevBasket, [productId]: newValue }));

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const basketMessages = products
    .filter((product) => basket[product.id])
    .map((product) => {
      return `${product.name}: ${basket[product.id]} шт.`;
    });

  return (
    <>
      <DeliveryList />
      <hr />
      <div className="App">
        <div style={{ padding: '30px 10px 10px' }}>
          <input
            style={{ width: '400px' }}
            value={search}
            onChange={handleChange}
            placeholder="Напишите товар, который Вы ищите"
          />
        </div>
        {basketMessages.length > 0 && (
          <h3>Baша корзина: {basketMessages.join(', ')}</h3>
        )}

        <ProductList
          basket={basket}
          priceColor="teal"
          updateBasket={updateBasket}
          products={filteredProducts}
        >
          <h2>Дорогая подборка</h2>
        </ProductList>
        <hr />
        <div>
          <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
            Toggle reviews
          </button>
        </div>
        {open && <Reviews />}
      </div>
    </>
  );
};

export default App;
