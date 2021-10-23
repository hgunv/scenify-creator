import axios from 'axios'

const apiConnection = axios.create({ baseURL: 'http://localhost:8080' })

export function createShape(value: any) {
  return new Promise((resolve, reject) => {
    apiConnection
      .post('/elements', value)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}
