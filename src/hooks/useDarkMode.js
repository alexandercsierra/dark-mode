import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react'

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('darkMode');

    useEffect (()=>{
        someValue ? document.querySelector("body").classList.add("dark-mode") : document.querySelector("body").classList.remove("dark-mode")
    },[someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode