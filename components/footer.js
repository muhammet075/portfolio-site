import Link from "next/link";
import styles from "./styles/footer.module.css";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className="container">
                <p>Footer</p>
            </div>
        </footer>
    )
  }
  
  export default Footer