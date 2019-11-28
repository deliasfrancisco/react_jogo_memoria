import React, { Component } from "react";
import { Input, Label } from "reactstrap";

const UserInput = props => {
  const { value, onChange, id, placeholder, type, label } = props;
  return (
    <div className="col-md-11" style={{ paddingLeft: 0 }}>
      <Label for={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default UserInput;
