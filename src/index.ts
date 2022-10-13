//引入样式
import './index.less'

//引入类
import Food from './modules/Food'
import ScorePanel from "./modules/ScorePanel";

const food = new Food()
food.change()
const panel = new ScorePanel()
panel.addScore()
panel.addScore()
