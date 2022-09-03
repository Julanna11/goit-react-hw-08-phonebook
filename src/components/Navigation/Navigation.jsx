import { Container, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <Container>
      <Link to="/register">Create an account</Link>
      <Link to="/login">Sign in</Link>
    </Container>
  );
}
