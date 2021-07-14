import { Button, Input } from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/core/styles";
import Inputt from "./Input";
import BillingCard from "./BillingCard";

//styling
const InputHead = styled(Input)({
  margin: "20px",
  fontSize: "2rem",
  textAlign: "center",
  width: "20%",
});
const Formm = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "90%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  margin: "20px",
  marginLeft: "auto",
  marginRight: "auto",
});
const FormTop = styled("div")({
  display: "flex",
  width: "100%",
});

function Form() {
  return (
    <Formm>
      <InputHead defaultValue="Hello world" placeholder="manik" />
      <FormTop>
        <div style={{ flex: "1" }}>
          <Inputt />
          <Inputt />
          <Inputt />
          <Inputt />
        </div>
        <div style={{ flex: "1" }}>
          <Button />
        </div>
      </FormTop>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <BillingCard
          heading="Billed By"
          name="Yours Buisness"
          sideline="yours details"
        />
        <BillingCard
          heading="Billed to"
          name="Yours Branch"
          sideline="yours Client details"
        />
      </div>
    </Formm>
  );
}

export default Form;
