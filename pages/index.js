import Head from "next/head";
import styles from "@/styles/Home.module.css";

/* Here, we import circle with a resource query on the end (?url). This is an
   arbitrary string that we designate in the next.config.js file (see further 
   comments there) so that the svg is loaded as an assert. */
import circle from "@/assets/circle.svg?url";

/* Here, we import SpinSquare without the resource query. As specified in the
   next.config.js file (see further comments there), we can then use the svg
   as a React component. */
import SpinSquare from "@/assets/spin-square.svg";

/* Here, we import BgBox as a component. It has styling that uses svg as a
   background image. Nothing additional / different needs to be done here. */
import BgBox from "@/components/BgBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>SVG Demo</title>
        <meta name="description" content="A simple demo of svg in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Use the circle asset as the src of an img element. */}
        <img src={circle} width="100" height="100" />

        <br></br>

        {/* Use SpinSquare as a React component. */}
        <SpinSquare width="200" height="200" viewBox="-50 -50 200 200" />

        <br></br>

        {/* Use BgBox to illustrate css referencing svg files. */}
        <BgBox />

        <br></br>

        {/* Re-use the circle asset. */}
        <img src={circle} width="100" height="100" />

        <br></br>

        {/* Re-use the SpinSquare component. */}
        <SpinSquare width="200" height="200" viewBox="-50 -50 200 200" />
      </main>
    </>
  );
}
