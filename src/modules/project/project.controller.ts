//req and response from hit use
import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { ProjectSrvices } from './project.service'

const createNewProjects = catchAsync(async (req: Request, res: Response) => {
  const { title, descriptions, tools, livelink, image, githubfrontend, githubbackend, projectduration, projectstatus } = req.body

  const projectData : any =  {
    title,
    descriptions,
    tools,
    image,
    githubfrontend,
    livelink,
    githubbackend,
    projectduration,
    projectstatus,
  }
  console.log(projectData)
  const result = await ProjectSrvices.createProjectsfromDB(projectData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is created succesfully',
    data: result,
  })
})


const getAllProject: RequestHandler = catchAsync(async (req, res) => {

  const result = await ProjectSrvices.getAllProjectsfromDB()
  // Response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project fetched successfully",
    data: result,
  });
});


const getProjectByID = async (req: Request, res: Response) => {
  try {
    const product = await ProjectSrvices.getProjectByIdfromDB(
      req.params.projectId
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project fetched successfully",
      data: product,
    });


  } catch (error: any) {
    const stackerror = new Error()
    res.json({
      message: 'An error occurred while retrieving product',
      status: false,
      error: error,
      stack: stackerror.stack,
    })
  }
}

const updateProject = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const projectId = req.params.projectId
    const result = await ProjectSrvices.updateProjectByIdfromDB(
      projectId,
      productData
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Upodate successfully",
      data: result,
    });
  } catch (error) {
    const stackerror = new Error()
    res.json({
      message: 'An error occurred while updating product',
      status: false,
      error: error,
      stack: stackerror.stack,
    })
  }
}

const deleteProjectbyID = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.projectId
    const result = await ProjectSrvices.deleteProjectByIdfromDB(projectId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Delete successfully",
      data: result,
    });
  } catch (error) {
    const stackerror = new Error()
    res.json({
      message: 'An error occurred while deleting product',
      status: false,
      error: error,
      stack: stackerror.stack,
    })
  }
}

export const projectController = {
  createNewProjects,
  getAllProject,
  getProjectByID,
  updateProject,
  deleteProjectbyID,
}
