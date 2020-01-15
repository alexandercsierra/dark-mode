import useLocalStorage from '../hooks/useLocalStorage'

const useForm = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const clearForm = e => {
        e.preventDefault();
        setValues({
            ...initialValues
        })
    }

    return [values, handleChanges, clearForm];
}

export default useForm