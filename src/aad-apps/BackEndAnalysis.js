import React, { Component } from 'react';
import { renderChecked } from '../util/render-utils';

import { StyletronProvider, styletron, 
  AnalysisTable, AnalysisTableTd, AnalysisTableTh, AnalysisTableHeader,
  IconWrapper } from './styletron-components';

export default class extends Component {
  state = {  }
  render() {
    return (
      <StyletronProvider styletron={styletron}>
        <div>
          <AnalysisTable>
            <AnalysisTableHeader>
              <tr>
                <AnalysisTableTh>Pom raiz</AnalysisTableTh>
                <AnalysisTableTh>Usa assembly</AnalysisTableTh>
                <AnalysisTableTh>
                  Módulos arquetipados
                </AnalysisTableTh>
              </tr>
            </AnalysisTableHeader>
            <tbody>
              <tr>
                <AnalysisTableTd>
                  { renderChecked(this.props.RepoAnalysis.file_structure.root_config) }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  <IconWrapper>{renderChecked(this.props.RepoAnalysis.back.assembly_folder)}</IconWrapper>
                  { this.props.RepoAnalysis.back?this.props.RepoAnalysis.back.assembly_folder.toString():'' }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  <IconWrapper>
                    { renderChecked(this.props.RepoAnalysis.back.archetyped_subfolders) }
                  </IconWrapper>
                  <span>
                    { this.props.RepoAnalysis.back?(this.props.RepoAnalysis.back.archetyped_new?' NEW':' OLD'):'' }
                  </span>
                </AnalysisTableTd>
              </tr>
            </tbody>
          </AnalysisTable>
        </div>
      </StyletronProvider>
    );
  }
}