import { Request,Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async(req:Request,res:Response) => {
    try {
      const {student:studentData} = req.body;
      const result = await StudentServices.createStudentIntoDB(studentData)
      res.status(200).json({
        success: true,
        message: "student is created successfully",
        data: result 
      })
    } catch (error) {
      console.log(error)
    }
}

const getAllStudents = async(req:Request,res:Response) =>{
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
    
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async(req: Request,res: Response) =>{
  try {
    const {StudentId} = req.params;
    const result = await StudentServices.getSingleStudentFromDB(StudentId)
  } catch (error) {
    
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent
}