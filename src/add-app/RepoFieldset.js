import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';

export default class RepoFieldset extends Component {
  
  constructor(props) {
    super(props);

    this.fields = [ 'reponame', 'repourl', 'repotype' ]
    this.fields.forEach( (fieldname) => this.state[fieldname] = null)

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

   handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  saveAndContinue (e) {
    e.preventDefault()

    let data = {}
    this.fields.forEach( (fieldname) => data[fieldname] = this.state[fieldname]);
    this.props.saveValues(data);
    this.props.nextStep();
  }

  previousStep(e) {
    e.preventDefault()

    this.props.previousStep();
  }

  render() {
    return (
      <fieldset>
        <div className="form-group">
          <TextField
            name="reponame"
            hintText="Nombre del repositorio en Stash"
            floatingLabelText="Nombre"
          />
        </div>
        <div className="form-group">
          <TextField
            name="repourl"
            hintText="Url del repositorio Stash"
            floatingLabelText="Url"
          />
        </div>
        <div className="form-group">
            <SelectField
              name="repotype"
              value={this.state.repotype}
              floatingLabelText="Tipo de repositorio"
              onChange={this.handleChange}
            >
              <MenuItem value='sub' primaryText="Subproceso/s" />
              <MenuItem value='view' primaryText="Vista/s" />
              <MenuItem value='sap' primaryText="Sap/s" />
              <MenuItem value='sng' primaryText="Servicio/s de Negocio" />
              <MenuItem value='enr' primaryText="Enriquecedor/es" />
            </SelectField>
        </div>
        <RaisedButton
          label="Next" 
          primary={true}
          onClick={this.saveAndContinue}/>
        <RaisedButton
          label="Back" 
          secondary={true}
          onClick={this.previousStep}/>
      </fieldset>
    );
  }
}
