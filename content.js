function removeAds() {
  document.querySelectorAll(`
    iframe[src*="ads"],
    iframe[src*="doubleclick"],
    iframe[src*="googlesyndication"],
    [id*="ad"],
    [class*="ad"],
    [class*="ads"],
    [class*="sponsor"],
    [class*="promoted"]
  `).forEach(el => el.remove());
}

function handleYouTubeAds() {
  const skipBtn = document.querySelector('.ytp-ad-skip-button');
  if (skipBtn) skipBtn.click();

  const video = document.querySelector('video');
  if (video && document.querySelector('.ad-showing')) {
    video.muted = true;
    video.currentTime = video.duration;
    video.playbackRate = 16;
  }
}

function handleSpotifyAds() {
  const isAd = document.querySelector('[data-testid="context-item-info-ad"]');
  const audio = document.querySelector('audio');

  if (isAd && audio) {
    audio.muted = true;
    audio.volume = 0;
  } else if (audio) {
    audio.muted = false;
    audio.volume = 1;
  }
}

const observer = new MutationObserver(() => {
  removeAds();
  handleYouTubeAds();
  handleSpotifyAds();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

setInterval(() => {
  removeAds();
  handleYouTubeAds();
  handleSpotifyAds();
}, 500);