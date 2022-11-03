import { block } from "../utils";
import { ImageBlock, TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
  constructor(selector, updateCallBack) {
    this.$el = document.querySelector(selector);
    this.update = updateCallBack

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.add.bind(this));
  }

  get template() {
    return [block("Text Block", 'text'), block("Title Block", 'title'), block("Image Block", 'image')].join("");
  }

  add(e) {
    e.preventDefault();

    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    // const newBlock = type === 'text' 
    // ? new TextBlock(value, {styles}) 
    // : new TitleBlock(value, {styles})
    let newBlock;
    if(type === 'title') {
        newBlock = new TitleBlock(value, {styles})
    } else if(type === 'image') {
        newBlock = new ImageBlock(value, {styles})
    } else {
        newBlock = new TextBlock(value, {styles})
    }

    this.update(newBlock)

    e.target.value.value = '';
    e.target.styles.value = '';
  }
}
