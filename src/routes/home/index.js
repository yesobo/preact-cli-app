import { h, Component } from 'preact';
import AppList from '../../aad-apps/AppList';
import style from './style';

import { appsArray } from '../../data/aad-apps';


export default class Home extends Component {
	state = {
		appsArray: appsArray
	}
	render() {
		return (
			<div class={style.home}>
				<h1>Análisis arquitectura aplicaciones AAD</h1>
				<AppList AppListArray={this.state.appsArray}/>
			</div>
		);
	}
}
