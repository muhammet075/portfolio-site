import { useState, useEffect } from "react";
import styles from "./styles/websitelist.module.css";
import websitedata from "../pages/json/websitedata.json"

function togglePopup(e) {
    const input = e.target;
    input.nextSibling.classList.toggle("displayblock")
}

function closePopup(e) {
    const input = e.target;
    input.parentNode.classList.remove("displayblock")
}


function Websitelist() {
    return( 
        <div>

            <div>
                <h2>Websites</h2>
                <div className={styles.websitelist}>
                    {websitedata.map(websitedata => {
                        return(
                            <>
                                <section onClick={togglePopup}>
                                    <img src={websitedata.img}/>
                                    <h3>{websitedata.name}</h3>
                                </section>

                                <div className={styles.popup}>
                                    <button onClick={closePopup}><i class="fa-solid fa-xmark"></i></button>
                                    
                                    <section>
                                        <div>
                                            <img src={websitedata.img}/>
                                            <a target="_blank" href={websitedata.url}>Visit</a>
                                        </div>
                                        <div>
                                            <h3>{websitedata.name}</h3>
                                            <p>{websitedata.description}</p>
                                            <p>{websitedata.year} - {websitedata.techniques}</p>
                                        </div>
                                    </section>
                                    

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

      </div>
    )
  }
  
    
    export default Websitelist