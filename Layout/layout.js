import Head from "next/head";
import styles from "../css/layout.module.css";

export const siteTitle = "Stephan Mingoes";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Stephan Mingoes Links" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
