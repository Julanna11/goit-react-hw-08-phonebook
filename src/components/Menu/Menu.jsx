import AuthorizationMenu from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authorization/authorization-selectors';
import { Container, Nav, MenuLink } from './Menu.styled';

export default function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Nav>
        <MenuLink to="/">Home</MenuLink>
        {isLoggedIn && <MenuLink to="contacts">Contacts</MenuLink>}
      </Nav>

      {isLoggedIn ? <UserMenu /> : <AuthorizationMenu />}
    </Container>
  );
}
