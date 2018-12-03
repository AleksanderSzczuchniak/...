(function (){
class ThingToDo {
    constructor(appendLocation) {
        this.tasks = JSON.parse(localStorage.getItem('thingToDoList')) || []
        this.appendLocation = appendLocation || document.body
        this.render()
    }
    addTask(text) {
        this.tasks.push(new Task(text))
        this.addTasksToLocalStorage()
        this.render()

    }
    deleteTask(index) {
        this.tasks = this.tasks.slice(0, index).concat(this.tasks.slice(index + 1))
        this.render()
    }

    toggleTask(task) {
        if (task.isCompleted === true) {
            task.isCompleted = false
        } else {
            task.isCompleted = true
        }
        this.render()
    }

    taskIsCompletedStyle(task, li) {
        if (task.isCompleted === false) {
            li.style.textDecoration = "none"
        } else {
            li.style.textDecoration = "line-through"
        }
    }

    addTasksToLocalStorage() {
        localStorage.setItem('ThingToDoList', `${JSON.stringify(this.tasks)}`)

    }

    render() {
        this.appendLocation.innerHTML = ''

        this.makePort()

        const ul = document.createElement('ul')

        this.tasks.forEach((task, index) => {
            const li = document.createElement('li')
            const buttonDelete = document.createElement('button')
            buttonDelete.innerText = 'Delete task from list'

            buttonDelete.addEventListener('click', () => this.deleteTask(index))

            li.addEventListener('click', () => this.toggleTask(task))

            this.taskIsCompletedStyle(task, li)

            li.innerText = task.text
            li.appendChild(buttonDelete)
            ul.appendChild(li)
        })
        this.appendLocation.appendChild(ul)

    }
    makePort() {
        const input = document.createElement('input')
        const buttonAdd = document.createElement('button')
        buttonAdd.innerText = 'Add task to list'


        buttonAdd.addEventListener(
            'click',
            () => this.addTask(input.value)
        )



        this.appendLocation.appendChild(input)
        this.appendLocation.appendChild(buttonAdd)

    }


}


class Task {
    constructor(text) {
        this.text = text
        this.isCompleted = false
    }
}

const newThingToTo1 = new ThingToDo()


})()