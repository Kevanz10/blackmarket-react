import { useState, ChangeEvent, FC } from 'react';
import { useMutation } from '@apollo/client'
import { Row , Container } from 'react-bootstrap';
import { USER_LOGIN } from './utilities/mutations.jsx'
import { makeVar } from '@apollo/client';
import { formInputValues, userCredential, 
  userLoginData, userLoginVars
} from './utilities/data'

export const Login: FC = () => {

  const [inputValues, setInputValues] =  useState<formInputValues>(
    {email: '', password: ''}
  );

  const [ userLoginMutation, { data, loading, error } ] = useMutation< userLoginData, userLoginVars>(USER_LOGIN)

  const handleLogin =  () => {
    if( !inputValues.email || !inputValues.password) return;
    userLoginMutation({
      variables: {
        email: inputValues.email,
        password: inputValues.password
      }
    })
  }
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.value == undefined) return;
    setInputValues({
      ...inputValues,
      [event.target.type]: event.target.value
    })
  }

  if(data){
    localStorage.setItem('userCredentials', 
      data.userLogin.credentials.accessToken);
    localStorage.setItem('client', data.userLogin.credentials.client);
    localStorage.setItem('uuid', data.userLogin.credentials.uid);
  }

  return (
    <section className="vh-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  < input type="email"
                    className="form-control form-control-lg" 
                    onChange={handleChange} />
                  <label className="mt-2">Email</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" 
                    className="form-control form-control-lg" 
                     onChange={handleChange} />
                  <label className="mt-2">Password</label>
                </div>
                <hr className="my-4 mb-5"/>
                <button className="btn btn-primary btn-lg btn-block" 
                  onClick={ () => handleLogin() }>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}