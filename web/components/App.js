import Head from "next/head";

export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Rubik");
      * {
        font-family: "Rubik", sans-serif;
        font-size: 16px;
      }
      body {
        margin: 0;
        padding: 20px 40px 80px 40px;
        line-height: 32px;
      }
      a {
        color: #22bad9;
      }
      section {
        padding-bottom: 20px;
      }
      li {
        display: block;
        margin-bottom: 10px;
        padding: 10px 0;
        border-bottom: 1px solid gray;
      }
      ul {
        margin: 0;
        padding: 0;
      }
      table {
        float: left;
        width: 100%;
      }

      th {
        font-weight: bold;
        text-align: left;
        padding: 5px;
      }

      td {
        text-align: left;
        padding: 5px;
      }

      h1 {
        font-size: 32px;
        font-weight: 900;
      }

      h2 {
        font-size: 26px;
        font-weight: 700;
      }

      h3 {
        font-size: 22px;
        font-weight: 700;
      }

      h1,
      h2,
      h3 {
        color: #000;
        margin: 0;
        border-bottom: 1px dashed #ccc;
        padding: 10px 0;
      }
    `}</style>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#ffffff" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
    </Head>
  </main>
);
