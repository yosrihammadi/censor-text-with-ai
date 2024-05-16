import { SyntheticEvent } from "react";
import Button from "./Button";
import Textarea from "./Textarea";

type ResultProps = {
  result: string;
};

export function ResultForm({ result }: ResultProps) {
  function onClick(e: SyntheticEvent) {
    e.preventDefault();
    console.log(result);
  }
  return (
    <form onClick={onClick} className="flex flex-col space-y-2 items-end">
      <Textarea disabled={true} name="text" id="text" text={result} />
      <Button type="submit" onClick={onClick}>
        Copy to clipboard
      </Button>
    </form>
  );
}
