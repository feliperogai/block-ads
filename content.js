function removeAds() {
  document.querySelectorAll(`
    iframe[src*="doubleclick"],
    iframe[src*="googlesyndication"],
    iframe[src*="adservice"],
    iframe[src*="adsystem"],
    ytd-display-ad-renderer,
    ytd-ad-slot-renderer,
    ytd-in-feed-ad-layout-renderer
  `).forEach(el => el.remove());
}

function handleYouTubeAds() {
  const skipBtn = document.querySelector('.ytp-ad-skip-button');
  if (skipBtn) {
    skipBtn.click();
    return;
  }

  const video = document.querySelector('video');
  const isAd = document.querySelector('.ad-showing');

  if (video && isAd) {
    video.muted = true;
    video.playbackRate = 8;
  }

  if (video && !isAd) {
    video.muted = false;
    video.playbackRate = 1;
  }
}

function handleSpotifyAds() {
  const audio = document.querySelector('audio');
  const adLabel = document.querySelector('[data-testid="context-item-info-ad"]');

  if (audio) {
    audio.muted = !!adLabel;
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