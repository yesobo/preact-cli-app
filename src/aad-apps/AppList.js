import { Component } from 'preact';
import AppListItem from './AppListItem';

export default class AppList extends Component {
	
  render() {
    const listItems = this.props.AppListArray.map( (item) => {
      
      return <AppListItem AppInfo={item}/>
    });
    return (
      <ul>
        {listItems}            
      </ul>
    );
  }
}
