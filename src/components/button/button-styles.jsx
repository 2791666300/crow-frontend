import styled from "styled-components";

export const BaseButton = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #7dd56f;
  color: #fff;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: #7dd56f;
    border: 1px solid black;
  }
`;

// styled(BaseButton) 代表继承BaseButton的所有样式
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled.button`
  height: 30px;
  width: 30px;
  margin: 0 auto;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 100%;
  border-left-color: transparent;
  animation: loader 1.2s infinite linear;
  -webkit-animation: loader 1.2s infinite linear;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
