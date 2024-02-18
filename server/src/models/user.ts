import { DataTypes } from "sequelize"
import db from "../db/connection"

const User = db.define('Usuarios',{
    nombre:{
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    edad:{
        type: DataTypes.NUMBER
    },
    telefono:{
        type: DataTypes.NUMBER
    },
},{
    createdAt: false,
    updatedAt: false
})

export default User;