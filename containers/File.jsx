import React, { useState } from "react";

import { File as FileComponent } from "../components/File";
import { Files } from "../containers/Files";
import { fetchFileSize } from "../services/api";

export const File = ({ file }) => {
    const [showChilds, setShowChilds] = useState(false);
    const [fileSize, setFileSize] = useState(null);
    const [fileSizeLoading, setFileSizeLoading] = useState(false);

    const handleSizeLoad = async () => {
        setFileSizeLoading(true);
        try {
            const fileSize = await fetchFileSize(file.path);
            setFileSize(fileSize);
        } finally {
            setFileSizeLoading(false);
        }
    };

    const handlePathCopy = () => {
        navigator.clipboard.writeText(file.path);
    };

    const handleChildsShowHide = () =>
        setShowChilds((showChilds) => !showChilds);

    return (
        <FileComponent
            file={file}
            fileSize={fileSize}
            fileSizeLoading={fileSizeLoading}
            childs={showChilds && <Files path={file.path} />}
            showChilds={showChilds}
            onSizeLoad={handleSizeLoad}
            onPathCopy={handlePathCopy}
            onChildsShowHide={handleChildsShowHide}
        />
    );
};
