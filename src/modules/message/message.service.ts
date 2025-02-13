import { TMessages } from './message.interface';
import Messages from './message.model';

const createMessagesfromDB = async (
  payload: TMessages
): Promise<TMessages> => {
  const result = await Messages.create(payload)
  return result
}
const getAllMessagesfromDB = async () => {
   const result = await Messages.find().sort({ createdAt: -1 });
  return result
}
const getMessagesByIdfromDB = async (messageid: string) => {
  const result = await Messages.findById(messageid)
  return result
}

const updateMessagesByIdfromDB = async (
  messageid: string,
  payload: TMessages
) => {
  const result = await Messages.findByIdAndUpdate(messageid, payload, {
    new: true,
  })
  return result
}

const deleteMessagesByIdfromDB = async (messageid: string) => {
  const result = await Messages.findByIdAndDelete(messageid)
  return result
}

export const MessageSrvices = {
  createMessagesfromDB,
  getAllMessagesfromDB,
  getMessagesByIdfromDB,
  updateMessagesByIdfromDB,
  deleteMessagesByIdfromDB,

}
