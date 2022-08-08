import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/future/image";
import banner from "../assets/banner.jpeg";

const css = { maxWidth: "100%", height: "auto" };

export default function About() {
  return (
    <div className={styles.container}>
      <Image src={banner} style={css} quality={50} placeholder="blur" />
      <main className={styles.main}>
        <h1>About Page</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
