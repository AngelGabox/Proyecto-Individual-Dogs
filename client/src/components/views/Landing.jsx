import React from 'react'
import { useHistory } from 'react-router';
import '../css/Landing.css'

const Landing = () => {
    const history = useHistory();
    const handleOnClick = () => history.push('/main?from=0')
    return (
        <div class='lan'> 
            <button class='btn third' onClick={handleOnClick}>Welcome to the paradise</button>
        </div>
    )
}

export default Landing
