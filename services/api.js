export const fetchDrives = async () => {
    const response = await fetch("/api/drive");

    if (!response.ok) {
        throw await response.json();
    }

    return await response.json();
};

export const fetchFiles = async (path) => {
    const response = await fetch("/api/file", {
        method: "POST",
        body: JSON.stringify({ path }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw await response.json();
    }

    return await response.json();
};

export const fetchFileSize = async (path) => {
    const response = await fetch("/api/file-size", {
        method: "POST",
        body: JSON.stringify({ path }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw await response.json();
    }

    return await response.json();
};
