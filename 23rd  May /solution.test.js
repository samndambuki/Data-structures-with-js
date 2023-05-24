const {capitalizeWord} = require('./solution.')

test('capitalize word should capitalize the first letter of each word',()=>{
    const inputString="hello there"
    const expectedOutput = "Hello There"

    const result = capitalizeWord(inputString)
    expect(result).toBe(expectedOutput)
})

test('capitalizeWord should handle an empty string',()=>{
    const inputString = ""
    const expectedOutput = ""

    const result = capitalizeWord(inputString)
    expect(result).toBe(expectedOutput)
})

test('capitalizeWord should capitalize the first letter of a single word',()=>{
    const inputWord="hello"
    const outputWord="Hello"

    const result = capitalizeWord(inputWord)
    expect(result).toBe(outputWord)

})