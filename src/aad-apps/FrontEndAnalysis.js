import React, { Component } from 'react';
import { renderChecked } from '../util/render-utils';

import { styletron, StyletronProvider,
  AnalysisTable, AnalysisTableTd, AnalysisTableTh, AnalysisTableHeader
 } from './styletron-components';

export default class FrontEndAnalysis extends Component {
  state = {  }
  render() {
    return (
      <StyletronProvider styletron={styletron}>
        <div>
          <AnalysisTable>
            <AnalysisTableHeader>
              <tr>
                <AnalysisTableTh>Config Raiz</AnalysisTableTh>
                <AnalysisTableTh>Build tool</AnalysisTableTh>
                <AnalysisTableTh>Dep tool</AnalysisTableTh>
                <AnalysisTableTh>
                  Versionado
                </AnalysisTableTh>
              </tr>
            </AnalysisTableHeader>
            <tbody>
              <tr>
                <AnalysisTableTd>
                  { renderChecked(this.props.RepoAnalysis.file_structure.root_config) }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  { this.props.RepoAnalysis.web?this.props.RepoAnalysis.web.build_tool:'' }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  <span>
                    { this.props.RepoAnalysis.web?this.props.RepoAnalysis.web.dep_tool:'' }
                  </span>
                </AnalysisTableTd>
                <AnalysisTableTd>
                  <span>
                    { renderChecked(this.props.RepoAnalysis.web.versioning) }
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