// 로그인 모달 열기
const openLoginModalBtn = document.querySelector('.open-login-modal');
const loginModal = document.querySelector('#login-modal');
const loginOverlay = document.querySelector('#login-overlay');

// 회원가입 모달 열기
const openSignupModalBtn = document.querySelector('.open-signup-modal');
const signupModal = document.querySelector('#signup-modal');
const signupOverlay = document.querySelector('#signup-overlay');

// 로그인 모달 열기
openLoginModalBtn.addEventListener('click', function() {
  loginModal.style.display = 'block';
  loginOverlay.style.display = 'block';
});

// 회원가입 모달 열기
openSignupModalBtn.addEventListener('click', function() {
  signupModal.style.display = 'block';
  signupOverlay.style.display = 'block';
});

// 모달 닫기
document.querySelector('#close-login-modal').addEventListener('click', function() {
  loginModal.style.display = 'none';
  loginOverlay.style.display = 'none';
});
document.querySelector('#close-signup-modal').addEventListener('click', function() {
  signupModal.style.display = 'none';
  signupOverlay.style.display = 'none';
});
