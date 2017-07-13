import Styletron from 'styletron-client';
import { styled } from  'styletron-preact';

export * from './analysis-table.js';

export const AppItem = styled('li', {
  backgroundColor: '#e9e9ef',
  border: '2px solid lightblue',
  marginBottom: '10px',
  padding: '10px'
})

export const AppTitle = styled('a', {
  fontSize: '1.5em',
  fontWeight: 'bold',
})

const repoPanelRow = {
  padding: '10px'
}

export const RepoPanel = styled('div', repoPanelRow)

export const RepoItem = styled('li', {
  backgroundColor: '#fff',
  border: '2px solid lightblue',
  display: 'grid',
  gridTemplateRows: '40px auto',
  margin: '10px 0px',
  listStyle: 'none'
})

export const RepoTitle = styled('a', Object.assign({
  borderBottom: '1px slid lighblue',
  fontSize: '1.25em',
  fontWeight: 'bold',
  padding: '10px'
}, repoPanelRow))

export const IconWrapper = styled('span', {
  padding: '0 0.5em'
})

export const styletron = new Styletron();

export { StyletronProvider } from 'styletron-preact';

export default styletron;
