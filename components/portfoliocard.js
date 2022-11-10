import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/portfoliocard.module.css";

function Portfoliocard() {
        const [data, setData] = useState(null)
        const [isLoading, setLoading] = useState(false)
      
        useEffect(() => {
          setLoading(true)
          fetch('/api/portfolio-data')
            .then((res) => res.json())
            .then((data) => {
              setData(data)
              setLoading(false)
            })
        }, [])
      
        if (isLoading) 
            return (
                <p>Loading...</p>
            )
    
        if (!data) 
            return (
                <p>No portfolio data</p>
            )
      
        console.log(data.portfolio)
    
    
        return(
            <div className={styles.portfolio + " " + "container"}>    
                {data.portfolio.map(portfolio => (
                    <ul>
                        <li><img src={portfolio.img}/></li>
                        <li>{portfolio.date}</li>
                        <li>{portfolio.projectname}</li>
                        <li>{portfolio.url}</li>
                        <li>{portfolio.function}</li>
                    </ul>
                ))} 
            </div>
        )
    
    }
    
    export default Portfoliocard