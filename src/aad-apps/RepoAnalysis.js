import React, { Component } from 'react';

import StashAnalysis from './StashAnalysis';
import BackEndAnalysis from './BackEndAnalysis';
import FrontEndAnalysis from './FrontEndAnalysis';

import { StyletronProvider, styletron, RepoPanel } from './styletron-components';

export default class  extends Component {
  state = {  }
  render() {
    return (
      <StyletronProvider styletron={styletron}>
        <RepoPanel>
          <h4>Análisis Stash</h4>
          <StashAnalysis RepoAnalysis={this.props.RepoAnalysis} />
          {this.props.RepoAnalysis.back?
            <div>
              <h4>Análisis Back-end</h4>
              <BackEndAnalysis RepoAnalysis={this.props.RepoAnalysis} />
            </div>:''
          }
          {this.props.RepoAnalysis.web?
            <div>
              <h4>Análisis Front-end</h4>
              <FrontEndAnalysis RepoAnalysis={this.props.RepoAnalysis} />
            </div>:''
          }
        </RepoPanel>
      </StyletronProvider>
    );
  }
}
