namespace InterfaceNamespace {
  interface Thing {
    name: string
    getFullName: () => string
  }

  interface Vechicle extends Thing {
    wheelCount: number
    updateWheelCount: (newWheelCount: number) => void
    showNumberWheels: () => void
  }

  class Motorcycle implements Vechicle {
    name: string
    wheelCount: number
    constructor(name: string){
      // no super for interfaces
      this.name = name 
    }

    updateWheelCount(newWheelCount: number){
      this.wheelCount = newWheelCount
      console.log(`Automobile has ${this.wheelCount}`)
    }

    showNumberWheels(){
      console.log(`moved Automobile ${this.wheelCount} miles`)
    }

    getFullName(){
      return "MC-"+this.name 
    }
  }

  const moto = new Motorcycle("ИЖ-Планета-Спорт")
  console.log(moto.getFullName())
}