import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class StashAnalysisFieldset extends Component {
  
  constructor(props) {
    super(props);

    this.fields = [ 
      'comments'
    ]
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
              hintText=""
              floatingLabelText="Observaciones"
              multiLine={true}
              rows={2}
            />
        </div>
        <RaisedButton
            label="Submit" 
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