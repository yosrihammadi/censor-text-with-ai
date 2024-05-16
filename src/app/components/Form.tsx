import { SyntheticEvent, useState } from "react";
import Textarea from "./Textarea";
import Button from "./Button";

type FormProps = {
  handleSubmit: (text: string) => void;
};
export function Form({ handleSubmit }: FormProps) {
  const [text, setText] = useState<string>("");
  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (text.length > 0) {
      handleSubmit(text);
    } else {
      // handle text empty
    }
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-2 items-start">
      <Textarea
        name="text"
        id="text"
        placeholder="Enter your text"
        text={text}
        setText={setText}
      />
      <Button type="submit" onSubmit={onSubmit}>
        Submit
      </Button>
    </form>
  );
}
