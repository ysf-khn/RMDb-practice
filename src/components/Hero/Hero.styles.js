import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  object-fit: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  column-gap: 1.5rem;
  background-color: #121212;
  color: white;

  img {
    height: 85vh;
    width: auto;
  }

  h1 {
    background-color: yellow;
    color: #121212;
    width: fit-content;
    margin-bottom: 2rem;
    padding: 0.5rem;
    border-radius: 5px;
  }

  h3,
  p {
    margin-bottom: 1rem;
  }
`;
