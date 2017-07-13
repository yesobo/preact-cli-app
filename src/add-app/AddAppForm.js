import React, { Component } from 'react';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

import ProjectFieldset from './ProjectFieldset';
import RepoFieldset from './RepoFieldset';
import StashAnalysisFieldset from './StashAnalysisFieldset';
import BackendAnalysisFieldset from './BackendAnalysisFieldset';
import FrontendAnalysisFieldset from './FrontendAnalysisFieldset';
import LastStep from './LastStep';

let fieldValues = {};

export default class AddAppForm extends Component {

  constructor() {
    super();
    this.state = { 
      step: 0,
      repotype: '',
      buildTools: [],
      depTools: []
    }

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  handleChange(event, index, value) { this.setState({repotype: value}) };
  handleBuildToolChange(event, index, value) {this.setState({buildTools: value})};
  handleDepToolChange(event, index, value) {this.setState({depTools: value})};

  saveValues(fields) {
    return function() {
      fieldValues = Object.assign({}, fieldValues, fields)
    }()
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    })
  }

  // Same as nextStep, but decrementing
  previousStep() {
    this.setState({
      step : this.state.step - 1
    })
  }

  render() {
    return (<Stepper activeStep={this.state.step} orientation="vertical">
      <Step>
        <StepLabel>Stash project</StepLabel>
        <StepContent>
          <ProjectFieldset fieldValues={fieldValues}
                                  nextStep={this.nextStep}
                                  saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Stash repository</StepLabel>
        <StepContent>
          <RepoFieldset fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Stash Analysis</StepLabel>
        <StepContent>
          <StashAnalysisFieldset fieldValues={fieldValues}
                                        nextStep={this.nextStep}
                                        previousStep={this.previousStep}
                                        saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Backend Analysis</StepLabel>
        <StepContent>
          <BackendAnalysisFieldset fieldValues={fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Frontend Analysis</StepLabel>
        <StepContent>
          <FrontendAnalysisFieldset fieldValues={fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Ultimo paso</StepLabel>
        <StepContent>
          <LastStep fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues}/>
        </StepContent>
      </Step>
    </Stepper>)

    /*return (
      <form className="form-horizontal">
      </form>
    );*/
  }
}