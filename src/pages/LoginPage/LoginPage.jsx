import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/authorization-requests';
import {
  Container,
  Form,
  Label,
  LableText,
  LableInfo,
  Input,
} from '../RegistrationPage/RegistrationPage.styled';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import { theme } from '../../utilities/button.styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LableText>Email address</LableText>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            required
          />
        </Label>

        <Label>
          <LableText>
            Password
            <LableInfo>
              (Your password must have 8 or more characters, you entered
              {password.length})
            </LableInfo>
          </LableText>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            required
            pattern="(?=.*\d).{7,}"
            title="Your password must have 7 or more characters, at least one little letter, and one number."
          />
        </Label>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            sx={{ ml: 12 }}
            color="buttonColor"
            variant="contained"
          >
            Sign in
          </Button>
        </ThemeProvider>
      </Form>
    </Container>
  );
}
