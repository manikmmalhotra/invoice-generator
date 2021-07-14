import { Button, Input, TextField } from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/core/styles";
import BillingCard from "./BillingCard";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

//styling
const InputHead = styled(Input)({
  margin: "20px",
  fontSize: "2rem",
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
  alignItems: "center",
  marginBottom: "20px",
});
const Logobtn = styled("div")({
  display: "flex",
  width: "25%",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "rgb(0, 0, 0,0.1)",
  border: "1px dotted rgb(0, 0, 0,0.5)",
  margin: "auto",
});

function Form() {
  return (
    <Formm>
      <InputHead defaultValue="Hello world" placeholder="manik" />
      <div style={{ margin: "20px" }}>
        <FormTop>
          <div
            style={{
              flex: "0.6",
              marginLeft: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <TextField
                required
                id="standard-required"
                defaultValue="Invoice No."
              />
              <TextField
                style={{ width: "39%" }}
                required
                id="standard-required"
                defaultValue="76566546"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                marginTop: "10px",
                justifyContent: "space-between",
              }}
            >
              <TextField
                required
                id="standard-required"
                defaultValue="Invoice No."
              />
              <TextField
                required
                id="standard-required"
                defaultValue="Hello World"
                type="date"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                marginTop: "10px",
                justifyContent: "space-between",
              }}
            >
              <TextField
                required
                id="standard-required"
                defaultValue="Invoice No."
              />
              <TextField
                required
                id="standard-required"
                defaultValue="Hello World"
                type="date"
              />
            </div>
          </div>
          <div style={{ flex: "1" }}>
            <Logobtn>
              <InsertPhotoIcon />
              Add Business Logo
            </Logobtn>
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
      </div>
    </Formm>
  );
}

export default Form;
