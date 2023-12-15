import type { ConsolaInstance } from 'consola'
import { createConsola } from 'consola'

class Logger {
  private consola: ConsolaInstance
  constructor(consola?: ConsolaInstance) {
    if (consola) {
      this.consola = consola
      return
    }
    this.consola = createConsola()
  }

  private sendLog() {
    
  }


  withtag(tag: string) {
    return new Logger(this.consola.withTag(tag))
  }

  log(...args: any[]) {
    this.consola.log(args)
  }

  info(...args: any[]) {
    this.consola.info(args)
  }

  success(...args: any[]) {
    this.consola.success(args)
  }

  warn(...args: any[]) {
    this.consola.warn(args)
  }

  error(...args: any[]) {
    this.consola.error(args)
  }
}
