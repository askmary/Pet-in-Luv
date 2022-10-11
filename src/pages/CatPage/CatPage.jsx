import React from "react";
import Main from "./Main";
import Header from "../../services/Header";

export default function Cat() {
  return (
    <>
      <Header sectionName="adotar cachorros ↪" way={"/adocaocachorro"} />
      <Main />
    </>
  );
}
