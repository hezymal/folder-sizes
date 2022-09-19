import React, { useEffect, useState } from "react";

import { Drives as Component } from "../components/Drives";
import { Drive } from "../containers/Drive";
import { fetchDrives } from "../services/api";

export const Drives = () => {
    const [loading, setLoading] = useState(false);
    const [drives, setDrives] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                setDrives(await fetchDrives());
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, []);

    return (
        <Component>
            {drives.map((drive) => (
                <Drive key={drive.mounted} drive={drive} />
            ))}
        </Component>
    );
};
