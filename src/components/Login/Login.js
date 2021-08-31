import { useState } from 'react';
import { useHistory } from 'react-router';

import styles from './Login.module.scss';

const FAKE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const fakeLoginApi = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(FAKE_TOKEN), delay);
  });

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const token = await fakeLoginApi(1000);
    localStorage.setItem('token', token);
    history.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <div className={styles.InputWrapper}>
        <div>Email:</div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.InputWrapper}>
        <div>Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
