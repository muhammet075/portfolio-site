import { useState, useEffect } from "react";
import styles from "./styles/logolist.module.css";
import logodata from "../pages/json/logodata.json"

function togglePopup(e) {
    const input = e.target;
    input.nextSibling.classList.toggle("displayblock")
}

function closePopup(e) {
    const input = e.target;
    input.parentNode.classList.remove("displayblock")
}


function Logolist() {
    return( 
        <div>

            <div>
                <h2>Logos</h2>
                <div className={styles.logolist}>
                    {logodata.map(logodata => {
                        return(
                            <>
                                <section onClick={togglePopup}>
                                    <img src={logodata.img}/>
                                    <h3>{logodata.name}</h3>
                                </section>

                                <div className={styles.popup}>
                                    <button onClick={closePopup}><i class="fa-solid fa-xmark"></i></button>
                                    
                                    <section>
                                        <div>
                                            <img src={logodata.img}/>
                                        </div>
                                        <div>
                                            <h3>{logodata.name}</h3>
                                            <p>{logodata.description}</p>
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
  
    
    export default Logolist