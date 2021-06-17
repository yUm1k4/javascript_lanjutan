// ? Cara membuat Object pada Javascript

// * 1. Object Literal
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
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {}
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         // this energi = this.energi + porsi
//         this.energi += porsi
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa
// }

// let zain = Mahasiswa('Zainudin', 10)
// let abd = Mahasiswa('Abdullah', 13)


// * 3. Constructor Functin
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        // this energi = this.energi + porsi
        this.energi += porsi
        console.log(`Hallo ${this.nama}, selamat makan!`);
    }

    this.main = function(jam) {
        this.energi -= jam
        console.log(`Hallo ${this.nama}, selamat bermain!`);
    }
}
// ! cara instansiasi constructor function dengan New
let zain = new Mahasiswa('Zainudin', 10)


// * 4. Object.create()