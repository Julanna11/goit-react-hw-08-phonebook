import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authorization/authorization-selectors';
import { Container, Title, Text, Link } from './HomePage.styled';

export default function HomePage() {
  const isLoggedId = useSelector(getIsLoggedIn);
  return (
    <>
      <Container>
        <Title>Welcome in phonebook add</Title>
        {!isLoggedId && (
          <>
            <Text>
              If you don't have account <Link to="/register">register</Link>,
              please
            </Text>
            <Text>
              Already have an account? <Link to="/login">Sign in</Link>
            </Text>
          </>
        )}
      </Container>
    </>
  );
}
