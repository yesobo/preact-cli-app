import { Component } from 'preact';

import TextField from 'material-ui/TextField';
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

export default class BackendAnalysisFieldset extends Component {

  constructor(props) {
    super(props);

    this.fields = [
      'assemblyfoldername',
      'archetyped',
      'newarchetype' ]

    this.fields.forEach( (fieldname) =>
      this.state[fieldname] = this.props.fieldValues[fieldname] || this.customInitialValue(fieldname))

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  customInitialValue(fieldsNameArr) {
    // Checkboxes to false, null the rest
    switch (fieldsNameArr) {
      case this.fields[1]:
        return false;
        break;
      case this.fields[2]:
        return false;
        break;
      default:
        return null;
    }
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

  previousStep(e) {
    e.preventDefault();

    this.props.previousStep();
  }


  render() {
    return <fieldset>
          {/* Text input*/}
          <div className="form-group">
            <TextField
              name={this.fields[0]}
              hintText="Nombre carpeta assembly"
              floatingLabelText="Assembly"
              onChange={this.handleInputChange}
            />
          </div>              
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name={this.fields[1]}
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="Utiliza arquetipo (modulos)"
              labelPosition="left"
              style={styles.checkbox}
              onCheck={this.handleInputChange}
            />
          </div>
          {/* Prepended checkbox */}
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name="newarchetype"
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="Arquetipo actual"
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
  }
}