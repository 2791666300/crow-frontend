import { FromGroup, Input, Label } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FromGroup>
      <Input {...otherProps} />
      <Label shrink={otherProps.value.length} htmlFor={`${otherProps.id}`}>
        {label}
      </Label>
    </FromGroup>
  );
};

export default FormInput;
