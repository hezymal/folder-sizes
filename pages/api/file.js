import { readdir } from "fs/promises";
import { join } from "path";

async function handler(request, response) {
    const { path } = request.body;
    const result = [];
    const files = await readdir(path, { withFileTypes: true });

    for (const file of files) {
        result.push({
            name: file.name,
            path: join(path, file.name),
            isDirectory: file.isDirectory(),
        });
    }

    response.status(200);
    response.json(result);
}

export default handler;
