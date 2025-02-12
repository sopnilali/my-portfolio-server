import express, { Application, Request, Response } from 'express'
import router from './routes';
import cors from 'cors';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorhandler';

const app: Application = express()

app.use(express.json())
// CORS

app.use(cors({
    origin: [
        'https://my-new-portfolio-sepia-three.vercel.app',
        'http://localhost:3000'
    ], // Allow requests from this specific origi,
    credentials: true 
},
));


// application routes
app.use('/api/v2', router);




// api route
app.get('/', (req: Request, res: Response) => {
    res.json({
        status: true,
        message: 'Welcome to Portfolio BLog API!',
    })
})


app.use(globalErrorHandler);
//Not Found
app.use(notFound)



export default app