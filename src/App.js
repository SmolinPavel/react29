import { Component } from 'react';

import { products } from 'api/products.json';
import ProductList from 'components/ProductList';

const basket = {};
products.forEach((product) => {
  basket[product.id] = 0;
});

class App extends Component {
  state = {
    search: '',
    basket,
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  updateBasket = (productId, newValue) => {
    const { basket } = this.state;
    this.setState({ basket: { ...basket, [productId]: newValue } });
  };

  render() {
    const { search, basket } = this.state;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    const basketMessages = products
      .filter((product) => basket[product.id])
      .map((product) => {
        return `${product.name}: ${basket[product.id]} шт.`;
      });

    return (
      <>
        <div className="App">
          <div style={{ padding: '30px 10px 10px' }}>
            <input
              style={{ width: '400px' }}
              value={search}
              onChange={this.handleChange}
              placeholder="Напишите товар, который Вы ищите"
            />
          </div>
          {basketMessages.length > 0 && (
            <h3>Baша корзина: {basketMessages.join(', ')}</h3>
          )}

          <ProductList
            basket={basket}
            priceColor="teal"
            updateBasket={this.updateBasket}
            products={filteredProducts}
          >
            <h2>Дорогая подборка</h2>
          </ProductList>
        </div>
      </>
    );
  }
}

export default App;
