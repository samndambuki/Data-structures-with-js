const {reverseString} = require('./reverse')

// import {describe,it,expect} from 'jest'

test('should have a function reverse string defined',()=>{
    expect (reverseString).toBeDefined()
})

test('should always return a string',()=>{
    let name = "Sam"
    let result = reverseString(name)
    expect(typeof result).toBe('string')
})