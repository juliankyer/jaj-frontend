import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: ${props => props.theme.boxShadow};
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  max-width: 800px;
  margin: 14rem auto 12rem;

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    box-shadow: none;
    font-family: 'Montserrat';

    &:focus {
      outline: 0;
      border-color: ${props => props.theme.brand01};
    }
  }

  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.brand01};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 500;
    padding: 0.5rem 1.2rem;
  }

  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #119dad 0%, #ffffff 50%, #15c3d1 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
