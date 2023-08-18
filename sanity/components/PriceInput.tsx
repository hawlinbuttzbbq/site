import React, { useState } from "react";
import { NumberInputProps, set, unset } from "sanity";
import { Select, Button, Card, Spinner, Text, TextInput } from "@sanity/ui";

export default function PriceInput(props: NumberInputProps) {
  const { onChange, value } = props;

  const [text, setText] = useState(0);

  const handleChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement> | undefined) => {
      const value = event?.currentTarget.value;

      // If the selected option has a value,
      // it will be written to the document
      // otherwise the field will be cleared
      if (typeof value === "string") {
        onChange(value ? set(parseFloat(value)) : unset());
      } else {
        onChange(value ? set(value) : unset());
      }

      console.log(value);
    },
    [onChange, value]
  );

  return (
    <>
      <TextInput type="number" value={value} />
    </>
  );
}
