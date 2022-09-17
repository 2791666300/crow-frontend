import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  top: 0;
  font-size: 0.6rem;
`;

export const FromGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: #28b487;
  font-weight: 700;
  width: 12rem;
  margin: 0 auto;
  text-align: left;
  font-size: 0.5rem;
  top: -1.5rem;
  left: -1rem;
  position: relative;
  display: block;
  margin-bottom: 0.3rem;
  transition: all 0.2s;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  color: #28b487;
  outline: none;
  width: 15rem;
  height: 2rem;

  &:focus ~ ${Label} {
    ${shrinkLabelStyles}
  }

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
    border-bottom: 3px solid #28b487;
  }

  &:focus:invalid {
    border-bottom: 3px solid orangered;
  }
`;

/* @mixin shrinkLabel {
  top: 0;
  font-size: 0.6rem;
}

.form__group {
  position: relative;

  &--label {
    color: #28b487;
    font-weight: 700;
    width: 12rem;
    margin: 0 auto;
    text-align: left;
    font-size: 0.5rem;
    top: -1.5rem;
    position: relative;
    display: block;
    margin-bottom: 0.3rem;
    transition: all 0.2s;
    &.shrink {
      @include shrinkLabel();
    }
  }

  &--input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: #28b487;
    outline: none;
    width: 15rem;
    height: 2rem;

    &:focus ~ .form__group--label {
      @include shrinkLabel();
    }

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(black, 0.1);
      border-bottom: 3px solid #28b487;
    }

    &:focus:invalid {
      border-bottom: 3px solid orangered;
    }
  }
}
 */
