import React from 'react';
import styled from 'styled-components'; 

const Loader = () => {

  return (
    <Styles>
      <div className="loader">
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="100px" height="100px" viewBox="0 0 50 50" style={{
            enableBackground: "new 0 0 50 50"
          }} space="preserve">
        <path fill="#3fa1d7" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
    </Styles>
  );
  
}

const Styles = styled.div`
  width: 100%; 
  height: 100vh; 
  position: absolute; 
  left: 0; 
  top: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  z-index: 1000; 
  background: rgba(255,  255, 255, 1);
`;

export default Loader