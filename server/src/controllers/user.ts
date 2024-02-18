import { Request, Response } from 'express'
import User from "../models/user"

export const getAllUsers = async (req:Request, res:Response) => {
    const listProduct = await User.findAll()

    res.json(listProduct)
}

export const getUser = async (req: Request, res: Response) => { 
    const { id } = req.params   
    const user = await User.findByPk(id)

    if(user){
        res.json(user)
    }else{
        res.status(404).json({msg: 'no se encontro el usuario'});
        
    }
}

export const deleteUser = async (req: Request, res: Response) => { 
    const { id } = req.params  
    const deleteUser = await User.findByPk(id)

    if(!deleteUser){
        res.status(404).json({
            msg: "usuario no encoentrado"
        })
    }else{
        deleteUser.destroy();
        res.json({
            msg:'El usuario fue eliminado'
        })
        return
    }
    
    res.json({
        msg: 'delete Usuario',
        id: id
    })
}

export const postUser = async (req: Request, res: Response) => { 
    const {body } = req  
    console.log(body) 
    
    try {
        await User.create(body)
        
        res.json({
            msg: 'El usuario fue creado con exito',
            body: body
        })
    } catch (error) {
        console.log(error,'error al crear');
        res.json({
            msg: "Error al crear un usuario"
        })
        
    }

}

export const updateUser = async (req: Request, res: Response) => { 
    const { id } = req.params   
    const {body } = req  
    
    const user = await User.findByPk(id)

    try {
        if(user){
            await user.update(body);
            res.json({
                msg: 'usuario actualizado'
            })
        }else{
            res.status(404).json({msg: 'no se encontro el Usuario'});
            
        }
        
    } catch (error) {
        console.log(error,'error al crear');
        res.json({
            msg: "Error al crear un usuario"
        })
        
    }

}