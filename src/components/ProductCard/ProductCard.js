import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from 'components/Button';

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

export const ProductCard = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <h3>{product.name}</h3>
      <img width="100" src={product.image} alt={product.name} />
      <div>
        Price: <b>{product.price}$</b>
      </div>
      <Button
        like="💅💅💅"
        action={() => alert('Clicked')}
        primary
        letterSpacing="9px"
      />
    </Card>
  );
};
