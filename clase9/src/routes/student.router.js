import express from "express";
import { studentModel } from "../models/student.model.js";

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    let students = await studentModel.find().paginate({limit:limit, page:page});
    console.log(students);
    
    res.render("student", {students:{docs:students.docs, prevPage:students.prevPage, currentPage:students.page, nextPage:students.nextPage}});
})

export default studentRouter