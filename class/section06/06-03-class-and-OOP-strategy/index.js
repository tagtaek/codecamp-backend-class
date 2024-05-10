class skyComponent{
    run = () => {
        console.log("날아서 도망가자!!")
    }
}

class landComponent{
    run = () => {
        console.log("뛰어서 도망가자!!")
    }
}

class Monster {
    // class 안의 모든 변수 및 함수에는 const가 붙지 않고, 앞에 "this" 가 생략되어 있음.
    power = 10
    component;

    constructor(qqq){
        this.component = qqq
        // 부품을 받아온다.
    }

    attack = () => {
        console.log("공격하자!!")
        console.log("내 공격은 " + this.power + "야!!!")
    }

    run = () => {
        this.component.run()
        // 받아온 부품이 가지고 있는 run()을 사용한다.
    }
}

const mymonster1 = new Monster(new skyComponent()) // skyComponent 끼워넣기
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(new landComponent()) // monster2
mymonster2.attack()
mymonster2.run()

// 상속: 몸통을 가져와서, 거기에 기능을 추가할래
// 전략패턴: 기계의 안쪽 부품들을 내가 원하는 것들로 뺐다 꼈다 할래. => 유지보수하기 좋다.