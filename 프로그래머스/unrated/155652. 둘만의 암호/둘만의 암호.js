function solution(s, skip, index) {

    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    let arrS = [...s]
    let arrSkip = [...skip]

    console.log('arrS', arrS)
    console.log('arrSkip', arrSkip)
    
    let alpha = alphabet.filter((el)=> !arrSkip.includes(el))

    console.log('alpha', alpha)
    
    let ans = arrS.map((el)=>{
      let num = alpha.indexOf(el)
      let addNum = num + index
      
      return alpha[addNum%alpha.length]
    })
    return ans.join('')
}