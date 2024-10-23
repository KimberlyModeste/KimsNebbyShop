import React from 'react'
import { Button, Card, Dropdown, Form } from 'semantic-ui-react'
import logoTemp from '../Resources/Nebula-temp-logo.png'
import { Link } from 'react-router-dom'
import Progress from '../Components/Progress'
import { Options } from '../Models/Options'


const signup = () => {
  const options : Options[] = [
    {
      key: "AL",
      text: "Alabama",
      value: "Alabama",
      content: "Alabama"
    }, 
    {
      key: "AK",
      text: "Alaska",
      value: "Alaska",
      content: "Alaska"
    },
    {
      key: "AZ",
      text: "Arizona",
      value: "Arizona",
      content: "Arizona"
    },
    {
      key: "AR",
      text: "Arkansas",
      value: "Arkansas",
      content: "Arkansas"
    },
    {
      key: "CA",
      text: "California",
      value: "California",
      content: "California"
    },
    {
      key: "CO",
      text: "Colorado",
      value: "Colorado",
      content: "Colorado"
    },
    {
      key: "CT",
      text: "Connecticut",
      value: "Connecticut",
      content: "Connecticut"
    },
    {
      key: "DC",
      text: "District of Columbia",
      value: "District of Columbia",
      content: "District of Columbia"
    },
    {
      key: "DE",
      text: "Delaware",
      value: "Delaware",
      content: "Delaware"
    },
    {
      key: "FL",
      text: "Florida",
      value: "Florida",
      content: "Florida"
    },
    {
      key: "GA",
      text: "Georgia",
      value: "Georgia",
      content: "Georgia"
    },
    {
      key: "HI",
      text: "Hawaii",
      value: "Hawaii",
      content: "Hawaii"
    },
    {
      key: "ID",
      text: "Idaho",
      value: "Idaho",
      content: "Idaho"
    },
    {
      key: "IL",
      text: "Illinois",
      value: "Illinois",
      content: "Illinois"
    },
    {
      key: "IN",
      text: "Indiana",
      value: "Indiana",
      content: "Indiana"
    },
    {
      key: "IA",
      text: "Iowa",
      value: "Iowa",
      content: "Iowa"
    },
    {
      key: "KS",
      text: "Kansas",
      value: "Kansas",
      content: "Kansas"
    },
    {
      key: "KY",
      text: "Kentucky",
      value: "Kentucky",
      content: "Kentucky"
    },
    {
      key: "LA",
      text: "Louisiana",
      value: "Louisiana",
      content: "Louisiana"
    },
    {
      key: "ME",
      text: "Maine",
      value: "Maine",
      content: "Maine"
    },
    {
      key: "MD",
      text: "Maryland",
      value: "Maryland",
      content: "Maryland"
    },
    {
      key: "MA",
      text: "Massachusetts",
      value: "Massachusetts",
      content: "Massachusetts"
    },
    {
      key: "MI",
      text: "Michigan",
      value: "Michigan",
      content: "Michigan"
    },
    {
      key: "MN",
      text: "Minnesota",
      value: "Minnesota",
      content: "Minnesota"
    },
    {
      key: "MS",
      text: "Mississippi",
      value: "Mississippi",
      content: "Mississippi"
    },
    {
      key: "MO",
      text: "Missouri",
      value: "Missouri",
      content: "Missouri"
    },
    {
      key: "MT",
      text: "Montana",
      value: "Montana",
      content: "Montana"
    },
    {
      key: "NE",
      text: "Nebraska",
      value: "Nebraska",
      content: "Nebraska"
    },
    {
      key: "NV",
      text: "Nevada",
      value: "Nevada",
      content: "Nevada"
    },
    {
      key: "NH",
      text: "New Hampshire",
      value: "New Hampshire",
      content: "New Hampshire"
    },
    {
      key: "NJ",
      text: "New Jersey",
      value: "New Jersey",
      content: "New Jersey"
    },
    {
      key: "NM",
      text: "New Mexico",
      value: "New Mexico",
      content: "New Mexico"
    },
    {
      key: "NY",
      text: "New York",
      value: "New York",
      content: "New York"
    },
    {
      key: "NC",
      text: "North Carolina",
      value: "North Carolina",
      content: "North Carolina"
    },
    {
      key: "ND",
      text: "North Dakota",
      value: "North Dakota",
      content: "North Dakota"
    },
    {
      key: "OH",
      text: "Ohio",
      value: "Ohio",
      content: "Ohio"
    },
    {
      key: "OK",
      text: "Oklahoma",
      value: "Oklahoma",
      content: "Oklahoma"
    },
    {
      key: "OR",
      text: "Oregon",
      value: "Oregon",
      content: "Oregon"
    },
    {
      key: "PA",
      text: "Pennsylvania",
      value: "Pennsylvania",
      content: "Pennsylvania"
    },
    {
      key: "RI",
      text: "Rhode Island",
      value: "Rhode Island",
      content: "Rhode Island"
    },
    {
      key: "SC",
      text: "South Carolina",
      value: "South Carolina",
      content: "South Carolina"
    },
    {
      key: "SD",
      text: "South Dakota",
      value: "South Dakota",
      content: "South Dakota"
    },
    {
      key: "TN",
      text: "Tennessee",
      value: "Tennessee",
      content: "Tennessee"
    },
    {
      key: "TX",
      text: "Texas",
      value: "Texas",
      content: "Texas"
    },
    {
      key: "UT",
      text: "Utah",
      value: "Utah",
      content: "Utah"
    },
    {
      key: "VT",
      text: "Vermont",
      value: "Vermont",
      content: "Vermont"
    },
    {
      key: "VA",
      text: "Virginia",
      value: "Virginia",
      content: "Virginia"
    },
    {
      key: "WA",
      text: "Washington",
      value: "Washington",
      content: "Washington"
    },
    {
      key: "WV",
      text: "West Virginia",
      value: "West Virginia",
      content: "West Virginia"
    },
    {
      key: "WI",
      text: "Wisconsin",
      value: "Wisconsin",
      content: "Wisconsin"
    },
    {
      key: "WY",
      text: "Wyoming",
      value: "Wyoming",
      content: "Wyoming"
    },

]


  const content : React.JSX.Element[] = [
    ( 
      <div>
        <div className='title'>Basic Information: </div>
        <Form>
          <Form.Field>
            <label className='signup-field'>First Name</label>
            <input type="text" name="text" placeholder="Enter first name"  required />
          </Form.Field>
          <Form.Field>
            <label className='signup-field'>Last Name</label>
            <input type="text" name="text" placeholder="Enter last name"  required />
          </Form.Field>
          <Form.Field>
            <label className='signup-field'>E-mail</label>
            <input type="text" name="text" placeholder="Enter email"  required />
          </Form.Field>
        </Form>
      </div>
    ),
    (
      <div>
        <div className='title'>Address Information: </div>
        <Form>
          <Form.Field>
            <label className='signup-field'>Street</label>
            <input type="text" name="text" placeholder="Street"  />
          </Form.Field>
          
          <Form.Field>
            <label className='signup-field'>City </label>
            <input type="text" name="text" placeholder="City" />
          </Form.Field>
          <div className='state-zip'>
          <Form.Field className='state'>
            <label className='signup-field'>State</label>
            <Dropdown 
              selection
              fluid
              allowAdditions
              // upward={false}
              options={options} 
              defaultValue={options ? options[0].value : 1}
            />
          </Form.Field>
          <Form.Field className='zip'>
            <label className='signup-field'>Zipcode </label>
            <input type="text" name="text" placeholder="Zipcode" />
          </Form.Field>
          </div>
        </Form>
      </div>
    ), 
    (
      <div>
        <div className='title'>Credit Card Information: </div>
        <Form>
          <Form.Field>
            <label className='signup-field'>Card Number</label>
            <input type="text" name="number" placeholder="Card Number"  pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"/>   
          </Form.Field>
          <Form.Field>
            <label className='signup-field'>Cardholder Name</label>
            <input type="text" name="text" placeholder="Name"   />
          </Form.Field>
          <div className='exp-cvc'>
            <Form.Field className='exp'>
              <label className='signup-field'>Expiry Date</label>
              <input type="date" name="text" />
            </Form.Field>
            <Form.Field className='cvc'>
              <label className='signup-field'>CVC</label>
              <input type="tel" name="text"  pattern="[0-9]{3}" />
            </Form.Field>
          </div>
        </Form>
      </div>
    ), 
    (
      <div>
        <Form>
          <Form.Field>
            <label className='signup-field'>E-Mail Address</label>
            <input type="text" name="first-name" placeholder="Enter your email..." />
          </Form.Field>
          <Form.Field>
            <label className='signup-field'>Password</label>
            <input type="password" name="password" placeholder="••••••••••" />
          </Form.Field>
          <Form.Field>
            <label className='signup-field'>Confirm Password</label>
            <input type="password" name="password" placeholder="••••••••••" />
          </Form.Field>
        </Form>
      </div>
    )]
  
  
  
  return (
    // <div className='signup-container'>
    //   <div className='signup'>
    //     <Card className='signup-card'>
    //       <Card.Header>
    //         <div className='signup-logo'>
    //           <img className="nebula-logo" src={logoTemp} alt="Nebula-Logo" />
    //         </div>
    //         <div className='signup-welcome'>
    //           Sign Up
    //         </div>
    //         <div className='signup-welcome-desc'>
    //           Please enter your details to sign in.
    //         </div>
    //       </Card.Header>
    //       <Card.Content>
    //         <div>
    //           <Form>
    //             <Form.Field>
    //               <label className='signup-field'>E-Mail Address</label>
    //               <input type="text" name="first-name" placeholder="Enter your email..." />
    //             </Form.Field>
    //             <Form.Field>
    //               <label className='signup-field'>Password</label>
    //               <input type="password" name="password" placeholder="••••••••••" />
    //             </Form.Field>
    //             <Form.Field className='bottom-form'>
    //               <div className='remember-me'><input type='checkbox' className='remember' /> Remember me </div>
    //               <Link to="/forgot-password" className='signup-links forgor'><u>Forgot Password?</u></Link>
    //             </Form.Field>
    //           </Form>
    //         </div>
    //         <div className='card-footer'>
    //           <Button className='signup-form-button'>Sign In</Button>
    //           <div className='login-sign-up'>Don't have an account yet?<Link to="/sign-up" className='signup-links'>Sign Up</Link></div>
    //         </div>
    //         <div className="signup-or">
    //           <div className='signup-border'></div>
    //           <div className='signup-border-or'> OR </div>
    //           <div className='signup-border'></div>
    //         </div>
    //         <div>
    //           {/* This is the Google reset the API KEY after creating the .env files and stuff*/}
    //           Google Sign in
    //         </div>
    //       </Card.Content>
    //     </Card>
    //   </div>
    // </div>

    <div className='signup-container'>
      <div className='signup' >
        <Card className='signup-card'>
          <Card.Header>
            <div className='signup-logo'>
              <img className="nebula-logo" src={logoTemp} alt="Nebula-Logo" />
            </div>
              <div className='signup-welcome'>
                Sign Up
              </div>
              <Progress totalSteps={content.length} content={content}/>
          </Card.Header>
        </Card>
      </div>
    </div>
  )
}

export default signup
