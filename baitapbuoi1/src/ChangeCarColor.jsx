import React, { useState } from 'react'

const ChangeCarColor = () => {

    const [fImg, setFImg] = useState("/img/black-car.jpg")

    return (
        <div className='container'>
            <h3 className='text-center'>BÀI TẬP REACTJS BUỔI 1</h3>
            <div className="row mt-5">
                <div className="col-6">
                    <img className='w-100' src={fImg} alt="..." />
                </div>
                <div className="col-6 align-self-center">
                    <button style={{ background: 'red' }} className="btn mx-2 text-white" onClick={() => {
                        setFImg("/img/red-car.jpg")
                    }}>Red color</button>
                    <button style={{ background: 'gray' }} className="btn mx-2 text-white" onClick={() => {
                        setFImg("/img/silver-car.jpg")
                    }}>Gray color</button>
                    <button style={{ background: 'black' }} className="btn mx-2 text-white" onClick={() => {
                        setFImg("/img/black-car.jpg")
                    }}>Black color</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeCarColor