const BASE_URL = "http://localhost:7000/api/"

const apiTypes = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
}

const apiKeys = {
    userRegister: `${BASE_URL}user/register`,
    userLogin: `${BASE_URL}user/profile`,
    getUserProfile: `${BASE_URL}user/profile`,

    getAllSocietyInfo: `${BASE_URL}getAllSocietyInfo`,
    getSingleSocietyInfo: `${BASE_URL}getSingleSocietyInfo/`,
    updateSocietyInfo: `${BASE_URL}updateSocietyInfo/`,
    getAllUserInfo: `${BASE_URL}getAllUserInfo/`,
    getAllInfoDash: `${BASE_URL}getAllInfoDash`,
}

export { apiKeys, apiTypes }