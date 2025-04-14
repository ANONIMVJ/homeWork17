import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;

  input {
    width: 100%;
    padding: 12px 20px;
    padding-right: 45px;
    font-size: 16px;
    border: 1px solid #444;
    border-radius: 999px;
    background-color: #fff;
    outline: none;
    transition: border-color 0.3s ease;

    &::placeholder {
      color: #bdbdbd;
    }

    &:focus {
      border-color: #999;
    }
  }

  .icon {
    position: absolute;
    top: 55%;
    right: 15px;
    transform: translateY(-50%);
    pointer-events: none;

    svg {
      width: 18px;
      height: 18px;
      color: #444;
    }
  }
`;
