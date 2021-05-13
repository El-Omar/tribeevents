import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B629S2Q0BK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-B629S2Q0BK');
                `,
          }}
        />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} style={{ 
        overflow: "hidden",
        height: "100vh"
       }}>
        {props.preBodyComponents}


        <div className="loader" id="___loader" style={{
          width: "100%", 
          height: "100vh", 
          position: "absolute", 
          left: 0, 
          top: 0, 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          zIndex: 1000, 
          background: "rgba(255,  255, 255, 1)",
        }}>
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

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
