import React from "react";
import styled from "styled-components";

import { colors } from "../styles/colors";
import { ToggleButton } from "./ToggleButton";
import { formatBytes } from "../utils/bytes";

const StyledDrive = styled.li`
    display: flex;
    position: relative;
    margin: 8px 0;
    flex-wrap: wrap;
    line-height: 32px;
`;

const Mounted = styled.div`
    margin: 0 8px;
    width: calc(30% - 24px);
`;

const Sizes = styled.div`
    position: relative;
    text-align: center;
    width: calc(70% - 24px);

    &::before {
        background-color: ${colors.red[0]};
        border-radius: 4px 0 0 4px;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;

        ${(props) => {
            return `width: ${props.used}%`;
        }}
    }

    &::after {
        background-color: ${colors.green[0]};
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        border-radius: 0 4px 4px 0;

        ${(props) => {
            return `
                left: ${props.used}%;
                width: ${props.available}%;
            `;
        }}
    }
`;

const SizesLabel = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 1;
`;

const Files = styled.div`
    margin-left: 40px;
    width: calc(100% - 40px);
`;

export const Drive = ({ drive, files, showFiles, onFilesShowHide }) => {
    const total = drive.used + drive.available;
    const usedInPercents = (drive.used * 100) / total;
    const availableInPercents = (drive.available * 100) / total;

    return (
        <StyledDrive>
            <ToggleButton isOn={!showFiles} onToggle={onFilesShowHide} />
            <Mounted>{drive.mounted}</Mounted>
            <Sizes used={usedInPercents} available={availableInPercents}>
                <SizesLabel>
                    {formatBytes(drive.used)}
                    {" / "}
                    {formatBytes(drive.available)}
                </SizesLabel>
            </Sizes>
            {files && <Files>{files}</Files>}
        </StyledDrive>
    );
};
