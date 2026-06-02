// Data Produk (Bisa diubah sesuai kebutuhan)
const products = [
    { id: 1, name: "60 Diamonds", price: 15000, img: "💎" },
    { id: 2, name: "280 Diamonds", price: 65000, img: "💎" },
    { id: 3, name: "570 Diamonds", price: 120000, img: "💎" },
    { id: 4, name: "Gold Pack", price: 250000, img: "🪙" },
    { id: 5, name: "Paket Legend", price: 500000, img: "🔥" },
];

// 1. Inisialisasi: Tampilkan produk saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-list');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        // Saat diklik, panggil fungsi ke halaman pembelian
        card.onclick = () => goToCheckout(product);
        
        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 10px;">${product.img}</div>
            <h3>${product.name}</h3>
            <div class="price">Rp ${product.price.toLocaleString('id-ID')}</div>
            <button class="nav-link">BELI</button>
        `;
        grid.appendChild(card);
    });
});

// 2. Fungsi Pindah Halaman ke Pembelian
function goToCheckout(product) {
    const homePage = document.getElementById('home-page');
    const checkoutPage = document.getElementById('checkout-page');
    
    // Update tampilan detail produk di checkout
    const display = document.getElementById('selected-product-display');
    display.innerHTML = `
        <div style="border: 1px solid var(--primary); padding: 20px; margin-bottom: 20px; text-align: center;">
            <h3 style="color:white;">${product.name}</h3>
            <h1 style="color:var(--secondary); margin: 10px 0;">${product.img}</h1>
            <div style="font-size: 1.5rem;">Rp ${product.price.toLocaleString('id-ID')}</div>
        </div>
    `;

    // Efek Transisi
    homePage.classList.remove('active');
    
    // Tunda sesaat untuk efek fades
    setTimeout(() => {
        homePage.style.display = 'none';
        checkoutPage.style.display = 'block';
        setTimeout(() => {
            checkoutPage.classList.add('active');
        }, 50);
    }, 300);
}

// 3. Fungsi Kembali ke Beranda
function showHome() {
    const homePage = document.getElementById('home-page');
    const checkoutPage = document.getElementById('checkout-page');

    checkoutPage.classList.remove('active');
    
    setTimeout(() => {
        checkoutPage.style.display = 'none';
        homePage.style.display = 'block';
        setTimeout(() => {
            homePage.classList.add('active');
        }, 50);
    }, 300);
}

// 4. Fungsi Simulasi Pembayaran
function processPayment(e) {
    e.preventDefault(); // Mencegah reload halaman
    
    const btn = document.querySelector('.btn-confirm');
    const originalText = btn.innerText;
    
    // Loading Animation
    btn.innerText = "MEMPROSES...";
    btn.style.background = "#333";
    btn.style.color = "#fff";
    btn.disabled = true;

    setTimeout(() => {
        alert("Pembayaran Berhasil! Jangan lupa cek inbox game kamu.");
        
        // Reset tombol
        btn.innerText = originalText;
        btn.style.background = "var(--primary)";
        btn.style.color = "#000";
        btn.disabled = false;
        
        // Reset form dan kembali ke home
        document.getElementById('purchase-form').reset();
        showHome();
    }, 2000);
}