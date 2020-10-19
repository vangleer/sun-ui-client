//  1、判断出数据类型是不是数组。
function isArray(arr) {
  // return !!arr.push
  return arr instanceof Array
}

// 2、写一个函数:将一个字符串翻转输出 如输出Hello world！输出：！dlrow olleh
function reverse(str) {
  // return str.split('').reverse().join('')
  let returnValue = '';
  for(let i = str.length-1;i--;i>=0) {
    returnValue += str[i]
  }
  return returnValue
}

// 3、写一个函数，随机生成长度的字符串。如指定长度4输出hcs3
function RandomStr(num) {
  return Math.random().toString(36).substr(2,4)
}

// 4、输入一个数组如：〔1，3，5，6，2，1，3，4〕，去掉数组中的3，返回一个新数组。
function filter(arr) {
  return arr.filter(item=> item !== 3)
}

// 5、输入一个对象如：｛a：1.b：2，c;3｝输出一个格式化的字符串，如︐a：1；b：2；c：3︐
function objectToString(obj) {
  return JSON.stringify(obj).replace(/\{|\}/g,'')
}

// 6、给定一个字符串，找出其中不含有重复字符的 最长子串的长度。如输入abcabcbcbb输出3
function getLongestChar(str) {
  let arr = []
  let resultValue = ''
  str.split('').forEach(item=>{
    if(resultValue.indexOf(item)==-1) {
     resultValue+=item
    } else {
     arr.push(resultValue)
       resultValue = item
    }
  })
  return Math.max(...arr.map(item => item.length))
}

 // 7、从URL中获取word参数值 如url：https://m.baidu.com?word=刘德华&a=1输出刘德华
 function getWord(url) {
  let obj  = {}
   let params = url.substring( url.lastIndexOf('?') + 1)
   params.split('&').forEach(item => {
     let currentArr = item.split('=')
     obj[currentArr[0]] = currentArr[1]
   })
   return obj['word']
}

// 8、写一个函数：找出字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串。如:输入：〔“flower”，“flow”，”flinght” 〕输出：“fl”
function getLongestCommonPrefix(strs) {
  let result = ""
  if(strs.length<=0) { //该字符数组为空，直接返回“”
    return result
  }                 
  let i =0 
  // 用第一个字串的长度来操作，因为无论他是否为最长还是最短的串，都不影响结果                      
  while(i<strs[0].length) 
  {
      let temp = strs[0][i]; // 将第一个字串的第i个字符赋给temp
      for(let j = 1;j<strs.length;j++)// 通过j++来进行与剩下的字串的第i个字符进行比较
      {
          if(strs[j][i]==temp)   // 如果第j个字串的第i个字符与temp相等，则判断下一个字串（j+1）的第i 个字符
              continue
          else 						
              return result
      }
      result += temp
      i++
  }
  return result
}

   // 9、给定一个排好序的数组（从小到大）和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。数组中无重复元素
   function fun(arr,num) {
    // 排序数组 
    arr.sort((a,b) => a-b)
    let resultValue = 0
    let index
    if(arr.indexOf(num)==-1) {
      if(num>arr[arr.length-1]) {
        arr.push(num)
        index = arr.length-1
      }
      if(num<arr[0]) {
        arr.unshift(num)
        index = 0
      }
      for(let i = 0;i<arr.length;i++) {
        if(arr[i]>num) {
          index = i + 1
          arr.splice(index,num,0)
          break
        }
      }
    } else {
      arr.forEach((item,i)=>{
        if(item===num) {
          index = i
        }
      })
    }
    return index
 }

 /**
  * 
  * 10、输入一个区间的集合，请合并所有重叠的区间。
  * 如输入：〔〔1，3〕，〔2，6〕，〔8，10〕，〔15，18〕〕
  * 输出：〔〔1，6〕，〔8，10〕，〔15，18〕 
  * tips:因为区间〔1，3〕和〔2，6〕重叠，所以将它们合并为〔1，6〕。
  */
 function merge(intervals) {
  if(intervals==null||intervals.length<=1) return intervals;
  let list = []
  let i = 0, n = intervals.length;
  while(i<n){
      let l = intervals[i][0];
      let r = intervals[i][1];
      while(i<n-1&&r>=intervals[i+1][0]){
          r = Math.max(r,intervals[i+1][1]);
          i++;
      }
      list.push({l,r});
      i++;
  }
  return list
}