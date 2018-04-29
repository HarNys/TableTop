import React from 'react';
import styled from 'styled-components';
import {colors} from '../variables';



const Input = styled.input`
	    :focus {
	    	outline: none;
	    	border-bottom: 1px solid ${colors.sky700};
	    }
	    border: none;
	    border-bottom: 1px solid ${colors.gray200};
	    
	    transition: border 300ms;
`;

export default (props) => (
	<Input />
)