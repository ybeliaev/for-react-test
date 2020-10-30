import React from "react";

import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import {RouterTable} from "./RouterTable"
import {RouterCoupon} from "./RouterCoupon"

export const RouterContainer = () => {
    return(
        <Router>
            <div style={{minHeight: 400, width: "100%", backgroundColor: "Ivory", padding: 10}}>
            <nav >
                <ul style={{listStyle:"none"}}>
                    <li><Link to="/coupon">Coupon</Link></li>
                    <li><Link to="/table">Table</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <div>                
                <Route path="/coupon" component={RouterCoupon} />
                <Route path="/table" component={RouterTable} />
                
            </div>
            </div>
            
        </Router>
        
    )
}