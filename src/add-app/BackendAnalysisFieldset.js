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
              name="assemblyfoldername"
              hintText="Nombre carpeta assembly"
              floatingLabelText="Assembly"
            />
          </div>              
          <div className="form-group"
            style={styles.block}>
            <Checkbox
              name="archetyped"
              checkedIcon={CheckIcon}
              uncheckedIcon={XIcon}
              label="Utiliza arquetipo (modulos)"
              labelPosition="left"
              style={styles.checkbox}
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