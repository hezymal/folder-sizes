import React, { Fragment } from "react";

import { GlobalStyle } from "../styles/GlobalStyle";

function App({ Component, pageProps }) {
    return (
        <Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
        </Fragment>
    );
}

export default App;
