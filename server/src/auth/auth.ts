import express, { Request, Response, Router} from 'express'
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Mock de usuario (en un entorno real, se usaría una base de datos)
const mockUser = {
    username: 'usuario',
    password: 'passUser' // hashed password: "password"
};

// Ruta de login
export const login = async (req:Request, res:Response) => {
    const { username, password } = req.body;
    console.log(username,password, password, mockUser.password)

    if (username === mockUser.username && password === mockUser.password) {
        const token = jwt.sign({ username }, 'keyAuth');
        res.json({ token, message:"success" });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

export default login
