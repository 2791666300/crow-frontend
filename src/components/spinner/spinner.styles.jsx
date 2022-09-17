import styled from "styled-components";

export const SpinnerContainer = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export const SpinnerLoding = styled.div`
  height: 50%;
  width: 50%;
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
