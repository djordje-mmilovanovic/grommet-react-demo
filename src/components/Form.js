import React from "react";
//import ReactDOM from "react-dom";
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';

import Clear from 'grommet/components/icons/base/Clear';


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Djordje";

    //this.submitForm = this.submitForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  // handleChange(e) {
  //   const firstName = e.target.value;
  //   this.props.changeFirstName(firstName);
  // }

  clearFields() {      // clears all except the last input
    var elements = document.getElementsByClassName('inputFields');
    for(var i=0; i<elements.length - 1; i++) {
      elements[i].value = '';
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  submitForm() {
    // console.log('form submited');

    var formObj = {
        nameValue: document.getElementById('nameField').value,
        namePass: false,
        lastNameValue: document.getElementById('lastNameField').value,
        lastNamePass: false,
        emailValue: document.getElementById('emailField').value,
        emailPass: false,
        addressValue: document.getElementById('addressField').value,
        addressPass: false,
        phoneNumberValue: document.getElementById('phoneNumberField').value,
        phoneNumberPass: false
    };

    formObj.nameValue = formObj.nameValue.trim();
    formObj.lastNameValue = formObj.lastNameValue.trim();
    formObj.emailValue = formObj.emailValue.trim();
    formObj.addressValue = formObj.addressValue.trim();
    formObj.phoneNumberValue = formObj.phoneNumberValue.trim();

    if(typeof formObj.nameValue === 'string' && /^[a-zA-Z]+$/.test(formObj.nameValue)) {
      formObj.namePass = true;
    } else {
      alert("Name not valid!");
    }

    if(typeof formObj.lastNameValue === 'string' && /^[a-zA-Z]+$/.test(formObj.lastNameValue)) {
      formObj.lastNamePass = true;
    } else {
      alert("Last Name not valid!");
    }

    if(this.validateEmail(formObj.emailValue)) {
      formObj.emailPass = true;
    } else {
      alert("email not valid!");
    }

    if(/^[a-zA-Z0-9, ' ']+$/.test(formObj.addressValue)) {
      formObj.addressPass = true;
    } else {
      alert("Address not valid!");
    }

    var phoneCheckSlovenian = '+386';

    if(formObj.phoneNumberValue.substr(0, 4) == phoneCheckSlovenian && /^[0-9, '+']+$/.test(formObj.phoneNumberValue)) {
      formObj.phoneNumberPass = true;
    } else {
      alert("Phone Number not valid!");
    }

    if(formObj.namePass === true && formObj.lastNamePass === true && formObj.emailPass === true && formObj.addressPass === true && formObj.phoneNumberPass === true) {
      this.props.history.push('/Table');
    }
  }

  render(){
    return(
      <Form>
        <FormField label='Name' className='input-field'>
          <TextInput placeHolder='Enter your Name' maxLength='20' id='nameField' className='inputFields'/>
        </FormField>
        <FormField label='Last Name' className='input-field'>
          <TextInput placeHolder='Enter your Last Name' maxLength='20' id='lastNameField' className='inputFields'/>
        </FormField>
        <FormField label='Email' className='input-field'>
          <TextInput placeHolder='Enter your Email' maxLength='20' id='emailField' className='inputFields'/>
        </FormField>
        <FormField label='Address' className='input-field'>
          <TextInput placeHolder='Enter your Addresss' maxLength='20' id='addressField' className='inputFields'/>
        </FormField>
        <FormField label='Phone number' className='input-field'>
          <TextInput defaultValue='+386'  maxLength='20' id='phoneNumberField' className='inputFields'/>
        </FormField>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Submit'
            primary={true}
            onClick={this.submitForm.bind(this)}
          />
          <Button className='btn-clear' icon={<Clear />}
            label='Clear'
            onClick={this.clearFields.bind(this)}
          />
        </Footer>
      </Form>

    );
  }
}
