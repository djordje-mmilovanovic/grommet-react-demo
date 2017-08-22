import React from "react";
//import ReactDOM from "react-dom";
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Clear from 'grommet/components/icons/base/Clear';
import '../css/Form.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        pass: false
      },
      lastName: {
        value: '',
        pass: false
      },
      email: {
        value: '',
        pass: false
      },
      address: {
        value: '',
        pass: false
      },
      phoneNumber: {
        value: '+386',
        pass: false
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  clearFields() {      // clears all except the last input
    this.setState({
      name: {
        value: '',
        pass: false
      },
      lastName: {
        value: '',
        pass: false
      },
      email: {
        value: '',
        pass: false
      },
      address: {
        value: '',
        pass: false
      },
      phoneNumber: {
        value: '+386',
        pass: false
      }
    });

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log('Target:' + target + '\nValue: ' + value + '\nName: ' + name);


    if(typeof value === 'string' && /^[a-zA-Z]+$/.test(value)) {
      this.setState({
        [name]:{
          value: value,
          pass: true
        }
      });
    } else {
      console.log('name is not valid');
    }

    if(typeof value === 'string' && /^[a-zA-Z]+$/.test(value)) {
      this.setState({
        [name]:{
          value: value,
          pass: true
        }
      });
    } else {
      console.log("Last Name not valid!");
    }

    if(this.validateEmail(value)) {
      this.setState({
        [name]:{
          value: value,
          pass: true
        }
      });
    } else {
      console.log("email not valid!");
    }

    if(/^[a-zA-Z0-9, ' ']+$/.test(value)) {
      this.setState({
        [name]:{
          value: value,
          pass: true
        }
      });
    } else {
      console.log("Address not valid!");
    }

    let phoneCheckSlovenian = '+386';
    if(value.substr(0, 4) == phoneCheckSlovenian && /^[0-9, '+']+$/.test(value)) {
      this.setState({
        [name]:{
          value: value,
          pass: true
        }
      });
    } else {
      console.log("Phone Number not valid!");
    }
  }

  validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  submitForm() {
    this.props.history.push('/Table');
  }

  render(){
    return(
      <div className='form-holder'>
        <Form>
          <FormField label='Name' id='nameField' className='input-field'>
            <TextInput placeHolder='Enter your Name' maxLength='20' name='name' value={this.state.name.value} onChange={this.handleInputChange} className='inputFields'/>
          </FormField>
          <FormField label='Last Name' className='input-field'>
            <TextInput  placeHolder='Enter your Last Name' maxLength='20' name='lastName' value={this.state.lastName.value} onChange={this.handleInputChange} className='inputFields'/>
          </FormField>
          <FormField label='Email' className='input-field'>
            <TextInput placeHolder='Enter your Email' maxLength='20' name='email' value={this.state.email.value} onChange={this.handleInputChange} className='inputFields'/>
          </FormField>
          <FormField label='Address' className='input-field'>
            <TextInput placeHolder='Enter your Addresss' maxLength='20' name='address' value={this.state.address.value} onChange={this.handleInputChange} className='inputFields'/>
          </FormField>
          <FormField label='Phone number' className='input-field'>
            <TextInput maxLength='20' name='phoneNumber' value={this.state.phoneNumber.value} onChange={this.handleInputChange} className='inputFields'/>
          </FormField>
          <Footer pad={{"vertical": "medium"}}>
            <Button label='Submit'
              className='btn-submit'
              onClick={this.submitForm.bind(this)}
            />
            <Button className='btn-clear' icon={<Clear />}
              label='Clear'
              onClick={this.clearFields.bind(this)}
            />
          </Footer>
        </Form>
      </div>
    );
  }
}
