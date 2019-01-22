// @flow
// import { axios as api } from 'axios';

const companies = [
    {
        id: 1,
        companyName: 'Хлеб и молоко',
        phone: '+375 (232) 77-66-55'
    },
    {
        id: 2,
        companyName: 'Мясо и колбаса',
        phone: '+375 (232) 22-33-44'
    },
    {
        id: 3,
        companyName: 'Соль и сахар',
        phone: '+375 (232) 99-88-11'
    }
];
// export const getAllCompaniesApi = () =>
//     api.get();

export const getAllCompaniesApi = () =>
    Promise.resolve(companies);
