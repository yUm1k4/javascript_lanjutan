// ? Cara membuat Object pada Javascript

// * 1. Object Literal
// ! Problem: tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Zainudin',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'Abdullah',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }


// * 2. Function Declaration
// const methodMahasiswa =  {
//     makan: function(porsi) {
//         // this energi = this.energi + porsi
//         this.energi += porsi
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2
//         console.log(`Hallo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     // ? Object.create() sama aja seperti membuat object
//     //  bedanya kita bisa mneyimpan parameter ke parent Object (Inheritance / Warisan)
//     // jadi kita bisa mengakses method dari parent
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa
// }

// let zain = Mahasiswa('Zainudin', 10)
// let abd = Mahasiswa('Abdullah', 13)


// * 3. Constructor Functin
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         // this energi = this.energi + porsi
//         this.energi += porsi
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }
// }
// // ! cara instansiasi constructor function dengan New
// let zain = new Mahasiswa('Zainudin', 10)


// * Prototype
// ! veri object
// function Mahasiswa(nama, energi) {
//     // ? secara default constructur function punya parent default namanya prototype
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, selamat makan!`
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Hallo ${this.nama}, selamat main!`
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Hallo ${this.nama}, selamat tidur!`
// }

// let zain = new Mahasiswa('Zainudin', 10);


// ! versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi) {
        this.energi += porsi;
        return `Hallo ${this.nama}, selamat makan!`
    }
    
    main (jam) {
        this.energi -= jam;
        return `Hallo ${this.nama}, selamat main!`
    }
    
    tidur (jam) {
        this.energi += jam * 2;
        return `Hallo ${this.nama}, selamat tidur!`
    }
}


// * 4. Object.create()