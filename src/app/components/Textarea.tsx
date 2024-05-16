import { ChangeEvent } from "react";

type TextareaProps = {
  disabled?: boolean;
  name: string;
  id: string;
  placeholder?: string;
  text: string;
  setText?: (value: string) => void;
};
export default function Textarea({
  disabled = false,
  name,
  id,
  placeholder = "",
  text,
  setText,
}: TextareaProps) {
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (setText) {
      setText(value);
    }
  }
  return (
    <textarea
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      id={id}
      cols={30}
      rows={10}
      className="border-2 border-gray-700 rounded-md p-4 w-full"
      value={text}
      onChange={handleChange}
    />
  );
}
