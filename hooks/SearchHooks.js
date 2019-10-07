import {useState} from 'react';

const useSearchForm = () => {
    const [inputs, setInputs] = useState({});
    const handleSearchChange = (text) => {
        setInputs((inputs) =>
        ({
            ...inputs,
            search: text,
        }));
        console.log(text);   
    };
    return {
            handleSearchChange,
            inputs,
        };
};

export default useSearchForm;