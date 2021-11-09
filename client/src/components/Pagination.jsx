import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './css/Pagination.module.css'

const Pagination = ({dogs}) => {
    const query = new URLSearchParams(useLocation().search.slice(1))
    const history = useHistory()
    const name = query.get('name')
    const from = query.get('from')
    const arr = Array(Math.ceil(dogs.length/8)).fill(0).map((el, index)=> index)
    const ind = from/8 +1
    return ( 
    <div id={styles.contain}>
        <div className={styles.container}>   
        {from/8 > 2?<button className={styles.flecha1} onClick={()=> history.push(`/main?name=${name?name:''}&from=${parseInt(from)-8}`)}>{'←'}</button>:null}
        {
            arr.length > 1 && arr.map(el =>
                <button className={from && ind-1===el?styles.select:styles.number} key={el} onClick={()=> history.push(`/main?name=${name?name:''}&from=${el*8}`)}>{el + 1}</button>
                ).slice(from/8<2? 0 : from/8 -2, from/8 + 3)
        }
        {from/8<arr.length-3?<button className={styles.flecha2} onClick={()=> history.push(`/main?name=${name?name:''}&from=${parseInt(from? from: -8)+8}`)}>{'→'}</button>:null}
        </div>
    </div>         
    )
}

export default Pagination
