import './App.css';
import React, { useState} from "react";
import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";
import{createTheme, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  
  const darkTheme = createTheme({
    palette: {
       mode: "dark",
    },
  });

  const [validationPassed, setValidationPassed]=useState(false);
  const [validationFailed, setValidationFailed]=useState(false);

  return (
    <Router>
    <div className="App">
	     <ThemeProvider theme={darkTheme}>
	       <header className="App-header">
           <Switch>
  	         <Route path="/home">
               <HomeComponent />
	           </Route>
	           <Route path="/">
	             <LoginComponent data={{setValidationFailed, setValidationPassed, validationFailed, validationPassed}} />
             </Route>
            </Switch>
         </header>
	     </ThemeProvider>
    </div>
    </Router>
  );


}
export default App;
