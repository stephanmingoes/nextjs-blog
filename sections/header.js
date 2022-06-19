import styles from "../css/header.module.css";
import Head from "next/head";
import Image from "next/image";

const name = "Stephan Mingoes";
const siteTitle = "Stephan Mingoes Links";
const { header, borderCircle, heading2Xl } = styles;
export default function Header() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <header className={header}>
          <Image
            priority
            src="/images/profile.png"
            className={borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={heading2Xl}>{name}</h1>
          <p>Software Developer</p>
        </header>
        <div>
          <p>
            Hi I'm <strong>Stephan</strong>, this website was created as part of
            a <a href="http://nextjs.org">Next JS</a> tutorial. The code for
            this website is{" "}
            <a href="https://github.com/stephanmingoes/nextjs-blog">here.</a>
          </p>
        </div>
      </section>
    </>
  );
}
