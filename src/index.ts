// // let siswa: {
// //   nama: string,
// //   umur: number,
// //   isPelajar: boolean,
// //   alamat?: string
// // } = {
// //   nama: "joni",
// //   umur: 15,
// //   isPelajar: true,
// //   alamat: "jakarta"
// // };
// // //console.log(siswa);
// // siswa = {
// //   nama: "beruk",
// //   umur: 90,
// //   isPelajar: false,
// // }
// // // console.log(siswa);

// // //Interface untuk mendefinisikan tipe data Object
// // interface product {
// //   id: number,
// //   merek: string,
// //   harga: number,
// //   note?: string,
// //   isPremium: boolean,
// // };

// // const product1: product = {
// //   id: 1,
// //   merek: "samsung",
// //   harga: 10000,
// //   isPremium: true,
// // }

// // const product2: product = {
// //   id: 4,
// //   merek: "samsung",
// //   harga: 10000,
// //   note: "gacor",
// //   isPremium: true,
// // }

// // //nested object

// // interface productDetail {
// //   samFacture: string,
// //   year: number,
// // }

// // interface productItem {
// //   id: number,
// //   productName: string,
// //   price: number,
// //   detail: productDetail,
// // }

// // const product3: productItem = {
// //   id: 1,
// //   productName: "samsung",
// //   price: 10000,
// //   detail: {
// //     year: 2023,
// //     samFacture: "handphone"
// //   }
// // }
// // // console.log("pabrik" , product3.detail.year);
// // // console.log("pabrik" , product3.detail);


// // // aray

// // const a = [1, 2, 3, 4, 5]

// // //square breakcet

// // let b: number[]
// // b = [1, 2, 3, 4, 5]

// // let c: string[]
// // c = ["ajam", " sapi"]

// // let d: (string | number | boolean)[]
// // d = [1, "satu", 2, false];


// // let v = [
// //   { nama: "akbar", umur: 14 }]

// // //jawaban nomer 1
// // let indentitas = {
// //   nama: "ihsan",
// //   tempat: "sukabumi",
// //   umur: 27,
// //   anak: [
// //     { nama: "a", umur: 10 },
// //     { nama: "b", umur: 11, isSekola: true }
// //   ]
// // }

// // interface anak {
// //   nama: string,
// //   umur: number,
// //   isSekola?: boolean,
// // }[];

// // interface indentitas {
// //   nama: string,
// //   tempat: string,
// //   umur: number,
// //   anak: anak,
// // }


// // //jawabn
// // interface dataDiri {
// //   nama: string,
// //   alamat: string,
// //   umur: number
// //   status: status
// // }[];

// // interface status {
// //   isSekols: boolean
// // }[];

// // let namaj: (string | number)[] = ['ihsan', 'arga', 1, 2, 3]

// // // buatlah function yang menghitung volume balok
// // // Hari ke 2
// // function perkalian() {
// //   return "hasil volume balok adalah"
// // }
// // function volumeBalok(panjang: number, lebar: number, tinggi: number) {
// //   const volume = panjang * lebar * tinggi
// //   return volume;
// // };
// // // console.log(perkalian());

// // const balok1 = volumeBalok(2, 2, 2)
// // // console.log(balok1);

// // //function opsional
// // function volumeball(panjang: number, lebar: number, tinggi = 0) {
// //   const volume = panjang * lebar + tinggi
// //   return volume;
// // };

// // const balo1 = volumeball(2, 2)
// // // console.log(balo1);

// // //hari ke 3
// // function pembagian({ a, b, c = 1 }: {
// //   a: number, b: number, c?: number
// // }) {
// //   const hasil = (a / b) * c;
// //   return hasil;
// // }

// // const kali1 = pembagian({ a: 3, b: 2, c: 2 });
// // const kali2 = pembagian({ a: 3, b: 2, });
// // console.log(kali1);
// // console.log(kali2);

// // interface SatuIntrface {
// //   a: Number,
// //   b: String
// // }
// // //function tanpa return
// // function satu({ a, b }: SatuIntrface): void {
// //   console.log(a, b);
// // }
// // // function dengan return
// // function dua({ a, b }: SatuIntrface): number {
// //   return 1000
// // }
// // function tiga({ a, b }: SatuIntrface): boolean {
// //   return true
// // }
// // interface responApi {
// //   msg: string,
// //   status: string;
// // }

// // function empat({ a, b }: SatuIntrface): responApi {
// //   return {
// //     msg: 'po',
// //     status: ' yeay'
// //   };
// // }

// // function lima(): responApi {
// //   return {
// //     msg: ' ok',
// //     status: ' alok'
// //   }
// // }
// // satu({ a: 1, b: '2' });

// // function cekBilangan(array: number[], bilangan: number): boolean {
// //   return array.includes(bilangan)
// // }
// // const array = [1, 2, 3, 4]
// // const bilangan = 8;

// // console.log(cekBilangan(array, bilangan));

// // // class user {
// // //   id: number
// // //   firstName: string
// // //   lastName: string
// // //   //constructor adalah method untuk class
// // //   constructor(id: number, firstName: string, lastName: string) {
// // //     this.id = id,
// // //       this.firstName = firstName,
// // //       this.lastName = lastName
// // //   }
// // //   login(): boolean {
// // //     if (this.id === 1) {
// // //       return true;
// // //     } else {
// // //       return false;
// // //     }
// // //   }
// // //   reLogin(): boolean {
// // //     return this.login()
// // //   }
// // //   register(): string{
// // //     return 'register berhasil'
// // //   }
// // // }
// // // const fyon = new user(1, 'naru', 'fyon')
// // // const fawwaz = new user(1, 'w', 'w')
// // // // console.log('fyon', fyon);
// // // // console.log(fyon.login());
// // // // console.log(fyon.reLogin());

// // // console.log(fawwaz.register);
// // // console.log(fyon.register);

// // class Profile {
// //   user : {
// //     username : string
// //     password : string
// //   }[]
// //   constructor() {
// //     this.user = [{
// //       username : 'fyon',
// //       password : '12345'
// //     },
// //   {
// //     username : 'fawwaz',
// //     password : 'gg'
// //   },
// //   {
// //     username : 'kairi',
// //     password : '444'
// //   },
// //   {
// //     username : 'alok',
// //     password : '222'
// //   },
// //   {
// //     username : 'gg',
// //     password : 'op'
// //   }
// // ];
// // }
// // login (username : string, password : string): { status : boolean, msg : string}{
// //   const cariUser = this.user.find(
// //     (user) => user.username === username && user.password === password
// //   );
// //   if (cariUser) {
// //     return {status : true, msg : 'berhasil login' }
// //   } else {
// //     return {status : false, msg : 'username dan password bebeda anda gagal login'}
// //   }
// // }
// // }

// // const profile = new Profile();
// // console.log(profile.login('fawwaz','gg'));   
// // console.log(profile.login('fyon','12345'));   


// // //buatlah method login jika username dan password yang kirimkan
// // //ada di dalam array user maka berikan pesan, jika berhasil berikan pesan anda berhasil login, jika gagal anda gagal login, msg username dan password berbeda

// // //hari ke 4
// // //sub class adalah turunan dari clas baik itu properti maupun method
// // class Smartphone {
// //   color : string
// //   brand : string
// //   model : string
// //   isTouch : boolean
// //   constructor(color: string, brand : string, model : string){
// //     this.color = color
// //     this.brand = brand
// //     this.model = model
// //     this.isTouch = true
// //   }
// //   charging(){
// //     console.log(`smartphone ${this.model} sedang di cas dengan fast charging`);
// //   }
// // };

// // // const moll = new Smartphone('merah', ' samsung','m30');
// // // console.log(moll.charging());
// // // // sub class
// // // //sub class akan menirukan sifat dan perilaku dari clas
// // // class Android extends Smartphone{
// // //     splitScreen(){
// // //       console.log('split screen berhasil');
// // //     }
// // // }

// // // const xiaomi = new Android('red', 'Xiomi', 'renot 13')
// // // console.log(xiaomi.charging());
// // // xiaomi.charging()
// // // xiaomi.splitScreen()
// // // class Ios extends Smartphone{
// // //     airDrop(){
// // //       console.log('air drop berhasil');
// // //     }
// // // }
// // //polhymopism
// // class Android extends Smartphone{
// //   layar : number

// //   constructor(color: string, brand : string, model :string, layar : number){
// //     super(color, brand, model);
// //     this.layar = layar
// //   }
// //       splitScreen(){
// //         console.log('split screen berhasil');
// //       }
// //       showBrand(){
// //         console.log(`bran ini adalah ${this.brand} dan ukuran ${this.layar} `);
// //       }
// //       charging(): void {
// //         super.charging()
// //         console.log(`smartphone ${this.model} sedang di cas dengan fast charging`);
// //       }
// //   }
  
// //   const xiaomi = new Android('red', 'Xiomi', 'renot 13', 123)
// //   xiaomi.splitScreen()
// //   class Ios extends Smartphone{
// //       airDrop(){
// //         console.log('air drop berhasil');
// //       }
// //   }
// //   xiaomi.showBrand()


// // 1
// function minimal(a: number, b: number): number {
//   return a <= b ? a : b;
// }
// console.log(minimal(1, 3));
// console.log(minimal(3, 2)); 
// console.log(minimal(3, 3)); 




// //2
// function power(a: number, b: number): number {
//   return Math.pow(a, b); 
// }

// console.log(power(7, 2));  
// console.log(power(3, 3));   
// console.log(power(4, 0.5)); 

// //3


// //4
// class animal{
//   name : string
//   age : number
//   isMamal : boolean

//   constructor(name : string, age : number) {
//     this.name = name
//     this.age = age
//     this.isMamal = true
//   }
// }
// //5
// class rabbit extends animal{
//   eat(){
//     console.log(`${this.name} yang ber umur ${this.age} sedang makan`);
//   } 
// }
// const kelinci = new rabbit('kelinci', 24)
// kelinci.eat()

// //6
// class Eagle extends animal {
//   speed: number;

//   constructor(name: string, age: number) {
//     super(name, age);
//     this.isMamal = false; 
//     ; this.speed = 220; 
//   }

//   fly(): string {
//     return `${this.name} yang berumur ${this.age} sedang terbang!`; 
//   }

//   run(speed: number): string{ 
//     return `${this.name} Berlari dengan kecepatan ${speed} km`;
//   }
// }

// // Contoh instansiasi
// const elang = new Eagle('Elang', 5);
// console.log(elang.fly());
// console.log(elang.run(99)); 

// //7
// class EagleRun extends Eagle {
//   fly(): string {
//     return `${this.name} yang berumur ${this.age} sedang terbang!`;
//   }

//   runEagle(speed: number): string {
//     return super.run(speed);
//   }
// }

// //8
// const myRabbit = new rabbit('Labi', 2);
// myRabbit.eat()

// //9
// const myEagle = new Eagle("Elo", 4);
// console.log(myEagle.fly());
// console.log(myEagle.run(220));

// //10
// const speedTes = new EagleRun('kuku', 220)
// console.log(speedTes.runEagle(220));