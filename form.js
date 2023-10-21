import {
    form,
    eMail,
    form_Control,
    passWord,
    passWord2,
    userName,
  } from "./variables.js";
  
  import {
    validateEmailInputs,
    validatePassword2Inputs,
    validatePasswordInputs,
    validateUsernameInputs,
  } from "./validate.js";
  
  const validateForm = () => {
    
    // SUBMIT BUTTON RESPONSE
    form.addEventListener("submit", (e) => {
      // PREVENTING FORM SUBMISSION ON DEFAULT
      e.preventDefault();
  
      // VALIDATING ON SUBMIT
      validateUsernameInputs();
      validateEmailInputs();
      validatePasswordInputs();
      validatePassword2Inputs();
  
      let isValid = true;
  
      form_Control.forEach((element) => {
        console.log(element);
        if (element.classList.contains("error")) {
          isValid = false;
        }
      });
  
      console.log(isValid);
  
      if (isValid) {
        window.location.href = "login.html";
      }
    });
  
    // SETTING VALIDATION MESSAGE 2 SECONDS AFTER USER LEAVES INPUT BOX
    userName.addEventListener("change", (e) => {
      setTimeout(() => validateUsernameInputs(), 2000);
    });
  
    eMail.addEventListener("change", (e) => {
      setTimeout(() => validateEmailInputs(), 2000);
    });
  
    passWord.addEventListener("change", (e) => {
      setTimeout(() => validatePasswordInputs(), 2000);
    });
  
    passWord2.addEventListener("change", (e) => {
      setTimeout(() => validatePassword2Inputs(), 2000);
    });
  };
  
  validateForm();
  
 