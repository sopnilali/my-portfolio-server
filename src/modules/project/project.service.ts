import { TProjectInterface } from './project.interface';
import Projects from './project.model';

const createProjectsfromDB = async (
  payload: TProjectInterface
): Promise<TProjectInterface> => {
  const result = await Projects.create(payload)
  return result
}
const getAllProjectsfromDB = async () => {
   const result = await Projects.find()
  return result
}
const getProjectByIdfromDB = async (productid: string) => {
  const result = await Projects.findById(productid)
  return result
}

const updateProjectByIdfromDB = async (
  projectid: string,
  payload: TProjectInterface
) => {
  const result = await Projects.findByIdAndUpdate(projectid, payload, {
    new: true,
  })
  return result
}

const deleteProjectByIdfromDB = async (projectid: string) => {
  const result = await Projects.findByIdAndDelete(projectid)
  return result
}

export const ProjectSrvices = {
  createProjectsfromDB,
  getAllProjectsfromDB,
  getProjectByIdfromDB,
  updateProjectByIdfromDB,
  deleteProjectByIdfromDB,
}
