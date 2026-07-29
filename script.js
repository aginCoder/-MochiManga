const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

function localCoverSlug(value) {
    return String(value)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/×/g, 'x')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

async function fetchCover(story) {
    return `assets/covers/${localCoverSlug(story.title)}.jpg`;
}

const groups = {
    manga: {
        origin: 'japan',
        flag: '🇯🇵 Nhật Bản',
        type: 'Manga',
        items: [
            ['One Piece', 'Phiêu lưu, hải tặc'],
            ['Dragon Ball', 'Hành động, võ thuật'],
            ['Naruto', 'Ninja, phiêu lưu'],
            ['Bleach', 'Shinigami, hành động'],
            ['Attack on Titan', 'Hành động, sinh tồn'],
            ['Demon Slayer', 'Kiếm thuật, diệt quỷ'],
            ['Jujutsu Kaisen', 'Chú thuật, hành động'],
            ['My Hero Academia', 'Siêu anh hùng'],
            ['Death Note', 'Trinh thám, tâm lý'],
            ['Hunter × Hunter', 'Phiêu lưu'],
            ['Tokyo Ghoul', 'Kinh dị, hành động'],
            ['Chainsaw Man', 'Hành động, kinh dị'],
            ['Spy × Family', 'Gia đình, hài hước'],
            ['Blue Lock', 'Thể thao, bóng đá'],
            ['Haikyuu!!', 'Thể thao, bóng chuyền'],
            ['Slam Dunk', 'Thể thao, bóng rổ'],
            ['Fullmetal Alchemist', 'Giả kim, phiêu lưu'],
            ["JoJo's Bizarre Adventure", 'Hành động, kỳ ảo'],
            ['Detective Conan', 'Trinh thám'],
            ['Doraemon', 'Thiếu nhi, hài hước']
        ]
    },
    manhwa: {
        origin: 'korea',
        flag: '🇰🇷 Hàn Quốc',
        type: 'Manhwa',
        items: [
            ['Solo Leveling', 'Hành động, kỳ ảo'],
            ['The Beginning After The End', 'Chuyển sinh, kỳ ảo'],
            ["Omniscient Reader's Viewpoint", 'Sinh tồn, kỳ ảo'],
            ['Tower of God', 'Phiêu lưu, kỳ ảo'],
            ['The God of High School', 'Võ thuật, hành động'],
            ['Noblesse', 'Siêu nhiên, hành động'],
            ['Eleceed', 'Siêu năng lực, hài hước'],
            ['Wind Breaker', 'Thể thao, đường phố'],
            ['Lookism', 'Học đường, xã hội'],
            ['Viral Hit', 'Võ thuật, học đường']
        ]
    },
    manhua: {
        origin: 'china',
        flag: '🇨🇳 Trung Quốc',
        type: 'Manhua',
        items: [
            ['Tales of Demons and Gods', 'Tu tiên, chuyển sinh'],
            ['Martial Peak', 'Tu luyện, hành động'],
            ['Apotheosis', 'Tu tiên, phiêu lưu'],
            ['Soul Land', 'Huyền huyễn, hành động'],
            ['Battle Through the Heavens', 'Đấu khí, phiêu lưu'],
            ['Yuan Zun', 'Huyền huyễn, tu luyện'],
            ['Star Martial God Technique', 'Võ thuật, kỳ ảo'],
            ['Magic Emperor', 'Ma đạo, chuyển sinh'],
            ["I'm an Evil God", 'Hệ thống, võ thuật'],
            ['Against the Gods', 'Tu tiên, hành động']
        ]
    },
    comics: {
        origin: 'west',
        flag: '🇺🇸 Comic Mỹ',
        type: 'Comic',
        items: [
            ['Spider-Man', 'Siêu anh hùng'],
            ['Batman', 'Siêu anh hùng, trinh thám'],
            ['Superman', 'Siêu anh hùng'],
            ['Iron Man', 'Công nghệ, siêu anh hùng'],
            ['X-Men', 'Dị nhân, hành động'],
            ['Avengers', 'Biệt đội siêu anh hùng'],
            ['Hulk', 'Hành động, siêu anh hùng'],
            ['Deadpool', 'Hành động, hài hước'],
            ['Wonder Woman', 'Thần thoại, siêu anh hùng'],
            ['The Flash', 'Tốc độ, siêu anh hùng'],
            ['Venom', 'Phản anh hùng'],
            ['Wolverine', 'Dị nhân, hành động']
        ]
    },
    romance: {
        origin: 'japan',
        flag: '❤️ Romance',
        type: 'Romance',
        items: [
            ['Horimiya', 'Tình cảm, học đường'],
            ['Kaguya-sama: Love is War', 'Tình cảm, hài hước'],
            ['Your Lie in April', 'Tình cảm, âm nhạc'],
            ['Blue Box', 'Tình cảm, thể thao'],
            ['Fruits Basket', 'Tình cảm, siêu nhiên'],
            ['Orange', 'Tình cảm, tâm lý'],
            ['Ao Haru Ride', 'Tình cảm, học đường'],
            ['Maid Sama', 'Tình cảm, hài hước'],
            ['My Dress-Up Darling', 'Tình cảm, cosplay'],
            ["Komi Can't Communicate", 'Học đường, hài hước']
        ]
    },
    comedy: {
        origin: 'japan',
        flag: '😂 Hài hước',
        type: 'Comedy',
        items: [
            ['Crayon Shin-chan', 'Gia đình, hài hước'],
            ['Gintama', 'Hành động, hài hước'],
            ['Sakamoto Days', 'Hành động, hài hước'],
            ['Saiki Kusuo', 'Siêu năng lực, hài hước'],
            ['Grand Blue', 'Đời thường, hài hước'],
            ['Beelzebub', 'Học đường, hài hước']
        ]
    },
    horror: {
        origin: 'japan',
        flag: '👻 Kinh dị',
        type: 'Horror',
        items: [
            ['Junji Ito Collection', 'Kinh dị'],
            ['Uzumaki', 'Kinh dị, siêu nhiên'],
            ['Tomie', 'Kinh dị, tâm lý'],
            ['Another', 'Bí ẩn, kinh dị'],
            ['Parasyte', 'Kinh dị, khoa học viễn tưởng'],
            ['Hellsing', 'Ma cà rồng, hành động']
        ]
    },
    fantasy: {
        origin: 'japan',
        flag: '⚔️ Fantasy / Isekai',
        type: 'Fantasy',
        items: [
            ['Re:Zero', 'Isekai, tâm lý'],
            ['Mushoku Tensei', 'Chuyển sinh, kỳ ảo'],
            ['Overlord', 'Isekai, hành động'],
            ['That Time I Got Reincarnated as a Slime', 'Chuyển sinh, kỳ ảo'],
            ['Sword Art Online', 'Game, phiêu lưu'],
            ['Black Clover', 'Phép thuật, hành động'],
            ['Fairy Tail', 'Phép thuật, phiêu lưu'],
            ['Magi', 'Kỳ ảo, phiêu lưu']
        ]
    }
};
const bestSeller = ['One Piece', 'Golgo 13', 'Detective Conan', 'Dragon Ball', 'Naruto', 'Demon Slayer', 'Slam Dunk', 'KochiKame', 'Jujutsu Kaisen', 'Crayon Shin-chan'];
const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/×/g, 'x').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const genreMap = { action: 'Hành động', adventure: 'Phiêu lưu', fantasy: 'Kỳ ảo', romance: 'Tình cảm', comedy: 'Hài hước', sports: 'Thể thao', horror: 'Kinh dị' };

function inferGenres(text, type) { const t = (text + ' ' + type).toLowerCase(); const out = []; if (/hành động|võ|kiếm|siêu anh hùng|ninja|shinigami|chú thuật/.test(t)) out.push('action'); if (/phiêu lưu|hải tặc|sinh tồn/.test(t)) out.push('adventure'); if (/kỳ ảo|tu tiên|huyền|chuyển sinh|isekai|phép thuật|siêu nhiên|ma cà rồng|giả kim/.test(t)) out.push('fantasy'); if (/tình cảm|romance/.test(t)) out.push('romance'); if (/hài/.test(t)) out.push('comedy'); if (/thể thao|bóng/.test(t)) out.push('sports'); if (/kinh dị/.test(t)) out.push('horror'); return out.length ? out : ['adventure'] }
const stories = Object.values(groups).flatMap((g, gi) => g.items.map(([title, topics], i) => ({ id: slug(title), title, search: title, origin: g.origin, flag: g.flag, type: g.type, topics, genres: inferGenres(topics, g.type), score: (9.7 - ((gi * 3 + i) % 13) * .07).toFixed(1), desc: `${title} là tác phẩm ${g.type.toLowerCase()} nổi bật thuộc nhóm ${topics.toLowerCase()}. Câu chuyện cuốn hút nhờ thế giới giàu màu sắc, nhân vật đáng nhớ và những diễn biến khiến độc giả muốn theo dõi từng chương.`, bestSeller: bestSeller.includes(title), image: '', imageState: 'idle' })));
let activeFilter = 'all',
    activeGenre = '',
    query = '',
    visibleCount = 16,
    rankOffset = 0,
    currentStory = null,
    currentChapterIndex = 0,
    imageQueue = [],
    imageBusy = false;
const importedLibrary = JSON.parse(localStorage.getItem('mochiImportedLibrary') || '{}');
const grid = $('#storyGrid'),
    empty = $('#emptyState'),
    toast = $('#toast'),
    modal = $('#storyModal');

function storyCoverFallback(s) { return `<div class="story-cover-fallback"><img src="assets/covers/default.jpg" alt="Bìa mặc định ${s.title}"></div>` }

function modalPosterFallback(s) { return `<div class="modal-poster-fallback"><img src="assets/covers/default.jpg" alt="Bìa mặc định ${s.title}"></div>` }

function filtered() { return stories.filter(s => (activeFilter === 'all' || s.origin === activeFilter) && (!activeGenre || s.genres.includes(activeGenre)) && (`${s.title} ${s.topics} ${s.type}`).toLowerCase().includes(query.toLowerCase())) }

function render() {
    const all = filtered(),
        data = all.slice(0, visibleCount);
    empty.classList.toggle('show', !all.length);
    $('#loadMoreBtn').parentElement.classList.toggle('hidden', data.length >= all.length || !all.length);
    grid.innerHTML = data.map((s, i) => `<article class="story-card reveal visible" data-id="${s.id}"><div class="story-cover" data-cover-id="${s.id}"><span class="rank-badge">${s.bestSeller ? '🏆 BÁN CHẠY' : 'TOP ' + String(stories.indexOf(s) + 1).padStart(2, '0')}</span><button class="heart" aria-label="Yêu thích">♡</button>${s.image ? `<img src="${s.image}" alt="Bìa ${s.title}" loading="lazy">` : `<div class="cover-loading">📚</div>`}</div><div class="story-info"><div class="story-origin"><span>${s.flag}</span><span>★ ${s.score}</span></div><h3>${s.title}</h3><p>${s.desc}</p><div class="story-bottom"><span>${s.topics.split(',')[0]}</span><button class="read-btn">Đọc ngay</button></div></div></article>`).join(''); bindCards(); data.filter(s => s.imageState === 'idle').forEach(queueImage)
}
function queueImage(s, priority = false) { if (s.imageState !== 'idle') return; s.imageState = 'queued'; priority ? imageQueue.unshift(s) : imageQueue.push(s); processQueue() }
async function processQueue() { if (imageBusy || !imageQueue.length) return; imageBusy = true; const s = imageQueue.shift(); s.imageState = 'loading'; try { s.image = await fetchCover(s); s.imageState = s.image ? 'done' : 'failed' } catch { s.imageState = 'failed' } updateCover(s); imageBusy = false; setTimeout(processQueue, 20) }
function updateCover(s) { const boxes = $$(`[data-cover-id="${CSS.escape(s.id)}"]`); boxes.forEach(box => { box.querySelector('.cover-loading')?.remove(); if (s.image) { const img = document.createElement('img'); img.src = s.image; img.alt = `Bìa ${s.title}`; img.loading = 'lazy'; img.onerror = () => { if (!img.dataset.fallback) { img.dataset.fallback = '1'; img.src = 'assets/covers/default.jpg'; } }; box.appendChild(img) } else { box.appendChild(htmlNode(storyCoverFallback(s))) } }); if (currentStory?.id === s.id) paintModalCover(s); if (typeof renderRank === 'function') renderRank() }
function htmlNode(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild }
function bindCards() { $$('.heart').forEach(b => b.onclick = e => { e.stopPropagation(); b.classList.toggle('liked'); b.textContent = b.classList.contains('liked') ? '♥' : '♡'; showToast(b.classList.contains('liked') ? 'Đã thêm vào yêu thích! 💗' : 'Đã bỏ khỏi yêu thích') }); $$('.read-btn').forEach(b => b.onclick = () => openStory(b.closest('.story-card').dataset.id)); $$('.story-card').forEach(c => c.onclick = e => { if (!e.target.closest('button')) openStory(c.dataset.id) }) }
function openStory(id) { const s = stories.find(x => x.id === id); if (!s) return; currentStory = s; $('#modalTitle').textContent = s.title; $('#modalDescription').textContent = s.desc; $('#modalBadges').innerHTML = `<span>${s.flag}</span><span>${s.type}</span>${s.bestSeller ? '<span>🏆 Top bán chạy</span>' : ''}`; $('#modalMeta').innerHTML = `<span>⭐ ${s.score}/10</span><span>🎨 ${s.topics}</span><span>📖 Đang cập nhật</span>`; const chapters = getChapters(s); $('#chapterList').innerHTML = chapters.map((ch, i) => `<button class="chapter-item" data-chapter-index="${i}"><div><b>${ch.title}</b><small>${ch.source === 'imported' ? 'Nội dung đã nhập' : 'Đã cập nhật'}</small></div><span>Đọc →</span></button>`).join(''); $$('.chapter-item').forEach(b => b.onclick = () => openReader(Number(b.dataset.chapterIndex))); $('#followBtn').classList.remove('active'); $('#followBtn').textContent = '♡ Theo dõi'; paintModalCover(s); modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); if (s.imageState === 'idle') queueImage(s, true) }
function paintModalCover(s) { const c = $('#modalCover'); c.innerHTML = s.image ? `<img src="${s.image}" alt="Bìa ${s.title}" onerror="this.onerror=null;this.src='assets/covers/default.jpg'">` : modalPosterFallback(s) }
function chapterTitle(i, s) { const arr = ['Khởi đầu mới', 'Cuộc gặp bất ngờ', 'Bí mật được hé lộ', 'Trận chiến đầu tiên', 'Người bạn mới', 'Lời hứa', 'Con đường phía trước', 'Thử thách', 'Sức mạnh thức tỉnh', 'Quyết tâm', 'Khoảnh khắc quan trọng', 'Tiếp tục hành trình']; return arr[(i + stories.indexOf(s)) % arr.length] }
function closeModal() { if (modal.contains(document.activeElement)) document.activeElement.blur(); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); currentStory = null }
$$('[data-close-modal]').forEach(x => x.onclick = closeModal); document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() }); $('#followBtn').onclick = e => { e.currentTarget.classList.toggle('active'); e.currentTarget.textContent = e.currentTarget.classList.contains('active') ? '♥ Đang theo dõi' : '♡ Theo dõi'; showToast(e.currentTarget.classList.contains('active') ? 'Đã theo dõi truyện! 💗' : 'Đã bỏ theo dõi') };
function showToast(t) { toast.textContent = t; toast.classList.add('show'); clearTimeout(showToast.t); showToast.t = setTimeout(() => toast.classList.remove('show'), 2200) }
window.addEventListener('load', () => { setTimeout(() => $('#pageLoader').classList.add('hide'), 550); render(); renderRank() }); window.addEventListener('scroll', () => $('#header').classList.toggle('scrolled', scrollY > 25));
$('#loadMoreBtn').onclick = () => { visibleCount += 16; render() }; $('#menuBtn').onclick = () => { $('#nav').classList.toggle('open'); document.body.classList.toggle('menu-open') }; $$('.nav a').forEach(a => a.onclick = () => { $('#nav').classList.remove('open'); document.body.classList.remove('menu-open') });
$$('#filters button').forEach(b => b.onclick = () => { $$('#filters button').forEach(x => x.classList.remove('active')); b.classList.add('active'); activeFilter = b.dataset.filter; activeGenre = ''; visibleCount = 16; render() }); $('#searchInput').oninput = e => { query = e.target.value.trim(); visibleCount = 16; render() };
$$('.genre').forEach(b => b.onclick = () => { activeGenre = b.dataset.genre; activeFilter = 'all'; visibleCount = 16; $$('#filters button').forEach(x => x.classList.toggle('active', x.dataset.filter === 'all')); render(); $('#popular').scrollIntoView({ behavior: 'smooth' }); showToast(`Đã lọc thể loại ${genreMap[activeGenre]} ✨`) });
$('#surpriseBtn').onclick = () => { const s = stories[Math.floor(Math.random() * stories.length)]; openStory(s.id); showToast(`Hôm nay thử đọc ${s.title} nhé! 🎉`) };
function renderRank() { const ordered = [...stories].sort((a, b) => (b.bestSeller - a.bestSeller) || b.score - a.score); const set = Array.from({ length: 5 }, (_, i) => ordered[(i + rankOffset) % ordered.length]); $('#rankingList').innerHTML = set.map((s, i) => `<div class="rank-item" data-rank-id="${s.id}"><span>${i + 1}</span>${s.image ? `<img src="${s.image}" alt="${s.title}">` : '<div>📚</div>'}<div><b>${s.title}</b><small>${s.flag}</small></div><em>★ ${s.score}</em></div>`).join(''); $$('.rank-item').forEach(x => x.onclick = () => openStory(x.dataset.rankId)) }
$('#refreshRank').onclick = () => { rankOffset = (rankOffset + 5) % stories.length; renderRank(); showToast('Đã đổi bảng xếp hạng! ↻') }; $('#subscribeForm').onsubmit = e => { e.preventDefault(); showToast('Đăng ký thành công! Kiểm tra hộp thư nhé 💌'); e.target.reset() };
let sound = false; $('#soundBtn').onclick = () => { sound = !sound; $('#soundBtn').classList.toggle('on', sound); showToast(sound ? 'Đã bật âm thanh vui nhộn ♫' : 'Đã tắt âm thanh') };
const observer = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }), { threshold: .12 }); $$('.reveal').forEach(e => observer.observe(e));
function petal() { const p = document.createElement('i'); p.className = 'petal'; p.style.left = Math.random() * 100 + 'vw'; p.style.animationDuration = 5 + Math.random() * 6 + 's'; p.style.setProperty('--drift', (Math.random() * 180 - 90) + 'px'); p.style.opacity = .35 + Math.random() * .5; $('#petals').appendChild(p); setTimeout(() => p.remove(), 11000) } setInterval(petal, 420); document.addEventListener('mousemove', e => { const c = $('#cursorStar'); c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px' });

// ===== Trình đọc chương bằng JavaScript =====
const readerModal = $('#readerModal'), readerBody = $('#readerBody');
function getChapters(story) {
  const custom = importedLibrary[story.id];
  if (Array.isArray(custom) && custom.length) return custom.map((ch, i) => ({
    title: ch.title || `Chương ${i + 1}`,
    pages: Array.isArray(ch.pages) ? ch.pages : [String(ch.content || '')],
    source: 'imported'
  }));
  return Array.from({ length: 12 }, (_, i) => createDemoChapter(story, i));
}
function createDemoChapter(story, index) {
  const n = index + 1;
  const title = `Chương ${n}: ${chapterTitle(11 - index, story)}`;
  const profile = story.origin === 'japan'
    ? { hero: 'Haru', friend: 'Mika', mentor: 'bà Sora', place: 'thị trấn Hanamori', land: 'thung lũng Akari', artifact: 'chiếc la bàn hoa anh đào' }
    : story.origin === 'korea'
      ? { hero: 'Ji An', friend: 'Min Jae', mentor: 'ông Hyeon', place: 'thành phố Mureung', land: 'cao nguyên Wolha', artifact: 'mảnh ngọc trăng xanh' }
      : story.origin === 'china'
        ? { hero: 'Lâm Vũ', friend: 'Tiểu Ninh', mentor: 'lão Tần', place: 'trấn Thanh Hà', land: 'dãy núi Vân Mộng', artifact: 'cuộn cổ thư bằng ngọc' }
        : { hero: 'Alex', friend: 'June', mentor: 'bác Rowan', place: 'thành phố Brightwood', land: 'khu rừng Silver Creek', artifact: 'chiếc huy hiệu hình sao' };
  const mood = ['một buổi sớm phủ sương', 'một chiều rực nắng', 'một đêm đầy đom đóm', 'một ngày mưa dịu dàng'][index % 4];
  const challenge = ['cánh cổng đá bị phong ấn', 'ngôi làng mất hết tiếng cười', 'dòng sông bỗng chảy ngược', 'chiếc tháp đồng hồ ngừng chạy', 'khu rừng liên tục thay đổi lối đi', 'những bức thư không có người gửi'][index % 6];
  const secret = ['một lời hứa từ nhiều năm trước', 'bản đồ dẫn đến khu vườn trên mây', 'bí mật về người canh giữ cuối cùng', 'câu chuyện bị xóa khỏi ký ức của thị trấn', 'nguồn gốc của ánh sáng trong cổ vật', 'mối liên hệ giữa hai gia đình tưởng như xa lạ'][index % 6];
  const pages = [];
  pages.push(`${mood.charAt(0).toUpperCase() + mood.slice(1)}, ${profile.place} thức dậy trong tiếng chuông ngân từ quảng trường trung tâm. ${profile.hero} đứng bên cửa sổ, nhìn những mái nhà còn đọng nước và nghĩ về những sự kiện đã xảy ra trong chuyến đi trước. Dù mọi người đã trở về an toàn, cảm giác bất an vẫn chưa biến mất. ${profile.artifact} đặt trên bàn khẽ rung lên, phát ra một vệt sáng mỏng như sợi chỉ.\n\n${profile.friend} chạy tới ngay khi mặt trời vừa lên khỏi hàng cây. Người bạn mang theo một chiếc túi đầy bánh, hai bình nước và một cuốn sổ cũ được tìm thấy trong kho lưu trữ. Trên trang đầu tiên chỉ có một câu viết bằng mực bạc: “Khi bóng của ngọn tháp chạm vào giếng cổ, con đường thật sự sẽ xuất hiện.” Cả hai nhìn nhau. Họ hiểu rằng đây không phải một lời nhắn tình cờ.\n\nTrước khi lên đường, họ tìm gặp ${profile.mentor}. Người lớn tuổi lặng im rất lâu rồi mới kể rằng ${challenge} từng xuất hiện trong truyền thuyết của vùng đất này. Những ai tìm cách giải quyết bằng sức mạnh đều thất bại, bởi thử thách ấy chỉ mở lối cho người biết quan sát, lắng nghe và giữ lời hứa. ${profile.mentor} trao cho họ một sợi dây đỏ, dặn rằng dù xảy ra chuyện gì cũng không được tách khỏi nhau.`);
  pages.push(`Con đường rời ${profile.place} chạy qua cánh đồng hoa dại và một cây cầu gỗ đã bạc màu. ${profile.hero} đi trước, còn ${profile.friend} vừa bước vừa ghi lại mọi dấu hiệu khác thường. Họ phát hiện những viên đá bên đường đều có cùng một biểu tượng: ba vòng tròn nối với nhau bằng một đường cong. Kỳ lạ hơn, mỗi khi ${profile.artifact} đến gần, biểu tượng ấy lại sáng lên trong vài giây.\n\nĐến giữa trưa, họ gặp một người bán hàng rong đang ngồi dưới gốc cây. Người ấy không bán đồ ăn hay vật dụng, mà chỉ bày những chiếc lọ chứa âm thanh: tiếng mưa trên mái ngói, tiếng sóng ngoài khơi, tiếng cười trẻ nhỏ và cả tiếng lá khô bị giẫm lên. Để đổi lấy thông tin, người bán hàng yêu cầu mỗi người kể một ký ức mà mình sợ quên nhất.\n\n${profile.hero} kể về ngày đầu tiên gặp ${profile.friend}, khi cả hai cùng trú mưa dưới mái hiên của một tiệm sách. ${profile.friend} kể về lời hứa sẽ luôn quay lại tìm nhau nếu có ngày bị lạc. Người bán hàng mỉm cười, đưa cho họ một chiếc lọ trống và nói: “Khi các cháu nghe thấy âm thanh không thuộc về nơi mình đang đứng, hãy mở nắp lọ. Nó sẽ giữ lại điều mà kẻ khác muốn che giấu.”`);
  pages.push(`Buổi chiều, họ tới chân ${profile.land}. Không khí ở đây lạnh hơn, còn mây thấp đến mức tưởng như chỉ cần giơ tay là có thể chạm vào. Lối mòn chia thành ba hướng nhưng trên bản đồ chỉ có một. ${profile.friend} đề nghị đánh dấu cây để tránh đi vòng, song vết phấn vừa vẽ đã biến mất. Khu vực này rõ ràng đang tự thay đổi.\n\nThay vì lựa chọn ngẫu nhiên, ${profile.hero} đặt ${profile.artifact} xuống đất. Ánh sáng từ cổ vật không chỉ về bất cứ con đường nào mà xoay thành một vòng tròn. Khi cả hai im lặng, họ nghe thấy tiếng chuông rất nhỏ vọng lên từ dưới lớp đất. ${profile.friend} chợt nhớ lời người bán hàng rong và mở chiếc lọ trống. Tiếng chuông lập tức bị hút vào, để lại phía trước một vệt sáng dẫn xuyên qua bụi cây.\n\nSau lớp cây là một cầu thang đá đi xuống lòng núi. Hai bên tường có những bức tranh mô tả người dân từng sống ở đây. Trong tranh đầu, họ cùng xây một ngọn tháp. Trong tranh thứ hai, họ tranh cãi vì muốn giữ ánh sáng cho riêng mình. Đến bức cuối cùng, ngọn tháp bị khóa và mọi người rời đi trong bóng tối. ${profile.hero} hiểu rằng câu chuyện này có liên quan đến ${secret}.`);
  pages.push(`Cầu thang kết thúc ở một đại sảnh hình tròn. Giữa phòng là chiếc bàn đá với bốn ô trống, còn trên trần có hàng trăm mảnh kính phản chiếu khuôn mặt của bất kỳ ai bước vào. Khi ${profile.hero} và ${profile.friend} tiến lại gần, các tấm kính bắt đầu thì thầm những điều khiến họ nghi ngờ nhau: rằng người kia đang giấu bí mật, rằng chuyến đi này chỉ có thể thành công nếu một người bỏ lại người còn lại.\n\n${profile.friend} khựng lại. Có những lời thì thầm giống hệt nỗi sợ sâu kín mà chưa từng kể với ai. ${profile.hero} cũng cảm thấy bàn tay lạnh đi, nhưng nhớ đến sợi dây đỏ của ${profile.mentor}. Cả hai buộc hai đầu dây vào cổ tay rồi lần lượt nói ra điều mình đang nghe thấy. Khi lời nói được thừa nhận, những tấm kính chứa chúng liền xuất hiện vết nứt.\n\nHọ nhận ra đại sảnh không kiểm tra sức mạnh mà kiểm tra sự tin tưởng. Bốn ô trên bàn đá tương ứng với bốn điều: ký ức, sự thật, lòng can đảm và lời hứa. Chiếc lọ âm thanh được đặt vào ô ký ức. Cuốn sổ cũ đặt vào ô sự thật. ${profile.artifact} đặt vào ô lòng can đảm. Ô cuối cùng vẫn trống, chờ một lời hứa được nói ra bằng cả sự chân thành.`);
  pages.push(`${profile.hero} đặt tay lên mặt bàn và hứa rằng sẽ không dùng bí mật tìm được để làm tổn thương bất kỳ ai. ${profile.friend} hứa rằng sẽ không bỏ đi chỉ vì sợ hãi. Hai lời nói hòa vào nhau thành một luồng sáng, lấp đầy ô cuối cùng. Cả đại sảnh rung chuyển, nhưng thay vì sụp đổ, các bức tường từ từ tách ra để lộ một hành lang dài đầy cây leo phát sáng.\n\nỞ cuối hành lang là một cô bé đang ngủ trong vòng tròn bằng đá. Bên cạnh cô là hàng chục chiếc đồng hồ, mỗi chiếc dừng ở một thời điểm khác nhau. Khi được đánh thức, cô bé hoảng hốt hỏi năm nay là năm nào. Cô tự giới thiệu mình là người giữ cổng, đã ở đây để ngăn ${challenge} lan ra ngoài, nhưng thời gian trong căn phòng không trôi giống thế giới bên ngoài.\n\nCô bé cho biết phong ấn đang yếu dần vì có người lấy mất “trái tim” của ngọn tháp. Thứ bị đánh cắp không phải đá quý mà là một chiếc chuông nhỏ chứa ký ức chung của cư dân cũ. Nếu chiếc chuông không được trả lại trước nửa đêm, mọi con đường trong ${profile.land} sẽ khép kín và những người đang ở đây sẽ quên mất lý do mình đến.`);
  pages.push(`Cả ba đi qua cánh cửa phía sau căn phòng và bước vào mê cung gồm những hành lang giống hệt nhau. Mỗi lần rẽ sai, họ lại trở về điểm xuất phát nhưng mất đi một ký ức nhỏ. Lần đầu, ${profile.friend} quên tên món bánh yêu thích. Lần thứ hai, ${profile.hero} quên màu chiếc ô từng dùng trong ngày hai người gặp nhau. Những mất mát tưởng nhỏ nhưng khiến cả hai sợ rằng rồi mình sẽ quên luôn người bên cạnh.\n\nĐể chống lại mê cung, họ chia nhau kể liên tục những kỷ niệm. Mỗi câu chuyện được nói thành lời tạo ra một dấu chân phát sáng trên sàn. Cô bé người giữ cổng cũng bắt đầu kể về gia đình và những ngày thị trấn còn đông vui. Nhờ đó, con đường thật dần hiện ra giữa vô số lối giả.\n\nỞ trung tâm mê cung, họ gặp một sinh vật khoác áo choàng bằng lông chim đen. Nó giữ chiếc chuông nhỏ trong tay nhưng không tấn công. Sinh vật nói mình lấy chiếc chuông vì quá mệt mỏi khi phải nghe những ký ức đau buồn lặp đi lặp lại. Nó chỉ muốn mọi người quên quá khứ để không còn đau nữa.`);
  pages.push(`${profile.hero} không lập tức giành lại chiếc chuông. Cậu hỏi sinh vật đã phải ở đây bao lâu và vì sao không rời đi. Sinh vật thú nhận mình vốn là người canh giữ ký ức, được tạo ra từ nỗi buồn của những cư dân rời bỏ ngọn tháp. Nó không có nơi nào khác để đến. Mỗi lần chuông ngân, nó lại cảm nhận toàn bộ tiếc nuối của họ như chính mình đã trải qua.\n\n${profile.friend} nói rằng quên đi có thể làm nỗi đau biến mất trong chốc lát, nhưng cũng lấy mất những điều tốt đẹp gắn liền với nó. Người ta không thể giữ tiếng cười mà xóa hết nước mắt, bởi cả hai thường nằm trong cùng một ký ức. Cô bé người giữ cổng đề nghị chia sẻ gánh nặng thay vì bắt một người phải giữ tất cả.\n\nSau một hồi im lặng, sinh vật trao chiếc chuông lại nhưng yêu cầu họ chứng minh lời nói. Cả nhóm đặt tay lên chuông. Mỗi người nhìn thấy một phần ký ức của cư dân cũ: những bữa cơm đông người, lễ hội dưới trời mưa, cuộc cãi vã bên ngọn tháp và khoảnh khắc họ rời đi. Nỗi buồn rất lớn, nhưng bên trong nó vẫn có tình yêu dành cho nơi từng gọi là nhà.`);
  pages.push(`Khi chuông được đưa về đại sảnh, bốn ô trên bàn đá đồng loạt sáng lên. Tiếng ngân lan qua lòng núi, chạy dọc các con đường rồi bay lên bầu trời. ${challenge.charAt(0).toUpperCase() + challenge.slice(1)} bắt đầu thay đổi: những vết nứt khép lại, dòng nước trở về đúng hướng, còn các lối mòn thôi di chuyển. Bên ngoài, mây tách ra để lộ những vì sao dù trời chưa tối hẳn.\n\nSinh vật áo choàng đen không biến mất. Nó trở thành người giữ thư viện ký ức cùng cô bé, nhưng lần này mọi ký ức sẽ được chia sẻ với những người tự nguyện lắng nghe. ${profile.hero} và ${profile.friend} giúp họ sắp xếp những chiếc lọ âm thanh lên kệ. Mỗi chiếc lọ được gắn một nhãn nhỏ, không phải để chôn giấu quá khứ mà để người đến sau hiểu điều gì đã xảy ra.\n\nTrước lúc chia tay, cô bé trao cho hai người một mảnh giấy được giấu trong đáy chiếc chuông. Trên đó có ký hiệu giống hệt ba vòng tròn bên đường và một dòng chữ: “Đây mới chỉ là chiếc khóa thứ nhất.” Phía dưới là hình vẽ của một hồ nước nằm giữa mây, đúng nơi được nhắc tới trong lời nhắn cuối chương trước.`);
  pages.push(`Trên đường trở về ${profile.place}, cả hai đi chậm hơn. Không ai nói về phần thưởng vì điều họ mang về không thể đong đếm bằng tiền hay đá quý. ${profile.friend} mở sổ, ghi lại từng sự kiện trong ngày, kể cả những điều đã suýt quên trong mê cung. ${profile.hero} bổ sung những chi tiết nhỏ: mùi gỗ ẩm trong cầu thang, ánh sáng xanh trên cây leo và cách sinh vật áo choàng run tay khi trao chiếc chuông.\n\nKhi họ qua cây cầu gỗ, người bán hàng rong đã biến mất. Trên gốc cây chỉ còn một chiếc lọ mới, bên trong chứa tiếng chuông vừa ngân trong lòng núi. Tờ giấy buộc quanh cổ lọ viết: “Một ký ức được chia sẻ sẽ không còn là gánh nặng của riêng ai.” Họ mang chiếc lọ về đặt trong thư viện của ${profile.mentor}.\n\nĐêm xuống, cả thị trấn tổ chức một bữa ăn nhỏ để chào đón họ. Không có sân khấu lớn hay lời tung hô, chỉ có ánh đèn vàng và những câu chuyện được kể qua lại. ${profile.hero} nhận ra chuyến hành trình đã thay đổi mình theo cách rất nhẹ: cậu không còn xem nỗi sợ là thứ phải che giấu, mà là dấu hiệu cho biết điều gì thật sự quan trọng.`);
  pages.push(`Trước khi ngủ, ${profile.hero} đặt ${profile.artifact} cạnh mảnh giấy mới. Hai vật thể phát sáng và tạo ra hình ảnh một bản đồ rộng hơn, trải từ ${profile.land} đến một vùng chưa ai trong thị trấn từng đặt chân tới. Ở đó có một hồ nước lơ lửng giữa trời, được nối với mặt đất bằng những bậc thang chỉ xuất hiện dưới ánh trăng.\n\n${profile.friend} đứng ngoài cửa sổ, giơ lên một túi hành lý đã chuẩn bị sẵn. “Tớ biết cậu sẽ không chờ đến sáng,” người bạn cười. Cả hai thống nhất sẽ nghỉ một đêm, thu thập thêm thông tin và lên đường khi bình minh tới. Nhưng đúng lúc ấy, chiếc lọ âm thanh trên kệ tự mở nắp.\n\nTừ trong lọ vang ra một giọng nói rất khẽ, không phải tiếng chuông: “Đừng đến hồ nước. Người đang chờ ở đó biết tên thật của các ngươi.” Căn phòng bỗng im lặng. Trên bản đồ, điểm sáng ở giữa hồ chuyển từ màu xanh sang đỏ. ${profile.hero} khép cửa sổ, còn ${profile.friend} mở cuốn sổ sang trang mới. Chương này kết thúc, nhưng bí ẩn lớn hơn vừa thực sự bắt đầu.`);
  return { title, pages, source: 'original' };
}
function openReader(index) {
  if (!currentStory) return;
  const chapters = getChapters(currentStory); currentChapterIndex = Math.max(0, Math.min(index, chapters.length - 1));
  const ch = chapters[currentChapterIndex];
  $('#readerStory').textContent = currentStory.title; $('#readerTitle').textContent = ch.title;
  readerBody.innerHTML = ch.pages.map((page, i) => `<section class="reader-page"><h3>Trang ${i + 1}</h3><p${i === 0 ? ' class="scene"' : ''}>${escapeHtml(page).replace(/\n/g, '</p><p>')}</p></section>`).join('');
  $('#prevChapter').disabled = currentChapterIndex === 0; $('#nextChapter').disabled = currentChapterIndex === chapters.length - 1;
  readerBody.scrollTop = 0; updateReaderProgress(); readerModal.classList.add('open'); readerModal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
}
function closeReader() { if (readerModal.contains(document.activeElement)) document.activeElement.blur(); readerModal.classList.remove('open'); readerModal.setAttribute('aria-hidden', 'true'); }
function escapeHtml(v) { return String(v).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c])) }
$$('[data-close-reader]').forEach(x => x.onclick = closeReader);
$('#prevChapter').onclick = () => openReader(currentChapterIndex - 1); $('#nextChapter').onclick = () => openReader(currentChapterIndex + 1); $('#chapterMenu').onclick = closeReader;
readerBody.addEventListener('scroll', updateReaderProgress); function updateReaderProgress() { const max = readerBody.scrollHeight - readerBody.clientHeight; $('#readerProgress').style.width = (max ? readerBody.scrollTop / max * 100 : 100) + '%' }

// Nhập file JSON chứa nội dung mà chủ website có quyền sử dụng.
$('#importBtn').onclick = () => $('#jsonInput').click();
$('#jsonInput').onchange = async e => {
  const file = e.target.files?.[0]; if (!file || !currentStory) return;
  try {
    const data = JSON.parse(await file.text());
    const chapters = Array.isArray(data) ? data : data.chapters;
    if (!Array.isArray(chapters) || !chapters.length) throw new Error('format');
    importedLibrary[currentStory.id] = chapters.map((ch, i) => ({ title: ch.title || `Chương ${i + 1}`, pages: Array.isArray(ch.pages) ? ch.pages : [String(ch.content || '')] }));
    localStorage.setItem('mochiImportedLibrary', JSON.stringify(importedLibrary)); openStory(currentStory.id); showToast(`Đã nhập ${chapters.length} chương cho ${currentStory.title} ✅`);
  } catch { showToast('File JSON chưa đúng định dạng. Hãy xem README.txt') }
  e.target.value = '';
};
document.addEventListener('keydown', e => { if (e.key === 'Escape' && readerModal.classList.contains('open')) closeReader() });