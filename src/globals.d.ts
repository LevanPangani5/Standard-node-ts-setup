//declare in global namespace
declare global {
  namespace NodeJS {
    interface Global {
      gContact: {
        name: string
      }
    }
  }
}
