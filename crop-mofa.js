const Jimp = require('jimp');

async function cropLogo() {
    console.log("Loading transparent image...");
    const image = await Jimp.read('./public/Mofa-Logo-Clean.png');

    // Auto crop removes transparency (alpha = 0) from the edges
    console.log("Auto-cropping empty transparent pixels...");
    image.autocrop();

    // Also add a little padding back (uniform 20px) so it's not hugging the very edge
    // (Jimp doesn't have a direct 'add padding' pad function that keeps aspect ratio on autocrop, 
    // but autocrop essentially brings it down to the exact pixel bounds of the visible logo)

    console.log("Saving cropped image...");
    await image.writeAsync('./public/Mofa-Logo-Clean.png');
    console.log("Done!");
}

cropLogo().catch(console.error);
