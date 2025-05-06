document.getElementById('loginBtn').addEventListener('click', function(){
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('signupBtn').classList.remove('active');
});

document.getElementById('signupBtn').addEventListener('click',function()
{
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
});