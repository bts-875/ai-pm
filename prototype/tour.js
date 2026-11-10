<!-- ================= 演示导游悬浮代码 START ================= -->
<!-- 1. 触发按钮 -->
<button id="tour-btn" class="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:scale-110 focus:outline-none" title="开启演示剧本">
  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>
</button>

<!-- 2. 黑色遮罩层 -->
<div id="tour-overlay" class="fixed inset-0 bg-black/40 z-[95] hidden transition-opacity duration-300 opacity-0 backdrop-blur-sm"></div>

<!-- 3. 右侧抽屉面板 -->
<div id="tour-panel" class="fixed top-0 right-0 w-[400px] h-full bg-white z-[100] shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
  
  <!-- 头部 -->
  <div class="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
    <div>
      <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2">
        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
        核心演示剧本
      </h2>
      <p class="text-xs text-gray-500 mt-1">请按照业务闭环顺序向客户演示</p>
    </div>
    <button id="tour-close" class="text-gray-400 hover:text-gray-700 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>

  <!-- 步骤列表 -->
  <div class="flex-1 overflow-y-auto p-6 space-y-4">
    
    <!-- 步骤 1 -->
    <a href="项目概览.html" class="block p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group relative">
      <div class="flex items-start gap-4">
        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
        <div>
          <h3 class="font-bold text-gray-800 text-sm group-hover:text-blue-700">全局大盘 - 项目概览</h3>
          <p class="text-xs text-gray-500 mt-1">展示数据、模型、GPU 全局资产，以及最近动态。</p>
        </div>
      </div>
    </a>

    <!-- 步骤 2 -->
    <a href="评测基准.html" class="block p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group relative">
      <div class="flex items-start gap-4">
        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
        <div>
          <h3 class="font-bold text-gray-800 text-sm group-hover:text-blue-700">弹药库 - 评测基准</h3>
          <p class="text-xs text-gray-500 mt-1">展示 C-Eval 及业务评测集，演示大模型自动构造题目。</p>
        </div>
      </div>
    </a>

    <!-- 步骤 3 -->
    <a href="发起量化.html" class="block p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group relative">
      <div class="flex items-start gap-4">
        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
        <div>
          <h3 class="font-bold text-gray-800 text-sm group-hover:text-blue-700">降本增效 - 发起量化</h3>
          <p class="text-xs text-gray-500 mt-1">展示 INT8/INT4 量化配置，演示如何降低部署成本。</p>
        </div>
      </div>
    </a>

    <!-- 步骤 4 -->
    <a href="评测结果明细.html" class="block p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group relative">
      <div class="flex items-start gap-4">
        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">4</div>
        <div>
          <h3 class="font-bold text-gray-800 text-sm group-hover:text-blue-700">效果验证 - 评测结果明细</h3>
          <p class="text-xs text-gray-500 mt-1">展示逐题对错红绿高亮，以及微调前后的得分增益对比。</p>
        </div>
      </div>
    </a>

  </div>
  
  <!-- 底部说明 -->
  <div class="p-4 border-t border-gray-100 bg-gray-50 text-center text-xs text-gray-500">
    提示：演示时点击上述卡片可直接跳转对应页面。
  </div>
</div>

<!-- 4. 交互脚本 -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('tour-btn');
    const closeBtn = document.getElementById('tour-close');
    const panel = document.getElementById('tour-panel');
    const overlay = document.getElementById('tour-overlay');

    function openPanel() {
      overlay.classList.remove('hidden');
      // 延迟一点点移除透明度，触发过渡动画
      setTimeout(() => overlay.classList.remove('opacity-0'), 10);
      panel.classList.remove('translate-x-full');
    }

    function closePanel() {
      overlay.classList.add('opacity-0');
      panel.classList.add('translate-x-full');
      setTimeout(() => overlay.classList.add('hidden'), 300);
    }

    btn.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);
  });
</script>
<!-- ================= 演示导游悬浮代码 END ================= -->
