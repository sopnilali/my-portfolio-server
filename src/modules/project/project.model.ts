import { model, Schema } from 'mongoose'
import { TProjectInterface } from './project.interface'

const ProjectSchema = new Schema<TProjectInterface>(
  {
    title: {
      type: String,
      required: true,

    },
   descriptions: {
      type: String,
      required: true,
    },
    tools: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    githubfrontend: {
      type: String,
      required: true,
    },
    livelink: {
      type: String,
      required: true,
    },
    githubbackend: {
      type: String,
      required: true,
    },
    projectduration: {
      type: String,
      required: true,
    },
    projectstatus: {
      type: String,
      required: true,
    }
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
)

const Projects = model<TProjectInterface>('projects', ProjectSchema)

export default Projects
