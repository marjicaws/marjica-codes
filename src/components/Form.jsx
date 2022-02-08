import React from 'react';
import { useForm } from '@formcarry/react';
import "./Form.css"
 
export default function MyFormcarry() {
  // Call the `useForm` hook in your function component
  const {state, submit} = useForm({
    id: '-j8NFhnuiCv'
  });
 
  // Success message
  if (state.submitted) {
    return <div>Thank you! I have received your submission.</div>;
  }
 
  return (
    <div className='form-page'>
    <h1 className='form-page-title'>Contact Me</h1>
    <form className="form" onSubmit={submit}>
      <div className='form-inputs'>
        <div className='form-email'>
        <label className="form-email-input-label"htmlFor="email">Email</label>
        <input className="form-email-input" id="email" placeholder="Email" type="email" name="email"/><br></br>
        </div>
        <div className='form-message'>
        <label className="form-message-input-label"htmlFor="message">Message</label>
        <textarea className="form-message-input" rows="6" cols="50" id="message" placeholder='Write Something Here...' name="message"/><br></br>
        </div>
        <button className="form-input-button" type="submit">Send</button>
        </div>
    </form>
    </div>
  );
}
