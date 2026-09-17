// Like button functionality
// Clicking "Like" toggles the liked state: icon + text turn blue and a
// like count of 1 appears next to it. Clicking again removes the like.
function toggleLike(btn) {
  const icon = btn.querySelector('i');
  const countEl = btn.querySelector('.like-count');
  const isLiked = btn.classList.toggle('liked');

  if (isLiked) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    countEl.textContent = '1';
  } else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    countEl.textContent = '';
  }
}