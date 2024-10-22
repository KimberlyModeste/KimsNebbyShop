import React from 'react'
import { Button, Card, Form } from 'semantic-ui-react'
import logoTemp from '../Resources/Nebula-temp-logo.png'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='login-container'>
    <div className='login'>
      <Card className='login-card'>
        <Card.Header>
          <div className='login-logo'>
            <img className="nebula-logo" src={logoTemp} alt="Nebula-Logo" />
          </div>
          <div className='login-welcome'>
            Welcome Back
          </div>
          <div className='login-welcome-desc'>
            Please enter your details to sign in.
          </div>
        </Card.Header>
        <Card.Content>
          <div>
            {/* This is the Google reset the API KEY after creating the .env files and stuff*/}
            Google Sign in
          </div>
          <div className="login-or">
            <div className='login-border'></div>
            <div className='login-border-or'> OR </div>
            <div className='login-border'></div>
          </div>
          <div>
            <Form>
              <Form.Field>
                <label className='login-field'>E-Mail Address</label>
                <input type="text" name="first-name" placeholder="Enter your email..." />
              </Form.Field>
              <Form.Field>
                <label className='login-field'>Password</label>
                <input type="password" name="password" placeholder="••••••••••" />
              </Form.Field>
              <Form.Field className='bottom-form'>
                <div className='remember-me'><input type='checkbox' className='remember' /> Remember me </div>
                <Link to="/forgot-password" className='login-links forgor'><u>Forgot Password?</u></Link>
              </Form.Field>
            </Form>
          </div>
          <div className='card-footer'>
            <Button className='login-form-button'>Sign In</Button>
            <div className='login-sign-up'>Don't have an account yet?<Link to="/sign-up" className='login-links'>Sign Up</Link></div>
          </div>
        </Card.Content>
      </Card>
    </div>
  </div>
  )
}

export default SignUp
