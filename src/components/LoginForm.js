import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import LazyImage from './LazyImage';
import Google from '../assets/images/google.png';
import Facebook from '../assets/images/facebook.png';
import LinkedIn from '../assets/images/linkedin.png';
import Twitter from '../assets/images/twitter.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      navigate('/home')
    }
  };
  return (
    <div className='LoginForm_Container'>
      <div className='LoginForm_Container_Header'>
        <p className='LoginForm_Container_Header_Title'>Sign In</p>
        <p className='LoginForm_Container_Header_SubTitle'>New user? <span>Create an account</span></p>
      </div>
      <div className='LoginForm_Container_Body'>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Username or email" required />
            <Form.Control.Feedback type="invalid">Username or email Required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Control size="lg" type="text" placeholder="Password" required pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"  />
            <Form.Control.Feedback type="invalid">Password must be minimum 8 characters long (consist of atleast 1 Capital letter, 1 number & 1 symbol)</Form.Control.Feedback>
          </Form.Group>
          <Form.Check inline label="Keep me signed in" type='checkbox' />
          <Button type="submit">Sign In</Button>
        </Form>
      </div>
      <div class="separator">
        <span>Or Sign In With</span>
      </div>
      <div className='LoginForm_Container_Footer'>
        <LazyImage src={Google} alt="Google" className="socialIcon" />
        <LazyImage src={Facebook} alt="Facebook" className="socialIcon" />
        <LazyImage src={LinkedIn} alt="LinkedIn" className="socialIcon" />
        <LazyImage src={Twitter} alt="Twitter" className="socialIcon" />
      </div>
    </div>
  )
}

export default LoginForm