import styled from 'styled-components';

import { CreateField, InfoPanel } from './components';
import { StatusBar } from './components/status-bar';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  row-gap: 1rem;
  grid-template-rows: min-content min-content min-content 1fr min-content;
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
      <StatusBar />
    </Wrapper>
  );
};
