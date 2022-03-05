import { MAKE_CATEGORY, GET_CATEGORY } from "../Constant"

export const createCategory = (data) => {
    // console.log(data)
    return {
        type: MAKE_CATEGORY,
        data: data
    }
}

export const getCategory = (data) => {
    return {
        type: GET_CATEGORY,
        data: data
    }
}