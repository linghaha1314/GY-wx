import Mock from 'mockjs'

export default {
    getLogin: () => ({
        status: 0,
        message: 'success',
        data: {
            name: '小明',
            age: '12',
            sex: '男'
        }
    }),
    getPhone: () => ({
        status: 0,
        message: 'success',
        data: {
            name: '小明',
            age: '12',
            sex: '男'
        }
    }),
}