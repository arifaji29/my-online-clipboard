document.addEventListener('DOMContentLoaded', function() {
    const kontenWrapper = document.getElementById('konten-wrapper');
    
    // **PERUBAHAN DI SINI**
    // Tambahkan opsi { simplifiedAutoLink: true }
    const converter = new showdown.Converter({ simplifiedAutoLink: true });

    // Ambil isi file konten.md
    fetch('konten.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal memuat file konten.md');
            }
           return response.text();
        })
        .then(markdownText => {
            // Ubah teks Markdown menjadi HTML
            const html = converter.makeHtml(markdownText);
            
            // Masukkan hasilnya ke dalam wrapper
            kontenWrapper.innerHTML = html;
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
            kontenWrapper.innerHTML = `<p style="color: red;">Gagal memuat konten. Silakan cek konsol.</p>`;
        });
});