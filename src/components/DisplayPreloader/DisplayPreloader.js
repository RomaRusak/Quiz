import React from 'react-dom'
import Backdrop from '../Backdrop/Backdrop'
import Preloader from '../../UI/Preloader/Preloader'

const DisplayPreloader = (props) => {

    return (
        <>
        {React.createPortal(<Backdrop />, document.getElementById('backdrop'))}
        {React.createPortal(<Preloader />, document.getElementById('preloader'))}
        </>
    )
}

export default DisplayPreloader