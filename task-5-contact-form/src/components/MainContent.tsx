import React from 'react'
import ContactForm from './ContactForm'

const MainContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"><ContactForm/></div>
                <div className="col-md-4"></div>
            </div>
        </div>

    )
}

export default MainContent