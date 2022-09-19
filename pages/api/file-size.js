import { readdir, stat } from "fs/promises";
import { join } from "path";

const getFileSize = async (path) => (await stat(path)).size;

const getDirectorySize = async (path) => {
    const files = await readdir(path, { withFileTypes: true });

    let size = 0;
    for (const file of files) {
        const filePath = join(path, file.name);

        try {
            size += file.isDirectory()
                ? await getDirectorySize(filePath)
                : await getFileSize(filePath);
        } catch (exception) {
            console.error(exception);
        }
    }

    return size;
};

async function handler(request, response) {
    try {
        const { path } = request.body;
        const size = await getDirectorySize(path);
        response.status(200).json(size);
    } catch (exception) {
        console.error(exception);
        response.status(500).json(exception);
    }
}

export default handler;
