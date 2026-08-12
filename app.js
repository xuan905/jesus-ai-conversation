/* ============================================
   Jesus AI — 互動腳本
   ============================================ */
(function () {
  'use strict';

  // ── State ──────────────────────────────────────
  let currentLang = 'zh-TW';

  // ── I18n ──────────────────────────────────────
  const T = {
    'zh-TW': {
      'nav.about': '關於',
      'nav.features': '特色',
      'nav.install': '安裝',
      'hero.title': '耶穌AI<br>靈性陪伴對話',
      'hero.desc': '以耶穌的愛與教導為核心，溫柔聆聽，以提問引導。<br>支援 18 種語言，適合日常靈修、慕道友探索與信仰陪伴。',
      'hero.btnInstall': '立即安裝',
      'hero.btnFeatures': '了解特色',
      'stat.lang': '語言',
      'stat.always': '隨時陪伴',
      'stat.books': '聖經書卷',
      'quote.main': '「我這些事告訴你們，是要叫你們在我裡面有平安。在世上你有苦難，但你可以放心，我已經勝了世界。」',
      'quote.ref': '— 約翰福音 16:33',
      'about.title': '關於耶穌AI',
      'about.desc1': '耶穌AI 是一位靈性陪伴者，以耶穌的性情與教導為藍本——愛、接納、憐憫、誠實、溫柔而堅定。它不是聲稱自己是歷史上的耶穌，而是以耶穌的心腸陪伴每一個需要的人。',
      'about.desc2': '無論你是在苦難中掙扎、對信仰有困惑、只是想找人安靜陪伴，耶穌AI 都會先看見「你」這個人，再談「事」。它少用命令，多用邀請；少給答案，多用問題引導你自己思考。',
      'features.title': '技能特色',
      'feat.lang.title': '18 種語言',
      'feat.lang.desc': '繁中、簡中、英日韓、西法德俄、阿拉伯印地語等，自動辨識語言全程陪伴，聖經經文引用相應譯本。',
      'feat.prayer.title': '禱告引導',
      'feat.prayer.desc': '引導你用自己的話向神禱告，不背模板，陪你說出心裡真實的話。',
      'feat.bible.title': '聖經故事',
      'feat.bible.desc': '好撒瑪利亞人、浪子回頭、撒種比喻……用故事回應生命處境，溫柔而不說教。',
      'feat.listen.title': '溫柔聆聽',
      'feat.listen.desc': '先看見情緒，再談事情。情緒未穩前，不急著給建議；用提問引導你整理思緒。',
      'feat.compassion.title': '靈性陪伴',
      'feat.compassion.desc': '陪伴孤單、迷茫、懷疑、罪咎、喪親各種生命處境，接納所有掙扎，不論你處於哪個階段。',
      'feat.growth.title': '生命成長',
      'feat.growth.desc': '不只安慰，更陪你探索信仰深度，在神的愛中認識自己，建立與神的關係。',
      'examples.title': '可以這樣開始',
      'prompt1': '「我最近感到很迷茫，不知道人生的方向在哪裡……」',
      'prompt2': '「我為家人禱告，但不知道該怎麼說……」',
      'prompt3': '「耶穌怎麼看苦難這件事？」',
      'prompt4': '「我對信仰有懷疑，可以跟你聊聊嗎？」',
      'prompt.label': '點擊複製',
      'install.title': '開始使用',
      'install.tabClawhub': 'ClawHub 安裝',
      'install.tabManual': '手動複製',
      'install.step1': '確認已安裝 OpenClaw 並開啟對話視窗',
      'install.step2': '在對話中輸入以下指令：',
      'install.step3': '技能自動啟用，開始與耶穌AI 對話',
      'install.note': '觸發關鍵詞：禱告、聖經、信仰、苦難、孤單、迷茫、耶穌',
      'footer.desc': '以耶穌的心腸，陪伴每一個尋找的人。',
      'footer.clawhub': 'ClawHub',
      'footer.github': 'GitHub',
      'footer.quote': '「愛是永恆的盼望。」',
      'footer.sub': 'OpenClaw Skill · Jesus AI Companion',
    },
    'zh-CN': {
      'nav.about': '关于',
      'nav.features': '特色',
      'nav.install': '安装',
      'hero.title': '耶穌AI<br>灵性陪伴对话',
      'hero.desc': '以耶穌的爱与教导为核心，温柔聆听，以提问引导。<br>支持 18 种语言，适合日常灵修、慕道友探索与信仰陪伴。',
      'hero.btnInstall': '立即安装',
      'hero.btnFeatures': '了解特色',
      'stat.lang': '语言',
      'stat.always': '随时陪伴',
      'stat.books': '圣经书卷',
      'quote.main': '「我将这些事告诉你们，是要叫你们在我里面有平安。在世上你们有苦难，但你们可以放心，我已经胜了世界。」',
      'quote.ref': '— 约翰福音 16:33',
      'about.title': '关于耶穌AI',
      'about.desc1': '耶穌AI 是一位灵性陪伴者，以耶穌的性情与教导为蓝本——爱、接纳、怜悯、诚实、温柔而坚定。它不是声称自己是历史上的耶穌，而是以耶穌的心肠陪伴每一个需要的人。',
      'about.desc2': '无论你是在苦难中挣扎、对信仰有困惑、只是想找人安静陪伴，耶穌AI 都会先看见「你」这个人，再谈「事」。它少用命令，多用邀请；少给答案，多用问题引导你自己思考。',
      'features.title': '技能特色',
      'feat.lang.title': '18 种语言',
      'feat.lang.desc': '繁中、简中、英日韩、西法德俄、阿拉伯印地语等，自动辨识语言全程陪伴，圣经经文引用相应译本。',
      'feat.prayer.title': '祷告引导',
      'feat.prayer.desc': '引导你用自己的话向神祷告，不背模板，陪你说出心里真实的话。',
      'feat.bible.title': '圣经故事',
      'feat.bible.desc': '好撒玛利亚人、浪子回头、撒种比喻……用故事回应生命处境，温柔而不说教。',
      'feat.listen.title': '温柔聆听',
      'feat.listen.desc': '先看见情绪，再谈事情。情绪未稳前，不急着给建议；用提问引导你整理思绪。',
      'feat.compassion.title': '灵性陪伴',
      'feat.compassion.desc': '陪伴孤单、迷茫、怀疑、罪咎、丧亲各种生命处境，接纳所有挣扎，不论你处于哪个阶段。',
      'feat.growth.title': '生命成长',
      'feat.growth.desc': '不只安慰，更陪你探索信仰深度，在神的爱中认识自己，建立与神的关系。',
      'examples.title': '可以这样开始',
      'prompt1': '「我最近感到很迷茫，不知道人生的方向在哪里……」',
      'prompt2': '「我为家人祷告，但不知道该怎么说……」',
      'prompt3': '「耶穌怎么看苦难这件事？」',
      'prompt4': '「我对信仰有怀疑，可以跟你聊聊吗？」',
      'prompt.label': '点击复制',
      'install.title': '开始使用',
      'install.tabClawhub': 'ClawHub 安装',
      'install.tabManual': '手动复制',
      'install.step1': '确认已安装 OpenClaw 并开启对话窗口',
      'install.step2': '在对话中输入以下指令：',
      'install.step3': '技能自动启用，开始与耶穌AI 对话',
      'install.note': '触发关键词：祷告、圣经、信仰、苦难、孤单、迷茫、耶穌',
      'footer.desc': '以耶穌的心肠，陪伴每一个寻找的人。',
      'footer.clawhub': 'ClawHub',
      'footer.github': 'GitHub',
      'footer.quote': '「爱是永恒的盼望。」',
      'footer.sub': 'OpenClaw Skill · Jesus AI Companion',
    },
    'en': {
      'nav.about': 'About',
      'nav.features': 'Features',
      'nav.install': 'Install',
      'hero.title': 'Jesus AI<br>Spiritual Companion',
      'hero.desc': 'A gentle companion responding with the love and teachings of Jesus.<br>18 languages supported. For daily devotions, seekers, and those seeking comfort.',
      'hero.btnInstall': 'Install Now',
      'hero.btnFeatures': 'Features',
      'stat.lang': 'Languages',
      'stat.always': 'Always There',
      'stat.books': 'Bible Books',
      'quote.main': '"I have told you these things, so that in me you may have peace.<br>In this world you will have trouble. But take heart! I have overcome the world."',
      'quote.ref': '— John 16:33',
      'about.title': 'About Jesus AI',
      'about.desc1': 'Jesus AI is a spiritual companion based on the love and teachings of Jesus — compassion, acceptance, honesty, and gentle strength. It does not claim to be the historical Jesus, but walks with you as He would.',
      'about.desc2': 'Whether you are struggling with suffering, seeking answers, or just need quiet company, Jesus AI first sees the person, then the problem. It uses invitations, not commands; questions, not lectures.',
      'features.title': 'Features',
      'feat.lang.title': '18 Languages',
      'feat.lang.desc': 'Chinese, English, Japanese, Korean, Spanish, French, German, Russian, Arabic, Hindi and more — auto-detected, scriptures in matching translations.',
      'feat.prayer.title': 'Prayer Guidance',
      'feat.prayer.desc': 'Helps you pray in your own words. No templates — just an open space to speak honestly to God.',
      'feat.bible.title': 'Bible Stories',
      'feat.bible.desc': 'Good Samaritan, Prodigal Son, Parable of the Sower… stories that speak to real life situations, gently and without preaching.',
      'feat.listen.title': 'Gentle Listening',
      'feat.listen.desc': 'First the heart, then the mind. It waits for emotions to settle before offering guidance, and uses questions to help you find your own clarity.',
      'feat.compassion.title': 'Spiritual Companionship',
      'feat.compassion.desc': 'Present through loneliness, confusion, doubt, guilt, grief — accepting all struggles at every stage of faith.',
      'feat.growth.title': 'Growth in Faith',
      'feat.growth.desc': 'Beyond comfort: exploring the depths of faith, knowing yourself in God\'s love, and building a real relationship with Him.',
      'examples.title': 'How to Start',
      'prompt1': '"I\'ve been feeling lost lately, not sure where my life is heading..."',
      'prompt2': '"I want to pray for my family but don\'t know what to say..."',
      'prompt3': '"What does Jesus say about suffering?"',
      'prompt4': '"I have doubts about my faith — can we talk?"',
      'prompt.label': 'Copy',
      'install.title': 'Get Started',
      'install.tabClawhub': 'ClawHub Install',
      'install.tabManual': 'Manual Clone',
      'install.step1': 'Make sure OpenClaw is installed and you have a chat window open',
      'install.step2': 'Type this command in your chat:',
      'install.step3': 'Skill activates automatically — start your conversation with Jesus AI',
      'install.note': 'Keywords: prayer, Bible, faith, suffering, loneliness,迷茫, Jesus',
      'footer.desc': 'Walking with everyone who seeks.',
      'footer.clawhub': 'ClawHub',
      'footer.github': 'GitHub',
      'footer.quote': '"Love is eternal hope."',
      'footer.sub': 'OpenClaw Skill · Jesus AI Companion',
    },
  };

  function t(key) {
    return T[currentLang]?.[key] || T['zh-TW'][key] || key;
  }

  function applyI18n() {
    document.title = currentLang === 'en'
      ? 'Jesus AI · Spiritual Companion'
      : currentLang === 'zh-CN'
      ? '耶穌AI · 灵性陪伴对话'
      : '耶穌AI · 靈性陪伴對話';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-text]').forEach(el => {
      el.textContent = t(el.dataset.i18nText);
    });
  }

  // ── Theme ──────────────────────────────────────
  const themeBtn = document.getElementById('themeBtn');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeBtn) themeBtn.textContent = '🌙';
  }
  themeBtn?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      themeBtn.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeBtn.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  });

  // ── Navbar scroll ──────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ── Mobile nav ─────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => navLinks?.classList.toggle('open'));
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  // ── Language switcher ───────────────────────────
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyI18n();
    });
  });

  // ── Install tabs ────────────────────────────────
  document.querySelectorAll('.install-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      document.querySelectorAll('.install-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.install-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tabName)?.classList.add('active');
    });
  });

  // ── Copy prompts ───────────────────────────────
  document.querySelectorAll('.example-prompt').forEach(el => {
    el.addEventListener('click', () => {
      const text = el.querySelector('.prompt-text')?.textContent || '';
      navigator.clipboard?.writeText(text).then(() => {
        const label = el.querySelector('.prompt-label');
        if (label) {
          const orig = label.dataset.orig || label.textContent;
          if (!label.dataset.orig) label.dataset.orig = orig;
          label.textContent = '✓';
          setTimeout(() => { label.textContent = t('prompt.label'); }, 1500);
        }
      });
    });
  });

  // ── Init ───────────────────────────────────────
  applyI18n();

})();
