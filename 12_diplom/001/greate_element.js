const container = document.getElementById('container');

class CreateAnyElements{

  constructor(options){
    this.element = document.createElement(options.tag)
    for (const[key, value] of Object.entries(options.params)) {
      if (key == 'classList') {
        for (const newClass of value) this.element.classList.add(newClass)
      } else this.element[key] = value
    }

    if (options.parent) options.parent.append(this.element)

    if (options.childs)
    for (const child of options.childs) {
      let childOptions = null

      childOptions = {
        tag: child.tag,
        params: child.params,
        parent: this.element,
        childs: ''
      }
      if (child.childs) {
        console.log('child.childs :>> ', child.childs);
        childOptions.childs = child.childs
      }
      new CreateAnyElements(childOptions)
    }

  }
}

let dataElements = [
  {
    tag: 'h1',
    params: {
      classList: ['red', 'big'],
      textContent: 'Привет, 2017',
    },
    parent: container
  },
  {
    tag: 'form',
    params: {
      classList: ['form', 'theme'],
      name: 'form-input',
      id: 'form-1',
    },
    childs: [
      {
        tag: 'input',
        params:
        {
          classList: ['input'],
          placeholder: 'введите данные',
          type: 'text',
        },
      },
      {
        tag: 'button',
        params:
        {
          classList: ['button'],
          placeholder: 'введите данные',
          type: 'submit',
        },
        childs: [{
          tag: 'span',
          textContent: 'Отрпавить',
        }
        ],
      }
    ],
    parent: container
  },

]

for (const elem of dataElements) {
  new CreateAnyElements(elem)
}








