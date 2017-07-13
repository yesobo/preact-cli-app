import { styled } from  'styletron-preact';

export const AnalysisTable = styled('table', {
  backgroundColor: '#fff',
  border: '1px solid black',
  borderSpacing: '0',
  borderRight: '0',
  padding: '0'
})

const cellStyle = {
  border: '1px solid black',
  borderTop: '0',
  borderLeft: '0',
  borderBottom: '0',
  padding: '5px'
}

const centeredCellStyle = Object.assign({
  textAlign: 'center'
}, cellStyle);

export const AnalysisTableHeader = styled('thead', {
  backgroundColor: 'lightgray'
});

export const AnalysisTableTd = styled('td', centeredCellStyle);
export const AnalysisTableTh = styled('th', centeredCellStyle);

export default { AnalysisTable, AnalysisTableTd, AnalysisTableTh}
