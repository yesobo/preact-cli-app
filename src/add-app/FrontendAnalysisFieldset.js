import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

export default class FrontendAnalysisFieldset extends Component {

  constructor(props) {
    super(props);

    this.fields = [ 
      'buildtools', 
      'deptools',
      'versioned' ]

    this.fields.forEach( (fieldname) =>
      this.state[fieldname] = this.props.fieldValues[fieldname] || this.customInitialValue(fieldname))

    this.handleBuildToolsSelectChange = this.handleBuildToolsSelectChange.bind(this);
    this.handleDepToolsSelectChange = this.handleDepToolsSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.previousStep = this.previousStep.bind(this);

    
  }

  customInitialValue(fieldsNameArr) {
    // Checkbox to false, rest to null
    if (fieldsNameArr === this.fields[2]) return false;
    return null;
  }

  handleBuildToolsSelectChange(event, index, value) {
    this.setState({buildtools: value})
    console.log(this.state);
  };

  handleDepToolsSelectChange(event, index, value) {
    this.setState({deptools: value})
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  saveAndContinue(e) {
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
          <SelectField
            name={this.fields[0]}
            multiple={true}
            hintText="Build tools"
            value={this.state.buildtools}
            onChange={this.handleBuildToolsSelectChange}
          >
            <MenuItem value='grunt' primaryText="Grunt" />
            <MenuItem value='gulp' primaryText="Gulp" />
            <MenuItem value='webpack' primaryText="Webpack" />
            <MenuItem value='rollup' primaryText="RollUp" />
            <MenuItem value='otro' primaryText="otro" />

          </SelectField>
        </div>
        <div className="form-group">
          <SelectField
            name={this.fields[1]}
            multiple={true}
            hintText="Gestor de dependencias"
            value={this.state[this.fields[1]]}
            onChange={this.handleDepToolsSelectChange}
          >
            <MenuItem value='npm' primaryText="Npm" />
            <MenuItem value='bower' primaryText="Bower" />
            <MenuItem value='yarn' primaryText="Yarn" />
          </SelectField>
        </div>
        <div className="form-group"
          style={styles.block}>
          <Checkbox
            name="versioned"
            checkedIcon={CheckIcon}
            uncheckedIcon={XIcon}
            label="Versiona"
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
          onClick={this.previousStep} />
      </fieldset>
    );
  }
}