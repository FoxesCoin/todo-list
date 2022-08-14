import styled from 'styled-components';

import { CreateField, InfoPanel } from './components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  row-gap: 1rem;
  grid-auto-rows: min-content;
  width: 100%;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const App = () => {
  return (
    <Wrapper>
      <h1>TODO LIST</h1>
      <CreateField />
      <InfoPanel />
    </Wrapper>
  );
};
