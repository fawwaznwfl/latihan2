// 1
function minimal(a: number, b: number): number {
    return a <= b ? a : b;
  }
  console.log(minimal(1, 3));
  console.log(minimal(3, 2)); 
  console.log(minimal(3, 3)); 
  
  
  
  
  //2
  function power(a: number, b: number): number {
    return Math.pow(a, b); 
  }
  
  console.log(power(7, 2));  
  console.log(power(3, 3));   
  console.log(power(4, 0.5)); 
  
  //3
  
  
  //4
  class animal{
    name : string
    age : number
    isMamal : boolean
  
    constructor(name : string, age : number) {
      this.name = name
      this.age = age
      this.isMamal = true
    }
  }
  //5
  class rabbit extends animal{
    eat(){
      console.log(`${this.name} yang ber umur ${this.age} sedang makan`);
    } 
  }
  const kelinci = new rabbit('kelinci', 24)
  kelinci.eat()
  
  //6
  class Eagle extends animal {
    speed: number;
  
    constructor(name: string, age: number) {
      super(name, age);
      this.isMamal = false; 
      ; this.speed = 220; 
    }
  
    fly(): string {
      return `${this.name} yang berumur ${this.age} sedang terbang!`; 
    }
  
    run(speed: number): string{ 
      return `${this.name} Berlari dengan kecepatan ${speed} km`;
    }
  }
  
  // Contoh instansiasi
  const elang = new Eagle('Elang', 5);
  console.log(elang.fly());
  console.log(elang.run(99)); 
  
  //7
  class EagleRun extends Eagle {
    fly(): string {
      return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }
  
    runEagle(speed: number): string {
      return super.run(speed);
    }
  }
  
  //8
  const myRabbit = new rabbit('Labi', 2);
  myRabbit.eat()
  
  //9
  const myEagle = new Eagle("Elo", 4);
  console.log(myEagle.fly());
  console.log(myEagle.run(220));
  
  //10
  const speedTes = new EagleRun('kuku', 220)
  console.log(speedTes.runEagle(220));