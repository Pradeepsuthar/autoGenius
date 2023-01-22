import React from "react";
import AGTextArea from "./components/modules/AGTextArea.tsx";

export default function App() {
  // constant object for initanize the input box
  const propState = {
    name: "Lokesh",
    // style: styles,
    isDisable: true,
    required: true,
    column: 10,
    row: 100,
  };

  return <AGTextArea propstate={propState}>Button</AGTextArea>;
}
