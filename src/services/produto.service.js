import api from './api'

const findAllProducts = () => api.get('/produto/findAll')
    .then((response) => response)
    .catch((err) => err);

const findProductById = (id) => api.get(`/produto/findById/${id}`)
    .then((response) => response)
    .catch((err) => err)

export { findProductById, findAllProducts }