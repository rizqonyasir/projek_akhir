
document.addEventListener('DOMContentLoaded', () => {
    let konfirmasi = confirm("Apakah anda yakin ingin masuk ke website ini?");
    
    if (konfirmasi) {
        const userInput = prompt('Masukkan nama anda:');
        const name = document.getElementById('name');
        name.textContent = 'Hello ' + userInput+", ";
        alert('selamat datang')
    } else {
        alert('Anda memilih untuk tidak masuk ke website.');
    }
});
