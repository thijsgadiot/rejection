import React from "react";
import { describe } from "riteway";
import render from "riteway/render-component";
import SimpleInput from "./simpleInput";

describe("SimpleInput component", async (assert) => {
  {
    const placeholder = "...";
    const $ = render(
      <SimpleInput placeholder={placeholder} handleChange={() => {}} handleKeyPress={() => {}} value="123" />
    );

    assert({
      given: "a placeholder",
      should: "set the placeholder on the text input",
      actual: $("input").attr("placeholder"),
      expected: placeholder
    });
  }
  {
    const value = "Some text";
    const $ = render(<SimpleInput handleChange={() => {}} handleKeyPress={() => {}} value={value} />);

    assert({
      given: "a value",
      should: "set the value as the text input value",
      actual: $("input").val(),
      expected: value
    });
  }
});
