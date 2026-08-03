let buku = ["Laskar Pelangi", "Atomic Habits", "Clean Code", "Harry Potter"]

alert("==== Login ====")
const name = prompt("Username : ")
const pass = prompt("Password : ")
if (pass == 1) {
    alert(`Selamat datang ${name}, Untuk mengetahui menu, pergi kebagian console`)
    console.log("==== Sistem Manajemen Perpustakaan Sederhana ====")
    console.log("===== PERPUSTAKAAN ==== \n 1. Lihat Buku \n 2. Tambah Buku \n 3. Pinjam Buku  \n 4. Cari Buku \n 5. Statistik \n 6. Keluar")


    while (true) {
        const pilihanBuku = Number(prompt("Pilih menu : "))
        if (pilihanBuku == 1) {
            for (let x = 0; x < buku.length; x++) {
                console.log(`${x + 1}. ${buku[x]}`)
            }
            continue

        } else if (pilihanBuku == 2) {
            const tambahBuku = prompt("Masukkan nama buku : ")
            buku.push(tambahBuku)
            console.log(`${tambahBuku} berhasil dimasukkan kedaftar buku`)

        } else if (pilihanBuku == 3) {
            const pinjam = prompt("Pilih nomor buku : ")
            buku.splice(pinjam - 1, 1)

        } else if (pilihanBuku == 4) {
            let cari = prompt("Cari buku : ")
            cari = cari.trim()
                .toLowerCase()
                .split(" ")
                .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
                .join(" ");
            let search = false

            for (let x = 0; x < buku.length; x++) {
                if (cari === buku[x]) {
                    search = true
                    break
                }
            }

            if (search) {
                console.log('Ada dipenyimpanan')
            } else {
                console.log("Tidak ada di penyimpanan")
            }

        } else if (pilihanBuku == 5) {
            console.log(` Jumlah buku pada penyimpanan adalah ${buku.length} `)

        } else if (pilihanBuku == 6) {
            alert(` Terima kasih telah menggunakan aplikasi kami`)
            break
        }

    }
} else {
    alert(`Maaf ${name}, password salah`)
}