const Jimp = require('jimp');

async function cleanLogo() {
    console.log("Loading AI colored logo...");
    const image = await Jimp.read('C:\\Users\\aliha\\.gemini\\antigravity\\brain\\fe8499db-4ec7-4c31-a6ef-5320bee40289\\mercedes_bmw_colored_logo_v2_1772943603550.png');

    const width = image.getWidth();
    const height = image.getHeight();

    console.log("Processing pixels...");
    image.scan(0, 0, width, height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];

        const isWhite = r > 240 && g > 240 && b > 240;

        if (isWhite) {
            this.bitmap.data[idx + 3] = 0;
        }
    });

    console.log("Saving transparent colored image...");
    await image.writeAsync('./public/NFS-Ascent-Logo-Colored.png');
    console.log("Done!");
}

cleanLogo().catch(console.error);
