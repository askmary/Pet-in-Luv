import React from "react";
import Header from "../../services/Header";
import Main from "./Main";

export default function DogPage() {
  return (
    <div>
      <Header sectionName="adotar gatos ↪" way={"/adocaogato"} />
      <Main />
    </div>
  );
}
