//req and response from hit use
import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { MessageSrvices } from './message.service'

const createNewMessages = catchAsync(async (req: Request, res: Response) => {
  const { name, email, message} = req.body

  const MessageData : any =  {
    name,
    email,
    message
  }
  const result = await MessageSrvices.createMessagesfromDB(MessageData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message is created succesfully',
    data: result,
  })
})


const getAllMessage: RequestHandler = catchAsync(async (req, res) => {

  const result = await MessageSrvices.getAllMessagesfromDB()
  // Response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message fetched successfully",
    data: result,
  });
});


const getMessageByID = async (req: Request, res: Response) => {
  try {
    const result = await MessageSrvices.getMessagesByIdfromDB(
      req.params.messageid
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Message fetched successfully",
      data: result,
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

const updateMessage = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const messageid = req.params.messageid
    const result = await MessageSrvices.updateMessagesByIdfromDB(
      messageid,
      productData
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Message Upodate successfully",
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

const deleteMessagebyID = async (req: Request, res: Response) => {
  try {
    const messageid = req.params.messageid
    const result = await MessageSrvices.deleteMessagesByIdfromDB(messageid)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Message Delete successfully",
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

export const messageController = {
  createNewMessages,
  getAllMessage,
  getMessageByID,
  updateMessage,
  deleteMessagebyID,
}
