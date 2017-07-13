import { Component } from 'preact';

import RepoAnalysis from './RepoAnalysis';

import { StyletronProvider,
  styletron,
  AppItem,
  AppTitle,
  RepoItem,
  RepoTitle } from './styletron-components';

export default class AppListItem extends Component {
  state = {  }
  
  render() {
    const item = this.props.AppInfo;
    console.log(this.props.AppInfo);
    let appName = '';
    let stashUrl = '';
    let repos = [];
    if (this.props.AppInfo && this.props.AppInfo.stash) {
      appName = this.props.AppInfo.stash.description;
      stashUrl = this.props.AppInfo.stash.url;
      repos = this.props.AppInfo.stash.repos.map( (repo) => {
        return  <RepoItem>
                  <RepoTitle href={repo.url_http}>{repo.name}</RepoTitle>
                  <RepoAnalysis RepoAnalysis={repo.arq_analysis}/>
                </RepoItem>
      })
    }
    return (
      <StyletronProvider styletron={styletron}>
        <AppItem>
            <AppTitle href={stashUrl}>{appName}</AppTitle>
            <ul>
              {repos}
            </ul>
        </AppItem>
      </StyletronProvider>
    );
  }
}