import { products } from 'api/products.json';
import ProductList from 'components/ProductList';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>React 29 group!!! You are the very best! 👍</p>
        </header>
        <p>This is our brand new coffee shop!</p>
        <ProductList priceColor="teal" products={products} price={9.99}>
          <h2>Дорогая подборка</h2>
        </ProductList>
        <ProductList priceColor="tomato" products={products} price={9.99}>
          <h2>Бюджетная подборка</h2>
        </ProductList>
      </div>
    </>
  );
}

export default App;
