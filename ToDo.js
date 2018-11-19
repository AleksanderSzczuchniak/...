class ThingToDo {

    constructor() {
        this.exercises = []
        this.render()
    }
    addExercise(text) {
        this.exercises.push(new Exercise(text))
        this.render()

    }
    render() {
        document.body.innerHTML = ''

        this.makePort()

        const ul = document.createElement('ul')

        this.exercises.forEach((exercise, index) => {
            const li = document.createElement('li')
            const buttonDelete = document.createElement('button')
            buttonDelete.innerText = 'Delete exercise from the list'

            buttonDelete.addEventListener('click',
            () => this.deleteExercise(index))
            li.innerText = exercise.text
            li.appendChild(buttonDelete)
            ul.appendChild(li)
        })
        document.body.appendChild(ul)

    }
    makePort() {
        const input = document.createElement('input')
        const buttonAdd = document.createElement('button')
        buttonAdd.innerText = 'Add exercise to list'


        buttonAdd.addEventListener(
            'click',
            () => this.addExercise(input.value)
        )



        document.body.appendChild(input)
        document.body.appendChild(buttonAdd)

    }

    deleteExercise (index) {
        this.exercises = this.exercises.slice(0, index).concat(this.exercises.slice(index + 1))
        this.render()
    }
    
}


class Exercise {
    constructor(text) {
        this.text = text
    }
}
const toDo1 = new ThingToDo()