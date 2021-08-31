import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { products } from 'api/products.json';
import ProductList from 'components/ProductList';
import { Login } from 'components/Login';
import { Logout } from 'components/Logout';
import { Reviews } from 'components/Reviews';
import { PrivateRoute } from 'components/PrivateRoute';
import { UserProvider } from 'contexts';
import { store } from 'store';
import { NewUsers } from 'components/NewUsers';

const AsyncDeliveryList = lazy(() => import('components/DeliveryList'));

const DeliveryList = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncDeliveryList />
  </Suspense>
);

const initialBasket = {};
products.forEach((product) => {
  initialBasket[product.id] = 0;
});

const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  REVIEWS: '/reviews',
  LOGIN: '/login',
};

const App = () => {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState('');
  const [basket] = useState(initialBasket);

  const handleChange = (event) => setSearch(event.target.value);

  // const updateBasket = (productId, newValue) =>
  //   setBasket((prevBasket) => ({ ...prevBasket, [productId]: newValue }));

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const basketMessages = products
    .filter((product) => basket[product.id])
    .map((product) => {
      return `${product.name}: ${basket[product.id]} шт.`;
    });

  const token = localStorage.getItem('token');
  let name = '';
  if (token) {
    name = jwt_decode(token).name;
  }

  return (
    <UserProvider>
      <Provider store={store}>
        <BrowserRouter>
          <header>
            {name && <h1>Hello {name}</h1>}
            <ul>
              <li>
                <NavLink
                  exact
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'tomato',
                  }}
                  to={ROUTES.HOME}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'tomato',
                  }}
                  to={ROUTES.LOGIN}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'tomato',
                  }}
                  to={ROUTES.ABOUT}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'tomato',
                  }}
                  to={ROUTES.REVIEWS}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Logout />
          </header>
          <Switch>
            <PrivateRoute path={ROUTES.ABOUT} component={DeliveryList} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.REVIEWS}>
              {() => (
                <>
                  <div>
                    <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
                      Toggle reviews
                    </button>
                  </div>
                  {open && <Reviews />}
                </>
              )}
            </Route>
            <Route
              path={ROUTES.HOME}
              exact
              render={() => (
                <div className="App">
                  <NewUsers />
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

                  <ProductList priceColor="teal" products={filteredProducts}>
                    <h2>Дорогая подборка</h2>
                  </ProductList>
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    </UserProvider>
  );
};

export default App;

// 1. access token / 5 min /
// 2. refresh token / 183 days / stored in DB
