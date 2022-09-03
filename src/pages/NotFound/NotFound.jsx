import styled from 'styled-components';

const Title = styled.p`
  padding-top: 40px;
  text-align: center;
  color: #42362b;
  font-size: 30px;
  font-weight: 500;
`;

export default function NotFound() {
  return <Title>Page not found</Title>;
}
