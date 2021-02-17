import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import { FirebaseContext } from '../context/firebase';

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || email === '';
  const handleSignin = (event) => {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/browse');
      })
      .catch((error) => {
        setEmail('');
        setPassword('');
        setError(error.message);
      })

  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)} />

            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)} />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
              </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer></FooterContainer>
    </>
  )
}
