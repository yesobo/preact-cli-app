import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import { CheckIcon, XIcon  } from '../util/render-utils';

const styles = {
  block: {
    maxWidth: 300,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class StashAnalysisFieldset extends Component {
  
  constructor(props) {
    super(props);

    this.fields = [
      'usestags',
      'emptyrcbranch',
      'emptymasterbranch',
      'emptydevelopbranch',
      'rootconfig',
      'jirafeautres'
    ]
    
    this.fields.forEach( (fieldname) =>
      this.state[fieldname] = this.props.fieldValues[fieldname] || this.customInitialValue(fieldname))

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  customInitialValue(fieldsNameArr) {
    // All fields are checkboxes
    return false;
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
    e.preventDefault();

    this.props.previousStep();
  }
  

  render() {
    return (
        <fieldset>
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name={this.fields[0]}
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="Tiene tags (git)"
              labelPosition="left"
              style={styles.checkbox}
              onCheck={this.handleInputChange}
            />
          </div>
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name={this.fields[1]}
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="No utiliza releasecandidate"
              labelPosition="left"
              style={styles.checkbox}
              onCheck={this.handleInputChange}
            />
          </div>
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name={this.fields[2]}
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="No utiliza master"
              labelPosition="left"
              style={styles.checkbox}
              onCheck={this.handleInputChange}
            />
          </div>
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name={this.fields[3]}
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="No utiliza develop"
              labelPosition="left"
              style={styles.checkbox}
              onCheck={this.handleInputChange}
            />
          </div>
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name={this.fields[4]}
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="Configuración en raiz"
              labelPosition="left"
              style={styles.checkbox}
              onCheck={this.handleInputChange}
            />
          </div>
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name={this.fields[5]}
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="Jira features"
              labelPosition="left"
              style={styles.checkbox}
              onCheck={this.handleInputChange}
            />
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