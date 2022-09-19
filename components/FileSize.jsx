import React, { Fragment } from "react";

import { Button } from "./Button";
import { formatBytes } from "../utils/bytes";

export const FileSize = ({ className, size, loading, onLoad }) => {
    const loaded = size !== null;

    if (loaded) {
        return <Fragment>({formatBytes(size)})</Fragment>;
    }

    if (loading) {
        return <Fragment>(Loading...)</Fragment>;
    }

    return (
        <Button className={className} onClick={onLoad}>
            Load size
        </Button>
    );
};
