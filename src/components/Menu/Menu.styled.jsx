import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div``;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  padding: 0 14px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  position: relative;
  z-index: 20;

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #89ff81;
  }
`;
