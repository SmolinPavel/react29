import { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchDeliveryTeam } from './api';

export default class DeliveryList extends Component {
  state = {
    deliveryTeam: [],
    error: null,
    loading: false,
  };

  // fetch users data
  // 1. Make a request to the server
  // 2.a. -> Success. -> setState({ deliveryTeam: data })
  // 2.b. -> Failure. -> setState({ error })

  loadDeliveryTeam = async () => {
    // /* Using .then */
    // fetch(API_URL)
    //   .then((response) => response.json())
    //   .then((deliveryTeam) => this.setState({ deliveryTeam }))
    //   .catch((error) => this.setState({ error: error.message }));
    //   .finally(() => this.setState({ loading: false }))

    /* Using async/await */
    this.setState({ loading: true });
    try {
      const deliveryTeam = await fetchDeliveryTeam();

      this.setState({ deliveryTeam });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { deliveryTeam, error, loading } = this.state;

    return (
      <div>
        <h3>Our delivery team</h3>
        {deliveryTeam.length === 0 && !loading && (
          <button onClick={this.loadDeliveryTeam}>Show delivery team</button>
        )}
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <h2>Ooops... Something went wrong. {error}</h2>
        ) : (
          <ul>
            {deliveryTeam.map((deliveryGuy) => (
              <li key={deliveryGuy.id}>{deliveryGuy.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
