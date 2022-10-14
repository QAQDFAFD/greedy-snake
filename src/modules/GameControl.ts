//引入类
import Food from './Food'
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏的控制器
class GameControl {
    //定义三个属性
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    //存储蛇的方向
    direction: string = ''
    isLive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    init() {
        //绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    //键盘按下的响应函数
    keydownHandler(e: KeyboardEvent) {
        //检查 key 的值是不是合法的
        this.direction = e.key
        // console.log(this.direction)
    }

    //创建蛇移动的方法
    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10
                break
            case 'ArrowDown':
                Y += 10
                break
            case 'ArrowLeft':
                X -= 10
                break
            case 'ArrowRight':
                X += 10
                break
        }


        if (this.checkEat(X, Y)) {
            console.log('吃到了食物')
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e: any) {
            alert(e.message)
            this.isLive = false
        }


        //定时调用
        this.isLive && setTimeout(() => this.run(),
            300 - (this.scorePanel.level - 1) * 30)

    }


    checkEat(x: number, y: number) {
        return x === this.food.X && y === this.food.Y
    }
}

export default GameControl