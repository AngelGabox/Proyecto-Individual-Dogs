import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styles from '../css/SearchBar.module.css'

const SearchBar = () => {
    const history = useHistory()
    const [ name, setName] = useState('')

    const handleOnClick = () => {
        history.push(`/main?name=${name}&from=0`)
        setName('')
    }
        
    return (
        <div className={styles.container}>
            <input className={styles.search} onChange={({target:{value}}) => setName(value)} value={name} type="text" placeholder='Shearch...' />
            <button className={styles.botone} onClick={handleOnClick}>Buscar Raza</button>        
        </div>
    )
}

export default SearchBar