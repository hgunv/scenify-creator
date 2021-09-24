import axios from 'axios'

const apiConnection = axios.create({ baseURL: 'https://api.potion.pro' })

export function createShape(value: any) {
  return new Promise((resolve, reject) => {
    apiConnection
      .post('/shapes', value)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}
