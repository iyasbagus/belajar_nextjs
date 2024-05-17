import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href={'/'}>Home</Link>
          <Link href={'/blog'}>Blog</Link>
        </nav>
      </header>
    <Component {...pageProps} />;

  </>)
}