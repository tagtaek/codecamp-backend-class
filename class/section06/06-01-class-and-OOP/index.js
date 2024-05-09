class Monster {
    // class 안의 모든 변수 및 함수에는 const가 붙지 않고, 앞에 "this" 가 생략되어 있음.
    power = 10

    constructor(qqq){
        // const mymon = new monster() 이 괄호 열고 닫을 때 실행되는 함수
        // const mymon = new monster(20) 으로 객체를 생성하면, 20을 power 받는 등의 일을 할 수 있음.
        this.power = qqq
    }

    attack = () => {
        console.log("공격하자!!")
        console.log("내 공격은 " + this.power + "야!!!")
    }

    run = () => {
        console.log("도망가자!!")
    }
}

const mymonster1 = new Monster(20) // monster1
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(50) // monster2
mymonster2.attack()
mymonster2.run()