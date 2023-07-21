import { PutObjectCommand, PutObjectAclCommandOutput } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3"

interface settingsAWS {
    Bucket: string,
    Key: string,
    Body: Buffer
}

export const uploadFiles = (files: Express.Multer.File[], mail: string): string[] => {
    const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION }: NodeJS.ProcessEnv = process.env
    let filepromises: Promise<PutObjectAclCommandOutput>[] = []
    let response: string[] = []
    if (AWS_ACCESS_KEY_ID === undefined || AWS_SECRET_ACCESS_KEY === undefined) {
        throw new Error("no se cargaron correctamente las variables de entorno")
    }
    const s3Client = new S3Client({ region: AWS_REGION, credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY } });
    for (let element of files) {
        const params: settingsAWS = {
            Bucket: "generadorportafolio",
            Key: `${mail}/${element.fieldname}/${element.originalname}`,
            Body: element.buffer,
        }
        const filepromise: Promise<PutObjectAclCommandOutput> = s3Client.send(new PutObjectCommand(params))
        filepromises.push(filepromise)
        response.push(params.Key)

    }
    Promise.all(filepromises).then(res => {
        console.log("se cargaron bien los archivos")
    }).catch(error => {
        throw new Error("no se pudieron cargar bien los archivos")
    })
    return response

}
