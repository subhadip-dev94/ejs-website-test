const multer = require("multer");
const path = require("path");
const fs = require("fs");

class FileUploader {
    constructor({
        folderName = "uploads",
        supportedFiles = ["text/csv", "application/vnd.ms-excel", "application/octet-stream", "application/csv"],
        fieldSize = 1024 * 1024 * 2 // 2MB default
    } = {}) {
        this.folderName = folderName;
        this.supportedFiles = supportedFiles;
        this.fieldSize = fieldSize;

        // Ensure upload folder exists
        if (!fs.existsSync(this.folderName)) {
            fs.mkdirSync(this.folderName, { recursive: true });
        }
    }

    storage() {
        return multer.diskStorage({
            destination: (_, __, cb) => {
                cb(null, this.folderName);
            },
            filename: (_, file, cb) => {
                const ext = path.extname(file.originalname);
                cb(null, Date.now() + "-upload" + ext);
            },
        });
    }

    fileFilter() {
        return (_, file, cb) => {
            if (this.supportedFiles.includes(file.mimetype)) {
                cb(null, true);
            } else {
                console.log("Unsupported file type:", file.mimetype);
                cb(null, false);
            }
        };
    }

    upload() {
        return multer({
            storage: this.storage(),
            fileFilter: this.fileFilter(),
            limits: { fileSize: this.fieldSize }
        });
    }
}

module.exports = FileUploader;
