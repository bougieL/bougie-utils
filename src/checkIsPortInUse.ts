import * as net from 'net'

interface ICheckIsPortInUseOption {
  timeout?: number
  host?: string
}

export const checkIsPortInUse = (
  port: number,
  { timeout = 1000, host = '127.0.0.1' }: ICheckIsPortInUseOption = {}
) => {
  return new Promise((resolve, reject) => {
    const socket = new net.Socket()
    const onError = () => {
      socket.destroy()
      reject()
    }
    socket.setTimeout(timeout)
    socket.once('error', onError)
    socket.once('timeout', onError)
    socket.connect(port, host, () => {
      socket.end()
      resolve()
    })
  })
}
