import { useState } from 'react'
import React from 'react-dom'
import Backdrop from '../Backdrop/Backdrop'
import Modal from '../Modal/Modal'

const ShowModal = (props) => {

    const [showModal, setShowModal] = useState(true)

    return (
        <>
            {
                showModal
                && (
                    <>
                    {React.createPortal(<Backdrop />, document.getElementById('backdrop'))}
                    {React.createPortal(<Modal score={props.score}/>, document.getElementById('modal'))}
                    </>
                )
            }
        </>
    )
}

export default ShowModal