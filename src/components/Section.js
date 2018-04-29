import React from 'react';
import styled from 'styled-components'



const Section = styled.section`
	    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
	    max-width: 900px;
	    margin: 0 auto;
	    padding 8px 24px;
	    
`;

export default (props) => (
  <Section>
    {props.children}
  </Section>
)
