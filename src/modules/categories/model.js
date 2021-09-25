import { fetch, fetchAll } from '../../lib/postgres.js'

const CATEGORY_POST = `
    insert into categories(
        category_name,
        lang_id
    ) values ($1, $2)
    returning *
`

const CATEGORY_PUT = `
    update categories set
    category_name = $1
    where category_id = $2
    returning *
`

const CATEGORY_DELETE = `
    delete from categories 
    where category_id = $1
    returning *    
`

const CATEGORY_GET = `
    select  
        *
    from categories
    where 
        case
            when $1 > 0 then lang_id = $1
            else true
        end    
`



const categoryPost = ([{category_name, lang_id}]) => {
    try {
        return fetch(CATEGORY_POST, category_name, lang_id)
    }
    catch (error){
        console.log(error)
    }
}

const categoryDelete = ({ category_id }) => {
    try {
        return fetch(CATEGORY_DELETE, category_id)
    }
    catch (error) {
        console.log(error);
    }
}

const categoryUpdate = ({ category_id, category_name = '', lang_id = 0 }) => {
    try {
        return fetch(CATEGORY_PUT, category_id, category_name, lang_id)
    }
    catch(error) {
        console.log(error)
    }
}

const categoryGet = (lang = 0) => {
    try {
        console.log(lang);
        return fetchAll(CATEGORY_GET, lang)
    }
    catch(error) {
        console.log(error)
    }
}


export default {
    categoryPost,
    categoryDelete,
    categoryUpdate,
    categoryGet
}