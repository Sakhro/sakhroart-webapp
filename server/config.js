const { NODE_ENV } = process.env

const PORT = process.env.PORT || 3000
const DEV = NODE_ENV !== 'production'

module.exports  = {
  PORT,
  DEV
}