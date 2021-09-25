import model from './model.js'

export default {
    Query: {
        categories: async(_, args) => await model.categoryGet(args)
    },
    Mutation: {
        addCategory: async(_, args) => {
            try {
                let category = await model.categoryPost(args)
                if(category) {
                    return {
                        status: 201,
                        message: "The category added",
                        data: category
                    }
                }
                else throw new Error('error')
            }
            catch (error) {
                return {
                    status: 400,
                    message: error.message,
                    data: null
                }
            }
        },

        deleteCategory: async(_, args) => {
            try {
                let category = await model.categoryDelete(args)
                if(category) {
                    return {
                        status: 201,
                        message: "The category deleted",
                        data: category
                    }
                }
                else throw new Error('error')
            }
            catch (error) {
                return {
                    status: 400,
                    message: error.message,
                    data: null
                }
            }
        },

        updateCategory: async(_, args) => {
            try {
                let category = await model.categoryUpdate(args)
                if(category) {
                    return {
                        status: 201,
                        message: "The category updated",
                        data: category
                    }
                }
                else throw new Error('error')
            }
            catch (error) {
                return {
                    status: 400,
                    message: error.message,
                    data: null
                }
            }
        },

        Categories: {
            categoryId: global => global.category_id,
            categoryName: global => global.category_name,
            langId: global => global.lang_id,
        }
    }
}