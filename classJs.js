class UserController {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }

  async completeName() {
    const nameComplete = this.name + " " + this.lastname
    console.log(nameComplete)
  }
}

const userController = new UserController('Gabriel', 'Leite')
userController.completeName()