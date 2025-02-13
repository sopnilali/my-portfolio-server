import { model, Schema } from 'mongoose'
import { TMessages } from './message.interface'

const MessageSchema = new Schema<TMessages>(
  {
    name: {
      type: String,
      required: true,

    },
   email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
)

const Messages = model<TMessages>('messages', MessageSchema)

export default Messages
