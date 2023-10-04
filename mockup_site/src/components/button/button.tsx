// custom react button component
import React from 'react';
export default function button({ children, onClick, disabled=false }) {
    return (
        React.createElement(
            "button", { 
                className: "btn btn-primary",
                onClick: onClick, 
                disabled: disabled 
            }, 
            children
        )
    );
}
