import supertest from 'supertest'
import { server } from '../index'

describe('server', () => {
  const request = supertest.agent(server)

  afterAll(() => {
    server.close()
  })

  it('should get /', async () => {
    const res = await request.get('/')

    expect(res.status).toBe(200)
    console.log('ccccccccc', res.text)
    expect(JSON.parse(res.text)).toEqual({
      data: 'Hello'
    })
  })
})
