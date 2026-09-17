// Array to maintain navigation history for back/forward
let navHistory = ['loginCard'];

function showCard(cardId) {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    const target = document.getElementById(cardId);
    if (target) {
        target.classList.remove('hidden');
    }
}

function navigateTo(cardId) {
    showCard(cardId);
    // Push card state to browser history
    history.pushState({ cardId: cardId }, '');
}

// Handle Browser Back and Forward arrows
window.addEventListener('popstate', function (event) {
    if (event.state && event.state.cardId) {
        showCard(event.state.cardId);
    } else {
        showCard('loginCard');
    }
});

// Password Eye Icon Toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    }
}

// Login form submit -> take the user into the app (Feed page).
// There is no backend yet, so this simply treats any filled-in
// email/password as a successful login.
function handleLogin(event) {
    event.preventDefault();
    window.location.href = 'feed/index.html';
}

// Sign Up form submit -> same idea, straight into the Feed page
// once account details are filled in.
function handleSignup(event) {
    event.preventDefault();
    window.location.href = 'feed/index.html';
}

// Save initial history on load
window.addEventListener('DOMContentLoaded', () => {
    // If arriving via a "Get Started" link (index.html?mode=signup),
    // open the Sign Up card directly instead of Login.
    const params = new URLSearchParams(window.location.search);
    const startCard = params.get('mode') === 'signup' ? 'signupCard' : 'loginCard';
    showCard(startCard);
    history.replaceState({ cardId: startCard }, '');
});