import crypto from 'crypto';

export const PasswordModel = {

    hash: ( payload:string ) => crypto.createHash("sha256").update(payload).digest("hex")

}