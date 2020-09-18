import "../styles/index.css"; // <- applied everywhere in the NextJS application scope

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
