import React, { useState } from "react";

import { Drive as Component } from "../components/Drive";
import { Files } from "../containers/Files";

export const Drive = ({ drive }) => {
    const [showFiles, setShowFiles] = useState(false);

    const handleFilesShowHide = () => setShowFiles((showFiles) => !showFiles);

    return (
        <Component
            drive={drive}
            files={showFiles && <Files path={drive.mounted} />}
            showFiles={showFiles}
            onFilesShowHide={handleFilesShowHide}
        />
    );
};
