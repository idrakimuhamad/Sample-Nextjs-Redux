import Head from 'next/head'
export default () => (
  <Head>
    <title>Something</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="static/css/app.css"/>
    <style>{
      `.container {
        max-width: 1140px;
      }`
    }
    </style>
  </Head>
)
