import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  object-fit: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  column-gap: 1.5rem;
  background-color: #121212;
  color: #f3f3f3;

  img {
    height: 85vh;
    width: auto;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h3,
  p {
    margin-bottom: 1rem;
  }
`;
