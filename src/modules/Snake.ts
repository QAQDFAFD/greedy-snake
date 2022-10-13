class Snake {
    headElement: HTMLElement
    body: NodeListOf<Element>
    //获取蛇的容器
    element: HTMLElement


    constructor() {
        this.element = document.querySelector('.snake')!
        this.headElement = document.querySelector('.snake > div')!
        this.body = document.querySelectorAll('.snake > div')!
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
        this.headElement.style.left = `${value}px`

    }

    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 290)
            throw new Error('蛇撞墙了,Game Over')
        this.headElement.style.top = `${value}px`
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

}

export default Snake