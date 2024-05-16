"use client";
import { useState } from "react";
import { Form } from "./Form";
import { ResultForm } from "./ResultForm";
import { censorText } from "../action";

export default function FormContainer() {
  const [result, setResult] = useState<string>("");
  async function handleSubmit(text: string) {
    const res = await censorText(text);
    if (typeof res.message.content === "string") setResult(res.message.content);
  }
  return (
    <>
      <div className="flex space-x-4">
        <div className="basis-1/2">
          <Form handleSubmit={handleSubmit} />
        </div>
        <div className="basis-1/2">
          <ResultForm result={result} />
        </div>
      </div>
    </>
  );
}
