class Snake {
    headElement: HTMLElement
    body: HTMLCollection
    //获取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.querySelector('.snake')!
        this.headElement = document.querySelector('.snake > div')!
        this.body = document.getElementsByClassName('snake-body')!
        console.log(this.body.length)
    }

    get X() {
        return this.headElement.offsetLeft
    }

    get Y() {
        return this.headElement.offsetTop
    }

    set X(value: number) {
        if (this.X === value) return
        if (value < 0 || value > 290)
            throw new Error('蛇撞墙了')
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            console.log('请勿水平掉头')
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }


        }

        this.moveBody()
        this.headElement.style.left = `${value}px`
        this.checkHead()
    }

    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 290)
            throw new Error('蛇撞墙了,Game Over')
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            console.log('请勿垂直掉头')
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.headElement.style.top = `${value}px`
        this.checkHead()
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div class="snake-body"></div>')
    }

    //添加一个蛇身体移动的方法
    moveBody() {
        for (let i = this.body.length - 1; i > 0; i--) {
            let x = (this.body[i - 1] as HTMLElement).offsetLeft
            let y = (this.body[i - 1] as HTMLElement).offsetTop
                // console.log(`这是蛇身体的倒数第${i}个小块`, x, y)
            ;(this.body[i] as HTMLElement).style.left = `${x}px`
            ;(this.body[i] as HTMLElement).style.top = `${y}px`
        }
    }

    checkHead() {
        //获取所有的身体坐标，判断是否重叠
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement
            // console.log(this.X, this.Y)
            // console.log(`第${i}个元素`, bd.offsetLeft, bd.offsetTop)
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('TM撞到自己了')
            }
        }
    }
}

export default Snake