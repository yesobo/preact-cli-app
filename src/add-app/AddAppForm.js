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
      buildTools: [],
      depTools: []
    }

    this.fieldValues = {};

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.saveValues = this.saveValues.bind(this);
  }

  saveValues(fields) {
    console.log(`Values previous assignment is ${JSON.stringify(this.fieldValues)}`)
    this.fieldValues = Object.assign({}, this.fieldValues, fields)
    console.log(`Values updated to ${JSON.stringify(this.fieldValues)}`)
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
          <ProjectFieldset fieldValues={this.fieldValues}
                                  nextStep={this.nextStep}
                                  saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Stash repository</StepLabel>
        <StepContent>
          <RepoFieldset fieldValues={this.fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Stash Analysis</StepLabel>
        <StepContent>
          <StashAnalysisFieldset fieldValues={this.fieldValues}
                                        nextStep={this.nextStep}
                                        previousStep={this.previousStep}
                                        saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Backend Analysis</StepLabel>
        <StepContent>
          <BackendAnalysisFieldset fieldValues={this.fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Frontend Analysis</StepLabel>
        <StepContent>
          <FrontendAnalysisFieldset fieldValues={this.fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Ultimo paso</StepLabel>
        <StepContent>
          <LastStep fieldValues={this.fieldValues}
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