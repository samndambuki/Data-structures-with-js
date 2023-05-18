const {reverseString} = require('./reverse')
const {concatString} = require('./concat')

// import {describe,it,expect} from 'jest'

test('should have a function reverse string defined',()=>{
    expect(reverseString).toBeDefined()
})

test('should have defined a return statement',()=>{
    let name = 'Sam'
    let result = reverseString(name)
    expect(result).toBeDefined()
})

test('should always return a string',()=>{
    let name = "Sam"
    let result = reverseString(name)
    expect(typeof result).toBe('string')
})

test('should return maS given "Sam"',()=>{
    let name = "Sam"
    let result = reverseString(name)
    expect(result).toBe('maS')
})

describe('Concat string test',()=>{
    test('should have a function named concat string',()=>{
        // expect(concatString).toBeDefined()
        expect(typeof concatString).toEqual('function')
    })

    test('should return concatinated strings',()=>{
        let input1 = "Sam"
        let  input2 = "Ndambuki"
        let result = concatString(input1,input2)
        expect(result).toBe("SamNdambuki")
    })
})