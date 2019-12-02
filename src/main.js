//1.只用common.js 的模块化规范
const {add,mul} =require('./mathUtils.js')
console.log(add(20,30),mul(30,40));

//2.使用es6的模块化规范
import {name,age,height} from "./infor";
console.log(name);
console.log(age);
console.log(height);