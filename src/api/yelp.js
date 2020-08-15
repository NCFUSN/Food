import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rBxAjf67XIA0BUUqVcKbZsUNw_ailXoQUFF4Ta8BopONAefNJEvY-_dsiZ0BSMKDaCSJebHz8Kf5cW1pG_ZDT4tFAHCEX0N3aKOya6jngRn0RYoBK_Jum_o1az4dX3Yx'
    }
});

