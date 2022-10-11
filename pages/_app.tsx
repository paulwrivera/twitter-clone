import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import {RecoilRoot} from "recoil";

export default function App({
  Component, pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
      <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

// function MyApp({
//   Component,
//   pageProps,
// }: AppProps<{
//   session: Session;
// }>) {
  
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }

// export default MyApp;