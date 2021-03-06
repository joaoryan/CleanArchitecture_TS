module.export = {
    root: ['<rootDir>/src'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1'
    }
}