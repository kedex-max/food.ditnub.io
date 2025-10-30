const menu = document.querySelector('.sidebar_byrger_menu');
const menuOverlay = document.querySelector('.menu_overlay')
const closeMenuOverlay = document.querySelector('.menu_overlay_close')
const bookingBtn = document.querySelector('.menu_nav_button');
const bookingContact = document.querySelector('.contact_information_grup_button')
const bookingModal = document.querySelector('.booking_mobal');
const bookingForm = document.querySelector('.booking_content_button');
const closeBooking = document.querySelector('.menu_booking_close')

menu.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

closeMenuOverlay.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
});

bookingBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    bookingModal.classList.add('active');
});

bookingContact.addEventListener('click', () => {
    bookingModal.classList.add('active');
});

closeBooking.addEventListener('click', () => {
    bookingModal.classList.remove('active');
});

bookingForm.addEventListener('click', () => {
    bookingModal.classList.remove('active');
});