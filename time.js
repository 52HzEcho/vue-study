
setTimeout(()=>{
  console.log('3秒之后的输出')
},3000)

// console.log('__dirname'+__dirname)
// console.log('filename',__filename)
// console.log('pid'+process.pid)

// var date=new Date()
// console.log('当前时间',date.toLocaleTimeString())
// var arr1=[
//   {
//     id:'1',
//     name:'嘻嘻'
//   },
//   {
//     id:'2',
//     name:'啦啦'
//   }
// ]
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
console.log(a1)

let b1 = [1, 2];
// 写法一
let b2 = [...b1];
b2[0]=3
console.log(b1)
console.log(b2)

var obj1=[
  {
    id:'0',
    name:'嘻嘻'
  },
  {
    id:'2',
    name:'拉拉'
  }
]
var obj2=obj1.concat()
console.log(obj1)
console.log(obj2)
obj2[1].name = '噗噗噗'
console.log(obj1)
console.log(obj2)

let obj4=JSON.parse(JSON.stringify(obj1))
console.log(obj4)
obj4[1].name='呜呜呜'
console.log(obj1)
console.log(obj4)

var arr = [{old: 'old'}, ['old']];
var new_arr = JSON.parse(JSON.stringify(arr));
new_arr[1][0] = 'new';
console.log(arr); // [{old: 'new'}, ['new']]
console.log(new_arr); // [{old: 'new'}, ['new']]