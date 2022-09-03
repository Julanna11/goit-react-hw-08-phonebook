import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authorization/authorization-selectors';
import {
  Container,
  Link,
  Text,
  Title,
} from '../../pages/HomePage/HomePage.styled';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Container>
          <Title>Welcome in phonebook add</Title>
          <Text>
            To get an access to contacts <br />
            please <Link to="/login">sign in</Link>
          </Text>
        </Container>
      )}

      {isLoggedIn && children}
    </>
  );
}
