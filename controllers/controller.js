const users = require("../items")
const {v4:uuid} = require("uuid")
const getAllUsers = (req, reply) => {
  reply.send(users)
}

const getSingleUser = (req, reply) => {
  const { uid } = req.params

  let user = users.find((user) => user.uid == uid)
  console.log(user)
  reply.send(user)
}

const createUser = (req, reply) => {
  let {name} = req.body
  let newUser={
    uid:uuid(),
    name
  }
  users=[...users,newUser]

  reply.code(201).send(newUser)
}

const updateUser = (req, reply) => {
  const { uid } = req.query
  const {name} = req.body 
  users = users.map(user=>user.uid==uid ?{uid,name}:user)
  
  let user = users.find(user=>user.uid==uid)
  reply.code(200).send(user)
}

const deleteUser=(req,reply)=>{
  const {uid} = req.query
  console.log(users.filter(user=>user.uid!=uid))
  let userData=users.filter(user=>user.uid!=uid)
  reply.code(200).send({message:"User deleted successfully",users:userData})
}

module.exports = { getSingleUser, getAllUsers,createUser,deleteUser,updateUser }
