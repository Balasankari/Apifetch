// import { setError, setSuccess } from "./error.js";

import {
    validateEmailLogin,
    validatePasswordLogin,
    validateBoth,
  } from "./validate.js";
  
  
  form.addEventListener("submit", (e) => {
    
    e.preventDefault();
  
    validateEmailLogin();
    validatePasswordLogin();
    validateBoth();
  });
 
  