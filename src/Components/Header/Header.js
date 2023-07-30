import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [images1, setImages1] = useState([])
    return (
        <div>
            <div style={{ width: '10%', height: "200px", display: "flex", justifyContent: "center", alignItems: 'center', border: "1px solid", fontSize: '2vw' }}>
                <span onClick={() => {
                    setOpen(!open)
                }}>+</span>
            </div>
            {open ? <Modal setOpen={setOpen} images1={images1} setImages1={setImages1} /> : null}
            {
                images1.map((val) => {
                    return (
                        <div key={Math.random()}>
                            <img src={val[0]['data_url']} width='300px' height='300px' />
                            <span>{val.value}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Header;