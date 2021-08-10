import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from 'components/Button';
import { Counter } from 'components/Counter';
import { BasketContext } from 'BasketContext';
import { increment } from 'store/actions';

const useStyles = makeStyles({
  root: {
    width: 150,
    padding: '2rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// { 1: 0, 2: 0, ... }

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const basket = {};
  const count = useSelector((state) => state.count);
  const users = useSelector((state) => state.users);
  console.log(users);
  // const { basket } = useContext(BasketContext);

  return (
    <Card className={classes.root}>
      <h3>{product.name}</h3>
      <img width="100" src={product.image} alt={product.name} />
      <div onClick={() => dispatch(increment() /* { type: 'INCREMENT' } */)}>
        Price: <b>{count}$</b>
      </div>
      <Counter productId={product.id} value={basket[product?.id]} />
      <Button action={() => alert('Clicked')} primary letterSpacing="9px">
        Buy
      </Button>
    </Card>
  );
};
