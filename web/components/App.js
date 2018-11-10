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
        padding: 80px 20px;
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
        padding: 10px;
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

      header.header {
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
      }

      .header h1 {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 20px;
        color: #fff;
        position: absolute;
        top: 15px;
        left: 15px;
      }

      .header.main {
        background-color: #0091e5;
      }

      .header.secondary {
        background-color: #3bde74;
      }

      .header .actions {
        position: absolute;
        right: 15px;
        top: 15px;
      }

      .header .actions a {
        color: #fff;
        text-decoration: none;
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 4px 8px;
        line-height: 20px;
        font-size: 12px;
        float: right;
        font-weight: bold;
      }

      .header .actions a:hover {
        color: #ccc;
        border-color: #ccc;
      }

      .react-toggle {
        touch-action: pan-x;

        display: inline-block;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
      }

      .react-toggle-screenreader-only {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .react-toggle--disabled {
        cursor: not-allowed;
        opacity: 0.5;
        -webkit-transition: opacity 0.25s;
        transition: opacity 0.25s;
      }

      .react-toggle-track {
        width: 50px;
        height: 24px;
        padding: 0;
        border-radius: 30px;
        background-color: #4d4d4d;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }

      .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
        background-color: #000000;
      }

      .react-toggle--checked .react-toggle-track {
        background-color: #19ab27;
      }

      .react-toggle--checked:hover:not(.react-toggle--disabled)
        .react-toggle-track {
        background-color: #128d15;
      }

      .react-toggle-track-check {
        position: absolute;
        width: 14px;
        height: 10px;
        top: 0px;
        bottom: 0px;
        margin-top: auto;
        margin-bottom: auto;
        line-height: 0;
        left: 8px;
        opacity: 0;
        -webkit-transition: opacity 0.25s ease;
        -moz-transition: opacity 0.25s ease;
        transition: opacity 0.25s ease;
      }

      .react-toggle--checked .react-toggle-track-check {
        opacity: 1;
        -webkit-transition: opacity 0.25s ease;
        -moz-transition: opacity 0.25s ease;
        transition: opacity 0.25s ease;
      }

      .react-toggle-track-x {
        position: absolute;
        width: 10px;
        height: 10px;
        top: 0px;
        bottom: 0px;
        margin-top: auto;
        margin-bottom: auto;
        line-height: 0;
        right: 10px;
        opacity: 1;
        -webkit-transition: opacity 0.25s ease;
        -moz-transition: opacity 0.25s ease;
        transition: opacity 0.25s ease;
      }

      .react-toggle--checked .react-toggle-track-x {
        opacity: 0;
      }

      .react-toggle-thumb {
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border: 1px solid #4d4d4d;
        border-radius: 50%;
        background-color: #fafafa;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        -webkit-transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        transition: all 0.25s ease;
      }

      .react-toggle--checked .react-toggle-thumb {
        left: 27px;
        border-color: #19ab27;
      }

      .react-toggle--focus .react-toggle-thumb {
        -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
        -moz-box-shadow: 0px 0px 3px 2px #0099e0;
        box-shadow: 0px 0px 2px 3px #0099e0;
      }

      .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
        -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
        -moz-box-shadow: 0px 0px 5px 5px #0099e0;
        box-shadow: 0px 0px 5px 5px #0099e0;
      }
    `}</style>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#ffffff" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    </Head>
  </main>
);
