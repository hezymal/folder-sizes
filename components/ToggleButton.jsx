import React from "react";
import styled from "styled-components";

import { Button } from "./Button";

export const StyledButton = styled(Button)`
    width: 24px;
`;

export const ToggleButton = ({ className, isOn, onToggle }) => {
    return (
        <StyledButton className={className} onClick={onToggle}>
            {!isOn ? "-" : "+"}
        </StyledButton>
    );
};
