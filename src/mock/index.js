import Mock from 'mockjs'
import login from './login'

Mock.mock(/\/getLogin/,'post',login.getLogin)