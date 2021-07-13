import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from 'components/Button';
import { Counter } from 'components/Counter';

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

export const ProductCard = ({ basket, product, updateBasket }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <h3>{product.name}</h3>
      <img width="100" src={product.image} alt={product.name} />
      <div>
        Price: <b>{product.price}$</b>
      </div>
      <Counter
        productId={product.id}
        updateBasket={updateBasket}
        value={basket[product.id]}
      />
      <Button action={() => alert('Clicked')} primary letterSpacing="9px">
        Buy
      </Button>
    </Card>
  );
};
