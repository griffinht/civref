import Itemstack from "../minecraft/Itemstack.js";
import Element from "../html/Element.js"

export default interface InputItem extends Element {
    getOutput(time: number): Itemstack[]
}