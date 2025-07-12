const EmpModel = require("../models/emp.model");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

class AppController {
    async getForm(req, res) {
        try {
            res.render('form', {
                title: "CSV Upload"
            });
        } catch (err) {
            throw err;
        }
    }
    // POST: Handle CSV upload and insert to DB
    async uploadCSV(req, res) {
        try {
            if (!req.file) {
                console.log("CSV file is required.");
                return res.redirect("/");
            }
            console.log("File uploaded successfully:", req.file.originalname);

            const results = [];
            const filePath = path.join(__dirname, "../uploads", req.file.filename);
            console.log("Processing file:", filePath);


            fs.createReadStream(filePath)
                .pipe(csv())
                .on("data", (row) => {  
                    results.push({
                        fullName: row["Name"],
                        email: row["Email"],
                        phoneNumber: row["Phone Number"],
                        age: parseInt(row["Age"]),
                        gender: row["Gender"],
                        address: row["Address"]
                    });
                })
                .on("end", async () => {
                    try {
                        await EmpModel.insertMany(results);
                        console.log("CSV data inserted successfully.");
                        res.redirect("/list");
                    } catch (err) {
                        console.error("Error inserting CSV data:", err);
                        throw err;
                    }
                });
        } catch (err) {
            console.log("Upload error:", err);
            throw err;
        }
    }
    
    async getList(req, res) {
        try {
            const allData = await EmpModel.find({ isDeleted: false }).sort({ createdAt: -1 });
            console.log("Fetched data:", allData);
            res.render('list', {
                title: "User List",
                allData
            });
        } catch (err) {
            console.log("List error:", err);
            throw err;
        }
    } 

    
}

module.exports = new AppController();
