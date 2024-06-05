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
Next js ni hosil qilayotganda App yoki Pages router tizimidan foydalansak boladi.

App Router tizimi server componentlari bn togridan togri ishlash imkoniyatini beradi

Pages Router tizimi esa Nextjs ni azaliy routing tizimini tashkil etgan uslub hisoblanadi.



*/
