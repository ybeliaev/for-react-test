import React from "react"
import logo from "../assets/imges/hamburger.jpg"


export const RouterCoupon = () => {
    return(
    <div className={"coupon"}>
        <div className={"container"}>
            <h3>Company Logo</h3>
        </div>
        <img src={logo} alt="Avatar" style={{width:"100%"}} />
        <div className="container" style={{backgroundColor:'white'}}>
            <h2><b>20% OFF YOUR PURCHASE</b></h2> 
            <p>Testy burger yam-yam..</p>
        </div>
        <div className="container">
            <p>Use Promo Code: <span className={"promo"}>BOH232</span></p>
            <p className={"expire"}>Expires: Jan 03, 2021</p>
        </div>
    </div>
    )
}
