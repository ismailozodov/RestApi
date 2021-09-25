export default gql`
    extend type Query {
        categories(lang: Int): [Category]
    }
    extend type Mutation {
        addCategory(langId: ID! categoryName: String!): MutationResponse 
        deleteCategory(categoryId: ID!): MutationResponse 
        putCategory(categoryName: String! categoryId: ID!): MutationResponse 
    }
    type Category {
        categoryId: Int
        categoryName: String
        langId: Int
    }
`