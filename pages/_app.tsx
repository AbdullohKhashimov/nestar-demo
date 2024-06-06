import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { light } from "../scss/materialTheme";

import "../scss/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, Redux, Mui....
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

/*
Routing tizimi => Nextjsda routing tizimi folder hamda file based hisoblanadi. Yani Loyiha ichidagi malum bir folderlar routing tizimni hosil qilib beradi.
Pages=> bu domain hisoblanadi

Rendering tizimi => nextjs ham client side rendering va server side rendering imkoniyatini bir joyda mujassam etadi.

Client-side rendering deganda browserda front-end ni qurib olish nazarda tutiladi. 

Server-side rendering -> resourceni qurayotkanda client-side ga nisbatan ancha tez quradi. 

Caching -> nextjs improves application and reduces costs by caching rendering work and data requests.

what is Caching? 
Caching is a technique used in computing to store copies of frequently accessed
 data in a temporary storage area, called a cache, so that future requests for 
 that data can be served faster. Here are the key points about caching:

Purpose => The primary purpose of caching is to improve the performance 
and efficiency of a system by reducing the time and resources needed to access data.

Types of Caches:
1) Memory Cache => Stores data in the system's RAM for quick access.
2) Disk Cache => Stores data on a local disk to save bandwidth and reduce latency compared to fetching data from a remote server.
3) Web Cache => Stores web pages, images, and other web resources to speed up access for users.
4) Database Cache => Stores results of database queries to speed up database operations.


NextJS ni Routing tizimini 2 hil falsafa bn tashkil qilishimiz mumkun:
1) App Router -> Server componentlar bn togridan togri ishlash imkoniyatini beradi.
App routing tizimi orqali Appni ichidagi har qanday component by defaul Server-side rendering mehanizm bn ishlaydi

Note!  Server-side rendering orqali hosil bolgan mantiqda biz (hooklar) ni ishlata olmaymiz.

2) Pages Router -> pages routingda ham server-side rendering imkoniyati mavjud. 
Pages routing tizimda hammasi by defaul client-side rendering faqatgina
 _document tsx server-side rendering mehanizmni tashkil etib beradigon mantiq hisoblanadi.


 Pages Router tizimini ishlatishimizda 3 sabab:
 1) Amaliyotda faoliyat olib borayotgan developerlar aksariyati pages router tizimini maqul korishadi
 2) Nestar loyihamiz  faqatgina web application dan iborat bolmaganligi sabab balki uni tarkibida web-mobile ham mavjud boladi. 
 Pagesda da joylashgan har bir componentda qaysi device bizga murojat etayotganligini aniqlaydigon mantiq kerak buladi va biz uni 
 hooklar orqali aniqlaymiz.
 3) Yetarlicha imkoniyatlar taqdim eta olmaydi Architectural Patternlar borasida

*/
