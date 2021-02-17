import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = !name || !password || !email;

  const handleSignup = (event) => {
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => result.user.updateProfile({
        displayName: name,
        photoURL: Math.floor(Math.random() * 5) + 1,
      }).then(() => history.push('/browse')))
      .catch(error => {
        setName('');
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

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="Name"
              value={name}
              onChange={({ target }) => setName(target.value)} />

            <Form.Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)} />

            <Form.Input
              type="password"
              placeholder="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)} />


            <Form.Submit disabled={isInvalid} type="submit">
              Sign up
              </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  )
}
