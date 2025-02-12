import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import { blogServices } from "./blog.service"
import { RequestHandler } from "express"
import AppError from "../../errors/AppError";
import sendResponse from "../../utils/sendResponse";



const createBlogContent: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { blogtitle, blogImage, blogContent, blogAuthor} = req.body;
    const blogData: any = {
      blogtitle,
      blogImage,
      blogContent,
      blogAuthor
    };

    const result = await blogServices.createBlogContentFromDB(blogData)

    // blog to save blogData to database
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog created successfully",
      data: result
    });
  }
)

const getSingleBlogContent: RequestHandler = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await blogServices.getSingleBlogContentFromDB(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog fetched successfully",
    data: result,
  })
})

const getBlogContent: RequestHandler = catchAsync(async (req, res) => {

  const result = await blogServices.getBlogContentFromDB()
  // Response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
}

)


const updateBlogContent: RequestHandler = async (req, res) => {
  try {
    const blogData = req.body
    const blogid = req.params.id
    const result = await blogServices.updateBlogContentFromDB(
      blogid,
      blogData
    )
    if (result) {
      sendResponse(res, {
        success: true,
        message: 'Blog updated successfully',
        statusCode: httpStatus.OK,
        data: result,
      });
    }




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


const deleteBlogContent: RequestHandler = async (req, res) => {
  try {
    const blogid = req.params.id
    const result = await blogServices.deleteBlogContentByIdfromDB(blogid)

    if (!result?._id) {
      throw new AppError(httpStatus.NOT_FOUND, " blog not found");
    }

    const statuscode = 200

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      statusCode: statuscode,
    })


    if (result) {
      const statuscode = 200
      res.status(200).json({
        success: true,
        message: 'Blog deleted successfully',
        statusCode: statuscode,
      })
    }
  } catch (error) {
    const stackerror = new Error()
    res.json({
      message: 'An error occurred while deleting blog',
      status: false,
      error: error,
      stack: stackerror.stack,
    })
  }
}


export const blogController = {
  createBlogContent,
  getBlogContent,
  updateBlogContent,
  deleteBlogContent,
  getSingleBlogContent
}


// In user.controller.ts