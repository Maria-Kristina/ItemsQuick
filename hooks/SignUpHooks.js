import {useState} from 'react';


const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const handleUsernameChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
      console.log('SignUp username: ', text);
  };
  const handlePasswordChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
      console.log('SignUp password: ', text);
  };
  const handleEmailChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        email: text,
      }));
      console.log('SignUp email: ', text);
  };
  return {
    handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    inputs,
  };
};

export default useSignUpForm;
