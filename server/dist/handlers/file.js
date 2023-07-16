"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const client_s3_2 = require("@aws-sdk/client-s3");
const uploadFiles = (files, mail) => {
    const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;
    let filepromises = [];
    let response = [];
    if (AWS_ACCESS_KEY_ID === undefined || AWS_SECRET_ACCESS_KEY === undefined) {
        throw new Error("no se cargaron correctamente las variables de entorno");
    }
    const s3Client = new client_s3_2.S3Client({ region: AWS_REGION, credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY } });
    for (let element of files) {
        const params = {
            Bucket: "generadorportafolio",
            Key: `${mail}/${element.fieldname}/${element.originalname}`,
            Body: element.buffer,
        };
        const filepromise = s3Client.send(new client_s3_1.PutObjectCommand(params));
        filepromises.push(filepromise);
        response.push(params.Key);
    }
    Promise.all(filepromises).then(res => {
        console.log("se cargaron bien los archivos");
    }).catch(error => {
        throw new Error("no se pudieron cargar bien los archivos");
    });
    return response;
};
exports.uploadFiles = uploadFiles;
//# sourceMappingURL=file.js.map