// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik 
 document.querySelector('#hamburger-menu').onclick = () => {
   navbarNav.classList.toggle('active');  
 };

// klik di luar sidebar untuk menghilangkan navbar
 const hamburger = document.querySelector('#hamburger-menu');

 document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    });

// handle form submission
formAnggota1.addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.querySelector('#nama').value;
    const deskripsi = document.querySelector('#deskripsi').value;
    
    if (nama) {
        anggotaTitle.textContent = nama;
    }
    if (deskripsi) {
        let descP = anggotaCard.querySelector('.anggota-description');
        if (!descP) {
            descP = document.createElement('p');
            descP.className = 'anggota-description';
            anggotaCard.appendChild(descP);
        }
        descP.textContent = deskripsi;
    }
    
    popupAnggota1.style.display = 'none';
    formAnggota1.reset();
});
