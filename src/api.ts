import axios from 'axios'

const apiConnection = axios.create({
  baseURL: 'https://devadmin.cliquify.me/api/branding'
  //baseURL: 'http://localhost:8080'
 })

export function getSignedURLForUpload(props: { name: string, type: string }): Promise<{ url: string }> {
  return new Promise((resolve, reject) => {
    apiConnection
      .post('/presignedurl', props)
      .then(({ data }) => {
        resolve(data)
      })
      .catch(err => this.handleError(err))
  })
}

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

interface Category {
  id: string
  title: string
}

export function getCategories(): Promise<Category[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await apiConnection.get('/elements-categories')
      resolve(data.data)
    } catch (err) {
      reject(err)
    }
  })
}