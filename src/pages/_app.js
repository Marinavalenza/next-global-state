import { useReducer } from "react";
import { DefaultContext } from "@/state";
import { DefaultReducer } from "@/state/reducers";
import { initialState } from "@/state";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(DefaultReducer, initialState);

  return (
    <DefaultContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </DefaultContext.Provider>
  );
}
