import { Component } from 'react';
import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';

import styles from './AuthForm.module.scss';

const WAKE_UP_OPTIONS = {
  BEFORE_NOON: 'BEFORE_NOON',
  AFTER_NOON: 'AFTER_NOON',
};

const SYRUP_OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    termsAgreed: false,
    wakeUpTime: WAKE_UP_OPTIONS.AFTER_NOON,
    syrup: null,
  };

  handleChange = (event) => {
    const { checked, name, type, value } = event.target;

    if (type === 'checkbox') {
      this.setState({ [name]: checked });
      return;
    }

    this.setState({ [name]: value });
  };

  handleSelect = (syrup) => {
    this.setState({ syrup });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    const { email, password, repeatPassword, syrup, termsAgreed, wakeUpTime } =
      this.state;

    return (
      <div className={styles.Wrapper}>
        <h2>Auth Form</h2>
        <form>
          <div className={styles.InputWrapper}>
            <TextField
              value={email}
              label="Enter your email"
              variant="outlined"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.InputWrapper}>
            <TextField
              value={password}
              label="Enter your password"
              variant="outlined"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.InputWrapper}>
            <TextField
              value={repeatPassword}
              label="Repeat your password"
              name="repeatPassword"
              onChange={this.handleChange}
              variant="outlined"
            />
          </div>
          <div className={styles.InputWrapper}>
            {/* <FormControlLabel
              control={
                <Checkbox
                  checked={termsAgreed}
                  name="termsAgreed"
                  color="primary"
                  onChange={this.handleChange}
                />
              }
              label="Agreed with the terms of usage"
            /> */}
            <label>
              Agree to terms
              <input
                type="checkbox"
                checked={termsAgreed}
                name="termsAgreed"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={styles.InputWrapper}>
            <label>
              Before noon
              <input
                type="radio"
                checked={wakeUpTime === WAKE_UP_OPTIONS.BEFORE_NOON}
                name="wakeUpTime"
                value={WAKE_UP_OPTIONS.BEFORE_NOON}
                onChange={this.handleChange}
              />
            </label>
            <label>
              After noon
              <input
                type="radio"
                checked={wakeUpTime === WAKE_UP_OPTIONS.AFTER_NOON}
                name="wakeUpTime"
                value={WAKE_UP_OPTIONS.AFTER_NOON}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={styles.SelectWrapper}>
            <Select
              value={syrup}
              onChange={this.handleSelect}
              options={SYRUP_OPTIONS}
            />
          </div>
          <div>
            <Button
              onClick={this.handleSubmit}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
