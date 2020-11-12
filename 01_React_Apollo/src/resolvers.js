import data from './data.json'

const resolvers = {
    Query: {
        hello: () => "Hello Madafaka",
        launches: () => data
    }
}

export default resolvers