import { useEffect, useState } from 'react'
const Hello = () => {

const [ data , setdata ] = useState([{}]);

    useEffect(() => {
        fetch("/api").then(
            res => res.json()
        ).then(
            data => {
                setdata(data)
            }
        )
    }, [])
    return <h1>Hello</h1>
}

export default Hello