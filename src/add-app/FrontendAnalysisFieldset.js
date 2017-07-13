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

    this.fields = [ 'buildtools', 
      'deptools',
      'versioned' ]

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
            name="buildtools"
            multiple={true}
            hintText="Build tools"
            value={this.state.buildtools}
            onChange={this.handleBuildToolChange}
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
            name="deptools"
            multiple={true}
            hintText="Gestor de dependencias"
            value={this.state.depTools}
            onChange={this.handleDepToolChange}
          >
            <MenuItem value='npm' primaryText="Npm" />
            <MenuItem value='bower' primaryText="Bower" />
            <MenuItem value='yarn' primaryText="Yarn" />
          </SelectField>
        </div>
        {/* Prepended checkbox */}
        <div className="form-group"
          style={styles.block}>
          <Checkbox
            name="versioned"
            checkedIcon={CheckIcon}
            uncheckedIcon={XIcon}
            label="Versiona"
            labelPosition="left"
            style={styles.checkbox}
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