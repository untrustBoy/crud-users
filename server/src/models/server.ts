import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import routes from '../routes/user';
import bodyParser from 'body-parser'
import db from "../db/connection"

class Server{

    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3001'
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnet();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicacion corriendo en el puerto', this.port);
            
        })
    }

    routes(){
        this.app.get('/', (req:Request, res:Response)=>{
            res.json({
                msg: 'Api working'
            })
        })

        this.app.use('/api/users/', routes)
        this.app.use('/auth/', routes)
    }

    midlewares(){
        //Parse body
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use(bodyParser.json());
    }

    async dbConnet(){
        try {
            await db.authenticate();
            console.log('bd conecatada');            
        } catch (error) {
            console.log(error, 'Error al conectarse');
        }
        
    }

}

export default Server