// JavaScript for Modal Video Playback
function openModal(videoId) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    iframe.src = ''; // Stop the video
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeModal();
    }
};
