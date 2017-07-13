import React, { Component } from 'react';
import { renderChecked } from '../util/render-utils';

import { styletron, StyletronProvider,
  AnalysisTable, AnalysisTableTh, AnalysisTableTd, AnalysisTableHeader 
} from './styletron-components';

export default class StashAnalysis extends Component {
  state = {  }

  render() {
    return (
      <StyletronProvider styletron={styletron}>
        <div>
          <AnalysisTable>
            <AnalysisTableHeader>
              <tr>
                <AnalysisTableTh>Tiene Tags</AnalysisTableTh>
                <AnalysisTableTh>Usa master</AnalysisTableTh>
                <AnalysisTableTh>Usa releasecandidate</AnalysisTableTh>
                <AnalysisTableTh>Usa develop</AnalysisTableTh>
                <AnalysisTableTh>Usa JIRA features</AnalysisTableTh>
              </tr>
            </AnalysisTableHeader>
            <tbody>
              <tr>
                <AnalysisTableTd>
                  { renderChecked(this.props.RepoAnalysis.has_tags) }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  { renderChecked(this.props.RepoAnalysis.master_empty) }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  { renderChecked(this.props.RepoAnalysis.releasecandidate_empty) }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  { renderChecked(!this.props.RepoAnalysis.develop_empty) }
                </AnalysisTableTd>
                <AnalysisTableTd>
                  { renderChecked(!this.props.RepoAnalysis.jira_features) }
                </AnalysisTableTd>
              </tr>
            </tbody>
          </AnalysisTable>
        </div>
      </StyletronProvider>
    );
  }
}