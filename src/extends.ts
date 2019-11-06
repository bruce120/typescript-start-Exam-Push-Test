class Animal {          
    name: string;          
    age: number;          
    constructor(n: string, a: number) {          
        this.name = n;          
        this.age = a;          
    }
    eat(){
        console.log("我是",this.name,",我",this.age,"歲，我很會吃飯")
    }

    playgame(){
        console.log("我是",this.name,"我很會玩");
    }
}

class Bird extends Animal{          
    constructor(name:string,age:number){          
        super(name,age)
    }
    fly(){          
        console.log("我是",this.name,",我",this.age,"歲，我很會飛")
    }
    eat(){
        super.eat();          
        /*console.log('我複寫了我老爸的');*/          
    }
    playgame(){
        super.playgame();
    }
}
let bird1 = new Bird('麻雀',24);         
let Animal1 = new Animal('獅子',1);          

bird1.eat()
bird1.fly()
bird1.playgame()

Animal1.eat()
Animal1.playgame()