import React from "react";
import {Helmet} from "react-helmet";

const NotFound = () => {
    return(
        <>
            <Helmet>
                <title>Not Found!</title>
                <meta name="description" content="Not Found!"/>
                <meta name="googlebot" content="noindex"/>
                <meta name="robots" content="noindex"/>
            </Helmet>

            Not Found!
        </>
    );
}

export default NotFound;