import styled from 'styled-components'

export const GamesList = styled.ul`
  list-style: none;
  padding: 0;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  row-gap: 30px;
  justify-content: center;

  @media (min-width: 576px) {
    padding: 0 20px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`
