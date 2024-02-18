import { Sequelize }  from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', '', {
    host: 'localhost',
    dialect:"mysql"
});
console.log(sequelize);


export default sequelize