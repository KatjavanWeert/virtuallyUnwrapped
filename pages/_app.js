import "@styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <div>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <Component {...pageProps} />
    </div>
  );
}

export default Application;
