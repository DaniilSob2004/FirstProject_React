import React from 'react'
import './MyCity.css';

function MyCity() {
    return (
        <section className="section">
            <h2>My city info</h2>
            <div>
                <span>City: Odessa</span>
            </div>
            <div>
                <span>Country: Ukraine</span>
            </div>
            <div>
                <span>Year of foundation: 1974</span>
            </div>
            <div>
                <div className="imgBlock">
                    <p>Opera</p>
                    <img className="img" src="/images/opera.jpg" alt="opera" />
                </div>
                <div className="imgBlock">
                    <p>Sea</p>
                    <img className="img" src="/images/sea.jpg" alt="sea" />
                </div>
            </div>
        </section>
    )
}

export default MyCity
