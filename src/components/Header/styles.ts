import styled from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

h1{
  color: var(--purple-light);
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
}

@media (min-width: 360px) and (max-width: 415px) {
  h1{
    font-size: 22px;
  }
}
`


export const NavLinks = styled.nav`
display: flex;

div + div {
  margin-left: 60px;
 
}

div > a {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}

`

