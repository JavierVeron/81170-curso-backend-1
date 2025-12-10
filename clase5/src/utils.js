import multer from "multer";
const __dirname = "C:/xampp/htdocs/coderhouse/81170/clase5/src";

const storage = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, __dirname + "/public/images");
    },
    filename:function(req, file, cb) {
        cb(null, file.originalname);
    }
});

export const uploader = multer({storage});
export default __dirname;