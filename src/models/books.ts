import { db } from "../config/database";
import{Model,DataTypes,InferAttributes, InferCreationAttributes } from "sequelize"

 class Books extends Model <InferAttributes<Books>, 
InferCreationAttributes<Books>>{
  declare id : string
  declare name : string
  declare author : string
  declare yearOfPublish : string
  declare isPublished : boolean

}
Books.init({
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull:true
  },
  name:{
    type: DataTypes.STRING,
   allowNull:false
},
author:{
  type: DataTypes.STRING,
 allowNull:false
},
yearOfPublish:{
  type: DataTypes.STRING,
 allowNull:false
},
isPublished:{
  type: DataTypes.STRING,
 allowNull:false
}
},
 {
  sequelize:db,
  modelName:"book",
  tableName:"book"

 })
 export default Books

 
