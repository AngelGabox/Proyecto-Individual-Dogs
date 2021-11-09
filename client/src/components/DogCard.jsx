import React from 'react'
import styles from './css/DogsCard.module.css'
import perris from '../img/perris.jpg'

const DogCard = ({dog}) => {
    const width = dog.img? dog.img.width : 0 
    const height = dog.img? dog.img.height : 0
    return (
        <div className={styles.cardDog} >
            <div className={styles.direction1}>
                {dog.img? 
                    width === height?
                        <img className={styles.imgNormal} src={dog.img.url} alt={dog.name} />
                    :width > height ? 
                        <img className={styles.imgDog} src={dog.img.url} alt={dog.name}/> 
                        :<img className={styles.imgAlta} src={dog.img.url} alt={dog.name} />                  
                    :<img className={styles.imgDog} src={perris} alt={dog.name}/>
                }
                <h4 className={styles.name}>{dog.name}</h4>
            </div>
            <div className={styles.direction2}>
                <h5 className={styles.el}>Altura: {dog.height}</h5>
                <h5 className={styles.el}>Peso: {dog.weight}</h5>
                {dog.temperaments? <h5 className={styles.el}>Temperamentos:</h5> : <h5 className={styles.el}>Temperamentos desconocidos</h5>}
                {dog.temperaments && dog.temperaments.map(t => dog.id.length > 4? <h6 className={styles.temperament}>♥ {t.name}</h6>:<h6 className={styles.temperament}>♥ {t}</h6>)}
                <h5 className={styles.el}>Esperanza de Vida: </h5>
                <h6  className={styles.el}>{dog.age}</h6>
            </div>
        </div>
    )
}

export default DogCard