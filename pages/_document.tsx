import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // console.log("DOCUMENT - PAGE ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/** SEO -> Search Enginge Optimization **/}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere anytime in South Korea. |  " +
            "Покупайте и продавайте недвижимость в любой точке Южной Кореи в любое время." +
            "대한민국 언제 어디서나 부동산 사고팔 수 있습니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 Document TSX searchin engine optimaztion ni yaxshilash uchun yordamga keladi
 */
