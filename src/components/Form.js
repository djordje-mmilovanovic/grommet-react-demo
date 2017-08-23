import React from 'react';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Clear from 'grommet/components/icons/base/Clear';
import '../css/Form.css';

export default class MyForm extends React.Component {
  static initialState = {
    name: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '+386',
    validationErrors: {}
  };

  constructor(props) {
    super(props);

    this.state = { ...MyForm.initialState };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  clearFields() {
    this.setState({ ...MyForm.initialState });
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  submitForm() {
    const validationErrors = this.validateForm();
    const isFormValid = Object.keys(validationErrors).length === 0;

    if (isFormValid) {
      this.props.history.push('/Table');
    } else {
      this.setState({ validationErrors });
    }
  }

  validateForm() {
    return {
      ...this.validateStringFields(),
      ...this.validateEmail(),
      ...this.validatePhoneNumber(),
      ...this.validateAddress(),
    };
  }

  validateStringFields() {
    const validationErrors = {};
    const containsANumber = /[0-9]/;

    if (containsANumber.test(this.state.name) || this.state.name === '') {
      validationErrors.name = 'Name must not contain a number or be empty';
    }

    if (containsANumber.test(this.state.lastName) || this.state.lastName === '') {
      validationErrors.lastName = 'Last name must not contain a number or be empty';
    }
    return validationErrors;
  }

  validateAddress() {
    const validationErrors = {};
    const addressFormat = /[a-zA-Z]\d/;

    if (addressFormat.test(this.state.address) || this.state.address === '') {
      validationErrors.address = 'Address must contain street name and number and can\'t be empty';
    }
    return validationErrors;
  }

  validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.email)) {
      return {
        email: 'The email is not valid'
      };
    }
  }

  validatePhoneNumber() {
    const validationErrors = {};
    const containsALetters = /[a-zA-Z]/;

    if (containsALetters.test(this.state.phoneNumber)) {
      validationErrors.phoneNumber = 'Phone number must contain only numbers';
    }
    return validationErrors;
  }

  render() {
    return (
      <div className="form-holder">
        <Form>
          <FormField
            label="Name"
            error={this.state.validationErrors.name}
            className="input-field"
          >
            <TextInput
              placeHolder="Enter your Name"
              maxLength="20"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="inputFields"
            />
          </FormField>
          <FormField
            label="Last Name"
            error={this.state.validationErrors.lastName}
            className="input-field"
          >
            <TextInput
              placeHolder="Enter your Last Name"
              maxLength="20"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              className="inputFields"
            />
          </FormField>
          <FormField
            label="Email"
            error={this.state.validationErrors.email}
            className="input-field"
          >
            <TextInput
              placeHolder="Enter your Email"
              maxLength="20"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="inputFields"
            />
          </FormField>
          <FormField
            label="Address"
            error={this.state.validationErrors.address}
            className="input-field"
          >
            <TextInput
              placeHolder="Enter your Addresss"
              maxLength="20"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              className="inputFields"
            />
          </FormField>
          <FormField
            label="Phone number"
            error={this.state.validationErrors.phoneNumber}
            className="input-field"
          >
            <TextInput
              maxLength="20"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              className="inputFields"
            />
          </FormField>
          <Footer pad={{ vertical: 'medium' }}>
            <Button
              label="Submit"
              className="btn-submit"
              onClick={this.submitForm}
            />
            <Button
              className="btn-clear"
              icon={<Clear />}
              label="Clear"
              onClick={this.clearFields}
            />
          </Footer>
        </Form>
      </div>
    );
  }
}
