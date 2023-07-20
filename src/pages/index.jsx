import { useContext } from "react";
import { DefaultContext } from "@/state";

import Link from "next/link";
import Head from "next/head";
import { db } from "../plugins/firebase";
import { collection, getDocs } from "firebase/firestore";

import Todos from "@/components/Todos";
import Navbar from "@/components/Navbar";

import styles from "@/styles/Home.module.scss";

export default function Home({ data }) {
  useLayoutEffect(() => {
    dispatch({ type: "SET_DATABASE", payload: data });
  }, []);

  const { state, dispatch } = useContext(DefaultContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The final Todo-App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {state.username ? (
        <main className={`${styles.Home}`}>
          <Todos />
        </main>
      ) : (
        <div className={styles.login}>
          <h1>Authenticate</h1>
          <Link href="/login">Login</Link>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "todos"));

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      data,
    },
  };
}
