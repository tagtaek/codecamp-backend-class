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

class skyMonster extends Monster { //상속
    constructor(aaa){
        super(aaa+1) // 이 자식클래스에서 값을 받아서 부모에게 전달한다.
        // 공중 유닛은 공격력 1을 더줄거야.
    }

    run = () => { // 오버라이딩: 부모의 run()을 덮어 씀
        console.log("날아서 도망가자!!")
    }
}

class landMonster extends Monster {
    constructor(bbb){
        super(bbb)
    }

    run = () => {
        console.log("뛰어서 도망가자!!")
    }
}

const mymonster1 = new skyMonster(20) // 생성자까지 상속된다.
mymonster1.attack()
mymonster1.run()

const mymonster2 = new landMonster(50) // monster2
mymonster2.attack()
mymonster2.run()

// 상속: 몸통을 가져와서, 거기에 기능을 추가할래
// 전략패턴: 기계의 안쪽 부품들을 내가 원하는 것들로 뺐다 꼈다 할래.