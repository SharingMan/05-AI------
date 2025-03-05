// 生成状态栏
function createStatusBar() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  
  return `
    <div class="status-bar">
      <div class="status-bar-time">${hours}:${minutes}</div>
      <div class="status-bar-icons">
        <i class="fas fa-signal"></i>
        <i class="fas fa-wifi"></i>
        <i class="fas fa-battery-three-quarters"></i>
      </div>
    </div>
  `;
}

// 生成底部导航栏
function createTabBar(activeTab) {
  return `
    <div class="tab-bar">
      <a href="home.html" class="tab-item ${activeTab === 'home' ? 'active' : ''}">
        <i class="tab-icon fas fa-home"></i>
        <span>发现</span>
      </a>
      <a href="subscription.html" class="tab-item ${activeTab === 'subscription' ? 'active' : ''}">
        <i class="tab-icon fas fa-headphones"></i>
        <span>订阅</span>
      </a>
      <a href="search.html" class="tab-item ${activeTab === 'search' ? 'active' : ''}">
        <i class="tab-icon fas fa-search"></i>
        <span>搜索</span>
      </a>
      <a href="profile.html" class="tab-item ${activeTab === 'profile' ? 'active' : ''}">
        <i class="tab-icon fas fa-user"></i>
        <span>我的</span>
      </a>
    </div>
  `;
}

// 生成迷你播放器
function createMiniPlayer() {
  return `
    <div class="player-bar">
      <img src="images/podcast1.jpg" alt="当前播放" class="player-cover">
      <div class="player-info">
        <div class="player-title">Vol.278 如何培养高效学习的能力</div>
        <div class="player-author">得到精品课</div>
      </div>
      <div class="player-controls">
        <i class="fas fa-play"></i>
        <i class="fas fa-forward"></i>
      </div>
    </div>
  `;
}

// 初始化页面
function initPage(activeTab, showMiniPlayer = true) {
  document.addEventListener('DOMContentLoaded', function() {
    // 添加状态栏
    const statusBarContainer = document.getElementById('status-bar');
    if (statusBarContainer) {
      statusBarContainer.innerHTML = createStatusBar();
    }
    
    // 添加底部导航栏
    const tabBarContainer = document.getElementById('tab-bar');
    if (tabBarContainer) {
      tabBarContainer.innerHTML = createTabBar(activeTab);
    }
    
    // 添加迷你播放器
    if (showMiniPlayer) {
      const miniPlayerContainer = document.getElementById('mini-player');
      if (miniPlayerContainer) {
        miniPlayerContainer.innerHTML = createMiniPlayer();
      }
    }
  });
} 