const { getDiskInfo } = require("node-disk-info");

async function handler(req, res) {
    const disks = await getDiskInfo();

    res.status(200);
    res.json(
        disks.map((disk) => ({
            used: disk._used,
            available: disk._available,
            mounted: disk._mounted + "/",
        }))
    );
}

export default handler;
