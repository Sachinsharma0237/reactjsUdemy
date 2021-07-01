class Human{
    constructor(){
      this.gender = "male";
    }
    printMyGender(){
      console.log(this.gender);
    }
  }
    
  class Person extends Human{
    constructor(){
      super();
      this.name = "Monika";
      this.gender = "Female";
    }
    printMyName(){
      console.log(this.name);
    }
  }
  const person = new Person();
  person.printMyName();
  person.printMyGender();