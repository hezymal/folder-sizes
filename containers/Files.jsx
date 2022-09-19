import React, { useEffect, useState } from "react";

import { Files as Component } from "../components/Files";
import { File } from "../containers/File";
import { fetchFiles } from "../services/api";

export const Files = ({ path }) => {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                setFiles(await fetchFiles(path));
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [path]);

    return (
        <Component>
            {files.map((file) => (
                <File key={file.name} file={file} />
            ))}
        </Component>
    );
};
