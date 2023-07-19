import Head from "next/head";
import { useReducer } from "react";
import { DefaultContext } from "@/state";
import { initialState } from "@/state";
import { DefaultReducer } from "@/state/reducers";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";

import Todos from "@/components/Todos";

export default function Home() {
  const [state, dispatch] = useReducer(DefaultReducer, initialState);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <DefaultContext.Provider value={{ state, dispatch }}>
          <Todos />
        </DefaultContext.Provider>
      </main>
    </>
  );
}
