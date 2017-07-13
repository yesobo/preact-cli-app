import { h, Component } from 'preact';
import style from './style';

import AddAppForm from '../../add-app/AddAppForm';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Add extends Component {
	render() {
		return (
			<MuiThemeProvider >
				<div class={style.add}>
						<h1>Añadir análisis de aplicación AAD</h1>
						<AddAppForm />
				</div>
			</ MuiThemeProvider>
		);
	}
}
