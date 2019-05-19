const getUser = (req, res, next) => {
  try {
    return res.status(200).send({
      sucess: true,
      message: `Hello World, ${req.method} `
    })
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: `Hello World, ${req.method} `
    })
  }
}

const createUser = (req, res, next) => {
  try {
    return res.status(200).send({
      sucess: true,
      message: `Hello World, ${req.method} `
    })
  } catch (error) {
    return res.status(500).send({
      sucess: true,
      message: `Hello World, ${req.method} `
    })
  }
}

const updateUser = (req, res, next) => {
  try {
    return res.status(200).send({
      sucess: true,
      message: `Hello World, ${req.method} `
    })
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: `Hello World, ${req.method} `
    })
  }
}
const deleteUser = (req, res, next) => {
  try {
    return res.status(200).send({
      sucess: true,
      message: `Hello World, ${req.method} `
    })
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: `Hello World, ${req.method} `
    })
  }
}

export {
  getUser,
  deleteUser,
  updateUser,
  createUser
}
