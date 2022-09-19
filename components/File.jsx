import React from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { FileSize } from "./FileSize";
import { ToggleButton } from "./ToggleButton";

const StyledFile = styled.li`
    display: flex;
    position: relative;
    margin: 8px 0;
    flex-wrap: wrap;
`;

const Name = styled.div``;

const Childs = styled.div`
    margin-left: 40px;
    width: calc(100% - 40px);
`;

const Span = styled.div`
    margin: 0 12px 0 0;
`;

export const File = ({
    file,
    fileSize,
    fileSizeLoading,
    childs,
    showChilds,
    onChildsShowHide,
    onSizeLoad,
    onPathCopy,
}) => {
    return (
        <StyledFile>
            {file.isDirectory && (
                <Span>
                    <ToggleButton
                        isOn={!showChilds}
                        onToggle={onChildsShowHide}
                    />
                </Span>
            )}
            <Span>
                <Name>{file.name}</Name>
            </Span>
            <Span>
                <FileSize
                    size={fileSize}
                    loading={fileSizeLoading}
                    onLoad={onSizeLoad}
                />
            </Span>
            <Span>
                <Button onClick={onPathCopy}>Copy path</Button>
            </Span>
            {childs && <Childs>{childs}</Childs>}
        </StyledFile>
    );
};
