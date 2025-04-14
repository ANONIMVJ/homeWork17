import React from 'react';
import { InputWrapper } from './Input.styles';
import { SearchIcon } from '../../assets/icons';

function Input(props) {
    return (
        <InputWrapper>
            <input {...props} />
            <span className="icon">
                <SearchIcon />
            </span>
        </InputWrapper>
    );
}

export default Input;
