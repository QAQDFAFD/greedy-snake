//定义计分牌类
class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    //最高的等级
    maxLevel: number
    //设置获得多少分之后升级
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.querySelector('.score')!
        this.levelEle = document.querySelector('.level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    //加分的方法
    addScore() {
        this.score++
        this.scoreEle.innerHTML = `${this.score}`
        if (this.score % this.upScore === 0) this.level++
    }

    //等级提升
    levelUp() {
        if (this.level < this.maxLevel)
            this.levelEle.innerHTML = `${this.level}`
    }
}

export default ScorePanel