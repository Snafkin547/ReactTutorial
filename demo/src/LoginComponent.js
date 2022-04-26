import React, { useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom"

export default function LoginComponent(props) {
    const history=useHistory();    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function validation() {
        if (username === 'hishii' && password === 'buspark!'){
            props.data.setValidationPassed(true);
            props.data.setValidationFailed(false);
                console.log('validated');
                history.push('home');
                return;
            }
            console.log('validation failed');
            props.data.setValidationPassed(false);
            props.data.setValidationFailed(true);
        }
    

    return (
        <div>
           <h3>Log In Form</h3>
           <TextField sx={{ m: 1, width: "25ch"}} id="outlined-basic" 
                label="username" variant="outlined" onChange={ (e) => setUsername(e.target.value)}/>
           <TextField sx={{ m: 1, width: "25ch"}} id="outlined-basic" 
                label="password" variant="outlined" onChange={ (e) => setPassword(e.target.value)}/>
           <Button variant="outlined" onClick={validation}>Log In</Button>
            {
                props.data.validationPassed  ? (
                        <div>
                            <h5> Validation Passed</h5>
                        </div>
                ) : props.data.validationFailed  ? (
                        <div>
                            <h5> Validation Failed</h5>
                        </div>
                ) : (
                        <div>
                            <h5> Enter Data</h5>
                        </div>
                    )
                }
        </div>
    )
}

