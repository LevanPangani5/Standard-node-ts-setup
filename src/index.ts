import {
  createServer,
  IncomingMessage,
  ServerResponse
} from 'http'
import { hello } from './helper'
hello()
const x = 5

console.log(x)
export const server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {
      'Content-type': 'application-json'
    })
    res.write(
      JSON.stringify({
        data: 'Hello'
      })
    )
    res.end()
  }
)

server.listen(3000, () => {
  console.log(`listening to port:3000`)
})
