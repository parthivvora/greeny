const BASE_URL = "http://localhost:7000/api/"

const apiTypes = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
}

const apiKeys = {
    userRegister: `${BASE_URL}user/register`,
    userLogin: `${BASE_URL}user/login`,
    getUserProfile: `${BASE_URL}user/profile`,
    editUserProfile: `${BASE_URL}user/profile/edit`,
    changePasswordOfUserProfile: `${BASE_URL}user/changePassword`,

    // updateSocietyInfo: `${BASE_URL}updateSocietyInfo/`,
    // getAllUserInfo: `${BASE_URL}getAllUserInfo/`,
    // getAllInfoDash: `${BASE_URL}getAllInfoDash`,
}

export { apiKeys, apiTypes }