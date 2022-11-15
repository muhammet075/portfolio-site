import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/images/vercel.svg";
import styles from "./styles/header.module.css"

function Header() {
    return(
        <>
            <Head>
                <title>Komur - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://kit.fontawesome.com/e367b28ca4.js" crossorigin="anonymous" defer></script>
            </Head>

            <header className={styles.header}>
                <div className="container">
                    <nav>
                        <Link href="/">
                            <h1>Komur.nl</h1>
                        </Link>

                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
  }
  
  export default Header;