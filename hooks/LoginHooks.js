import {useState} from 'react';


const useLoginForm = () => {
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
  return {
    handleUsernameChange,
    handlePasswordChange,
    inputs,
  };
};

export default useLoginForm;
