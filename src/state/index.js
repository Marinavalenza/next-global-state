import { createContext } from "react";

export const DefaultContext = createContext({});
export const initialState = [
  { name: "Nina", id: 1, todo: "Take a walk with Michi" },
  { name: "Marina", id: 2, todo: "Do something nice for someone I care about" },
  { name: "Michela", id: 3, todo: "Take a walk with Nina" },
];
