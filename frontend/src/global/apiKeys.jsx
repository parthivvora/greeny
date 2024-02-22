const BASE_URL = "http://localhost:7000/api/"

const apiTypes = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
}

const apiKeys = {
    // User
    userRegister: `${BASE_URL}user/register`,
    userLogin: `${BASE_URL}user/login`,
    getUserProfile: `${BASE_URL}user/profile`,
    editUserProfile: `${BASE_URL}user/profile/edit`,
    changePasswordOfUserProfile: `${BASE_URL}user/changePassword`,

    // Blog
    getAllBlogs: `${BASE_URL}admin/getAllBlogs`,
    getSingleBlog: `${BASE_URL}admin/getSingleBlog`,

    // Brand
    getAllBrands: `${BASE_URL}admin/getAllBrands`,
    getSingleBrand: `${BASE_URL}admin/getSingleBrand`,

    // Banners
    getAllBanners: `${BASE_URL}admin/getAllBanners`,

    // Products
    getAllProducts: `${BASE_URL}admin/getAllProducts`,
    getAllSingleProductData: `${BASE_URL}admin/getAllSingleProductData`,

    // Categories
    getAllCategories: `${BASE_URL}admin/getAllCategory`,
}

export { apiKeys, apiTypes }