import { createConsola } from 'consola'

export const logger = createConsola({
  reporters: [
    {
      log: (logObj) => {
        console.log(JSON.stringify(logObj))
      },
      info: (logObj) => {
        console.log(JSON.stringify(logObj))
      },
    },
  ],
})

logger.log('foo bar')

class Logger {
  constructor() {
    this.log = this.log.bind(this)
    this.info = this.info.bind(this)
  }

  log(...args) {
    console.log(JSON.stringify(...args))
  }

  info(logObj) {
    console.log(JSON.stringify(logObj))
  }

  error(logObj) {
    console.log(JSON.stringify(logObj))
  }
}
