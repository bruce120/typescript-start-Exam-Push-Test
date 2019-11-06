let article = 'jrtrehrirehtrnfkldkgoertuirejoreijtjrg'     
let key = 'e'          
let ans = 0          

let b = function () {          
    for (let i = 0; i < article.length; i++) {          
        console.log(article.charAt(i))          
        if (article.charAt(i) === key) {         
            ans += 1          
        }
    }
}

b()
console.log("我的答案:",ans)