import {useState} from 'react';


const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const handleUsernameChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
  };
  const handlePasswordChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };
  const handlePasswordAgainChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        passwordAgain: text,
      }));
  };
  const handleEmailChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        email: text,
      }));
  };
  return {
    handleUsernameChange,
    handlePasswordChange,
    handlePasswordAgainChange,
    handleEmailChange,
    inputs,
  };
};

export default useSignUpForm;
