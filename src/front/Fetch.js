import { useEffect, useState } from "react";

export const Fetch_productos = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch("https://3000-tomato-crawdad-x2e9x31d.ws-us17.gitpod.io/productos")
            .then( response =>{
                return response.json();
            })
            .then( data => {
                setState(data);
                console.log(data);
            })
    }, [])
    return state;
}

export const Fetch_usuarios = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch("https://3000-tomato-crawdad-x2e9x31d.ws-us17.gitpod.io/users")
            .then( response =>{
                return response.json();
            })
            .then( data => {
                setState(data);
                console.log(data);
            })
    }, [])
    return state;
}

export const Fetch_roles = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch("https://3000-tomato-crawdad-x2e9x31d.ws-us17.gitpod.io/role")
        .then(response=> {
            return response.json();
        })
        .then(data=> {
            setState(data);
            console.log(data);
        })
    }, [])
    return state
}