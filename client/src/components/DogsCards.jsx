import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './css/DogsCards.module.css'
import perris from './../img/perris.jpg'
import { byId } from '../Redux/action'
import { useHistory } from 'react-router'
// width: ${dog.img.width}; 
// height: ${dog.img.height};
// -o-object-fit: cover;

const DogsCards = ({dog}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(byId(dog.id))
        history.push(`/main?name=${dog.name}`)
    }
    return (
        <div className={styles.cardDog} onClick={() => handleClick()} >
            <div className={styles.direction1}>
                {dog.img? <img className={styles.imgDog} src={dog.img.url} alt={dog.name}/>
                :<img className={styles.imgDog} src={perris} alt={dog.name}/>}
                <h4 className={styles.name}>{dog.name}</h4>
            </div>
            <div className={styles.direction2}>
                {/* <h5 className={styles.el}>Altura: {dog.height}</h5> */}
                <h5 className={styles.el}>Peso: {dog.weight}</h5>
                {dog.temperaments? <h5 className={styles.el}>Temperamentos:</h5> : <h5 className={styles.el}>Temperamentos desconocidos</h5>}
                {dog.temperaments && dog.temperaments.map(t => dog.id.length > 4? <h6 className={styles.temperament}>♥ {t.name}</h6>:<h6 className={styles.temperament}>♥ {t}</h6>)}
            </div>
        </div>
    )
}

export default DogsCards
