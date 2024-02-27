module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest' //target any ts file use ts-jest to transform it, first we need to transform it to js and than run the test
  },
  testEnvironment: 'node',
  //check in src at any level. checks if it ends with spec or test. js or ts
  testRegex: './src/.*\\.(test|spec)?\\.(js|ts)',
  //files that jest test could come across during execution
  moduleFileExtensions: ['ts', 'js', 'json'],
  //where project root folder is
  roots: ['<rootDir>/src']
}
