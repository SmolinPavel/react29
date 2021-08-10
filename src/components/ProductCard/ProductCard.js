import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import { Button } from 'components/Button';
import { Counter } from 'components/Counter';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
    padding: '2rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  ava: {
    minWidth: '10px',
  },
}));

export const ProductCard = ({ basket, product, updateBasket }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <List className={classes.test}>
        <ListItem>
          <ListItemAvatar
            classes={{
              root: classes.ava,
            }}
          >
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
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
