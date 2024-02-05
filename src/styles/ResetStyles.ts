import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    vertical-align: top;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  fieldset {
    border: 0;
    padding: 0;
  }

  input {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  button {
    padding: 0;
    border: none;
    outline: none;
    background: none;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

export default ResetStyles;
