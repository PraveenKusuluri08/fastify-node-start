const { getSingleUser, getAllUsers, createUser, deleteUser, updateUser } = require("../controllers/controller")
const optsGetAllUsers = {
  schema: {
    tags: ["Users"],
    response: {
      200: {
        type: "array",
        description: "Get all users from the users list",
        items: {
          type: "object",
          properties: {
            uid: {
              type: "number",
              example: 111111,
            },
            name: { type: "string", example: "Praveen" },
          },
        },
      },
      500: {
        type: "object",
        properties: {
          statusCode: { type: "number" },
          error: { type: "string" },
          message: { type: "string" },
        },
      },
    },
  },
  handler: getAllUsers,
}

const getSingleUseropts = {
  schema: {
    tags: ["User"],
    summary: "Returns single user from users list",
    response: {
      200: {
        type: "object",
        properties: {
          uid: { type: "number" },
          name: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          statusCode: { type: "number" },
          error: { type: "string" },
          message: { type: "string" },
        },
      },
    },
  },
  handler: getSingleUser,
}
const createUserOpts={
  schema:{
    tags:["Users","NewUser"],
    summary:"Creates New User",
    response:{
      201:{
        type:"object",
        properties: {
          name:{type:"string"},
          uid:{type:"string"}
        }
      },
      500:{
        type:"object",
        properties: {
          error:{type:"string"},
          message:{type:"string"},
          statusCode:{type:"integer"}
        }
      }
    }
  },
  handler:createUser
}

const updateUserOpts={
  schema:{
    tags:["Users","Update User"],
    summary:"Update user",
    querystring:{
      type:"object",
      required:["uid"],
      properties: {
        uid:{type:"string"}
      }
    },
    response: {
      200:{
        type:"object",
        properties: {
          uid:{type:"string"},
          name:{type:"string"}
        }
      },
      500:{
        type: "object",
        properties:{
          error:{type:"string"},
          message:{type:"string"},
          statusCode: { type: "number"}
        }
      }
    }
  },
  handler:updateUser
}

const deleteUserOpts={
  schema:{
    tags:["Delete User"],
    summary:"Delete user from the users list",
    querystring:{
      type:"object",
      required:["uid"],
      properties:{
        uid:{type:"number"}
      }
    },
    response: {
      200:{
        type:"object",
        properties: {
          message:{type:"string"},
          users:{
            type:"array",
            items: {
          type: "object",
          properties: {
            uid: {
              type: "number",
              example: 111111,
            },
            name: { type: "string", example: "Praveen" },
          },
        },
          }
        }
        
      },
      500:{
        type:"object",
        properties: {
          error:{type:"string"},
          message:{type:"string"},
          statusCode: { type: "number"}
        }
      }
    }
  },
  handler:deleteUser
}

module.exports = { getSingleUseropts, optsGetAllUsers,createUserOpts,deleteUserOpts,updateUserOpts}
