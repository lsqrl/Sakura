const lighthouse = require("@lighthouse-web3/sdk");
const dotenv = require("dotenv");
const minimist = require("minimist");

dotenv.config();

const dealParam_default = {
	"network":"calibration"
}

async function uploadFile(filePath) {
    const APIKey = process.env.LIGTHOUSE_API_KEY;
    const uploadResponse = await lighthouse.upload(filePath, APIKey, false, dealParam_default);

    return uploadResponse;
}

const args = minimist(process.argv.slice(2));
const filePath = args.path;

uploadFile(filePath).then(hash => {
    console.log("Returned response:", hash);
}).catch(err => {
    console.error("Error:", err);
});