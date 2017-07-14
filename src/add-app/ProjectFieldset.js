import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ProjectFieldset extends Component {

  constructor(props) {
    super(props);

    this.fields = [ 'stashproject',
      'stashkey',
      'stashurl',
      'stashdescription' ]
    
    this.fields.forEach( (fieldname) => this.state[fieldname] = this.props.fieldValues[fieldname]?this.props.fieldValues[fieldname]:null)

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
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

    let data = {};
    this.fields.forEach( (fieldname) => data[fieldname] = this.state[fieldname]);
    this.props.saveValues(data);
    this.props.nextStep();
  }

  render() {
    return (
      <fieldset>
          <div className="form-group">
            <TextField
              name={this.fields[0]}
              hintText="Nombre del proyecto Stash"
              floatingLabelText="Nombre"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <TextField
              name={this.fields[1]}
              hintText="Clabe del proyecto Stash"
              floatingLabelText="Clave"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <TextField
              name={this.fields[2]}
              hintText="Url del proyecto Stash"
              floatingLabelText="Url"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <TextField
              name={this.fields[3]}
              hintText="Descripción del proyecto Stash"
              floatingLabelText="Descripción"
              onChange={this.handleInputChange}
            />
          </div>
          <RaisedButton
            label="Next" 
            primary={true}
            onClick={this.saveAndContinue}/>
        </fieldset>
    );
  }
}