(function () {
    var SUBJECTS = ['Riyaziyyat', 'Fizika', 'Kimya', 'Biologiya', 'Tarix', 'Coğrafiya', 'Azərbaycan dili', 'İngilis dili', 'İnformatika'];
    var PER_PAGE = 6;

    var teachers = [
        { id: 1, slug: 'rashad-huseynov', name: 'Rəşad Hüseynov', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Riyaziyyat'], bio: '10 illik DİM təcrübəsi. Riyaziyyat üzrə yüzlərlə tələbə imtahandan uğurla keçib.', rating: 4.9, reviews: 124, price: 20, groupPrice: 12, sessionTypes: ['1-on-1', 'Group'], availability: ['morning', 'afternoon'], lessons: 890, joined: '2023-03-15' },
        { id: 2, slug: 'leyla-quliyeva', name: 'Leyla Quliyeva', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Fizika'], bio: 'Bakı Dövlət Universiteti məzunu. Fizika fənni üzrə interaktiv dərslər.', rating: 5.0, reviews: 98, price: 25, groupPrice: 15, sessionTypes: ['1-on-1'], availability: ['afternoon', 'evening'], lessons: 720, joined: '2023-05-20' },
        { id: 3, slug: 'elvin-mammadov', name: 'Elvin Məmmədov', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Kimya', 'Biologiya'], bio: 'Kimya və biologiya üzrə ixtisaslaşmış müəllim. Praktik test həllləri ilə hazırlıq.', rating: 4.7, reviews: 76, price: 22, groupPrice: 11, sessionTypes: ['1-on-1', 'Group'], availability: ['morning', 'evening'], lessons: 540, joined: '2023-08-10' },
        { id: 4, slug: 'gunay-aliyeva', name: 'Günay Əliyeva', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['İngilis dili'], bio: 'IELTS sertifikatlı müəllim. DİM ingilis dili imtahanına sistemli hazırlıq.', rating: 4.8, reviews: 112, price: 30, groupPrice: 18, sessionTypes: ['1-on-1', 'Group'], availability: ['morning', 'afternoon', 'evening'], lessons: 650, joined: '2023-02-01' },
        { id: 5, slug: 'tural-rahimov', name: 'Tural Rəhimov', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Azərbaycan dili'], bio: 'Dil qrammatikası və esse yazma üzrə mütəxəssis. DİM formatına uyğun dərslər.', rating: 4.9, reviews: 89, price: 18, groupPrice: 9, sessionTypes: ['1-on-1', 'Group'], availability: ['afternoon'], lessons: 480, joined: '2024-01-12' },
        { id: 6, slug: 'nergiz-seferova', name: 'Nərgiz Səfərova', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Tarix'], bio: 'Tarix fənni üzrə 8 illik təcrübə. Xronologiya və mənbə analizi üzrə metodika.', rating: 4.6, reviews: 54, price: 15, groupPrice: 9, sessionTypes: ['1-on-1', 'Group'], availability: ['morning', 'afternoon'], lessons: 320, joined: '2024-03-08' },
        { id: 7, slug: 'kamran-ismayilov', name: 'Kamran İsmayılov', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Riyaziyyat', 'Fizika'], bio: 'Texniki fənlər üzrə kompleks hazırlıq. Məntiq və problem həlli üsulları.', rating: 4.8, reviews: 67, price: 23, groupPrice: 13, sessionTypes: ['1-on-1'], availability: ['evening'], lessons: 410, joined: '2023-11-25' },
        { id: 8, slug: 'sevda-mahmudova', name: 'Sevda Mahmudova', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Biologiya'], bio: 'Biologiya üzrə vizual dərslər. Diaqramlar və sxemlər ilə mövzuların izahı.', rating: 4.5, reviews: 43, price: 19, groupPrice: 10, sessionTypes: ['1-on-1', 'Group'], availability: ['morning', 'evening'], lessons: 280, joined: '2024-06-01' },
        { id: 9, slug: 'orxan-babayev', name: 'Orxan Babayev', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Coğrafiya'], bio: 'Coğrafiya üzrə xəritə və statistika bacarıqlarının inkişafı. DİM formatına uyğun.', rating: 4.7, reviews: 38, price: 17, groupPrice: 9, sessionTypes: ['Group'], availability: ['afternoon', 'evening'], lessons: 195, joined: '2024-08-15' },
        { id: 10, slug: 'aynur-hasanli', name: 'Aynur Həsənli', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Kimya'], bio: 'Kimya reaksiyaları və hesablamalar üzrə praktik yanaşma. Sürətli nəticə metodları.', rating: 4.9, reviews: 91, price: 21, groupPrice: 11, sessionTypes: ['1-on-1', 'Group'], availability: ['morning', 'afternoon'], lessons: 560, joined: '2023-07-18' },
        { id: 11, slug: 'vugar-aliyev', name: 'Vüqar Əliyev', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['İnformatika'], bio: 'Proqramlaşdırma və alqoritmlər üzrə DİM hazırlığı. Python və C++ dərsləri.', rating: 4.8, reviews: 55, price: 28, groupPrice: 16, sessionTypes: ['1-on-1'], availability: ['evening'], lessons: 340, joined: '2024-02-20' },
        { id: 12, slug: 'lala-mammadova', name: 'Lala Məmmədova', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face&auto=format&q=80', subjects: ['Riyaziyyat'], bio: 'Riyaziyyat üzrə zəif mövzuların gücləndirilməsi. Fərdi öyrənmə planı.', rating: 4.4, reviews: 29, price: 16, groupPrice: 9, sessionTypes: ['1-on-1', 'Group'], availability: ['morning'], lessons: 150, joined: '2025-01-05' }
    ];

    var state = {
        search: '',
        subjects: [],
        priceMin: '',
        priceMax: '',
        rating: '',
        sessionType: '',
        availability: [],
        sort: 'popular',
        page: 1
    };

    function debounce(fn, ms) {
        var timer;
        return function () {
            var args = arguments;
            var ctx = this;
            clearTimeout(timer);
            timer = setTimeout(function () { fn.apply(ctx, args); }, ms);
        };
    }

    function renderStars(rating) {
        var html = '';
        for (var i = 1; i <= 5; i++) {
            if (rating >= i) html += '<span class="star">★</span>';
            else if (rating >= i - 0.5) html += '<span class="star">★</span>';
            else html += '<span class="star empty">★</span>';
        }
        return html;
    }

    function buildFilterHTML(idPrefix) {
        var p = idPrefix || '';
        var subjectsHTML = SUBJECTS.map(function (s) {
            var checked = state.subjects.indexOf(s) !== -1 ? ' checked' : '';
            return '<label><input type="checkbox" class="filter-subject" value="' + s + '"' + checked + '> ' + s + '</label>';
        }).join('');

        var avail = ['morning', 'afternoon', 'evening'];
        var availLabels = { morning: 'Səhər (08:00–12:00)', afternoon: 'Günorta (12:00–17:00)', evening: 'Axşam (17:00–22:00)' };
        var availHTML = avail.map(function (a) {
            var checked = state.availability.indexOf(a) !== -1 ? ' checked' : '';
            return '<label><input type="checkbox" class="filter-availability" value="' + a + '"' + checked + '> ' + availLabels[a] + '</label>';
        }).join('');

        return '' +
            '<div class="filter-group">' +
                '<span class="filter-label">Fənn</span>' +
                '<div class="filter-checkboxes">' + subjectsHTML + '</div>' +
            '</div>' +
            '<div class="filter-group">' +
                '<span class="filter-label">Qiymət aralığı (₼)</span>' +
                '<div class="price-range">' +
                    '<input type="number" id="' + p + 'price-min" placeholder="Min" min="0" value="' + state.priceMin + '">' +
                    '<span>—</span>' +
                    '<input type="number" id="' + p + 'price-max" placeholder="Max" min="0" value="' + state.priceMax + '">' +
                '</div>' +
            '</div>' +
            '<div class="filter-group">' +
                '<span class="filter-label">Reytinq</span>' +
                '<select id="' + p + 'rating" class="filter-select">' +
                    '<option value=""' + (state.rating === '' ? ' selected' : '') + '>Hamısı</option>' +
                    '<option value="4"' + (state.rating === '4' ? ' selected' : '') + '>4+ ulduz</option>' +
                    '<option value="4.5"' + (state.rating === '4.5' ? ' selected' : '') + '>4.5+ ulduz</option>' +
                    '<option value="5"' + (state.rating === '5' ? ' selected' : '') + '>5 ulduz</option>' +
                '</select>' +
            '</div>' +
            '<div class="filter-group">' +
                '<span class="filter-label">Dərs növü</span>' +
                '<select id="' + p + 'session-type" class="filter-select">' +
                    '<option value=""' + (state.sessionType === '' ? ' selected' : '') + '>Hamısı</option>' +
                    '<option value="1-on-1"' + (state.sessionType === '1-on-1' ? ' selected' : '') + '>Fərdi (1-on-1)</option>' +
                    '<option value="Group"' + (state.sessionType === 'Group' ? ' selected' : '') + '>Qrup</option>' +
                '</select>' +
            '</div>' +
            '<div class="filter-group">' +
                '<span class="filter-label">Mövcudluq</span>' +
                '<div class="filter-checkboxes">' + availHTML + '</div>' +
            '</div>';
    }

    function readFilters(prefix) {
        var container = prefix === 'mob-' ?
            document.getElementById('drawer-filters') :
            document.getElementById('desktop-filters');

        if (!container) return;

        state.subjects = [];
        container.querySelectorAll('.filter-subject:checked').forEach(function (el) {
            state.subjects.push(el.value);
        });

        state.availability = [];
        container.querySelectorAll('.filter-availability:checked').forEach(function (el) {
            state.availability.push(el.value);
        });

        var priceMin = document.getElementById(prefix + 'price-min');
        var priceMax = document.getElementById(prefix + 'price-max');
        var rating = document.getElementById(prefix + 'rating');
        var sessionType = document.getElementById(prefix + 'session-type');

        state.priceMin = priceMin ? priceMin.value : '';
        state.priceMax = priceMax ? priceMax.value : '';
        state.rating = rating ? rating.value : '';
        state.sessionType = sessionType ? sessionType.value : '';
    }

    function bindFilters(prefix, live) {
        var container = prefix === 'mob-' ?
            document.getElementById('drawer-filters') :
            document.getElementById('desktop-filters');

        if (!container) return;

        container.querySelectorAll('input, select').forEach(function (el) {
            el.addEventListener('change', function () {
                readFilters(prefix);
                if (live) { state.page = 1; render(); }
            });
        });

        ['price-min', 'price-max'].forEach(function (id) {
            var input = document.getElementById(prefix + id);
            if (input && live) {
                input.addEventListener('input', debounce(function () {
                    readFilters(prefix);
                    state.page = 1;
                    render();
                }, 400));
            }
        });
    }

    function getFiltered() {
        var result = teachers.slice();

        if (state.search.trim()) {
            var q = state.search.toLowerCase().trim();
            result = result.filter(function (t) {
                return t.name.toLowerCase().indexOf(q) !== -1 ||
                    t.subjects.some(function (s) { return s.toLowerCase().indexOf(q) !== -1; });
            });
        }

        if (state.subjects.length) {
            result = result.filter(function (t) {
                return t.subjects.some(function (s) { return state.subjects.indexOf(s) !== -1; });
            });
        }

        if (state.priceMin !== '') result = result.filter(function (t) { return t.price >= Number(state.priceMin); });
        if (state.priceMax !== '') result = result.filter(function (t) { return t.price <= Number(state.priceMax); });
        if (state.rating !== '') result = result.filter(function (t) { return t.rating >= Number(state.rating); });

        if (state.sessionType) {
            result = result.filter(function (t) { return t.sessionTypes.indexOf(state.sessionType) !== -1; });
        }

        if (state.availability.length) {
            result = result.filter(function (t) {
                return state.availability.some(function (a) { return t.availability.indexOf(a) !== -1; });
            });
        }

        if (state.sort === 'rating') result.sort(function (a, b) { return b.rating - a.rating; });
        else if (state.sort === 'price-asc') result.sort(function (a, b) { return a.price - b.price; });
        else if (state.sort === 'newest') result.sort(function (a, b) { return new Date(b.joined) - new Date(a.joined); });
        else result.sort(function (a, b) { return b.lessons - a.lessons; });

        return result;
    }

    function countActiveFilters() {
        var n = 0;
        if (state.subjects.length) n++;
        if (state.priceMin !== '' || state.priceMax !== '') n++;
        if (state.rating !== '') n++;
        if (state.sessionType !== '') n++;
        if (state.availability.length) n++;
        return n;
    }

    function cardHTML(t) {
        var url = '/teachers/' + t.slug;
        var hasGroup = t.sessionTypes.indexOf('Group') !== -1;
        var priceHTML = hasGroup
            ? '<strong>₼' + t.price + '</strong> <span class="group">· qrup ₼' + t.groupPrice + '</span>'
            : '<strong>₼' + t.price + '</strong> <span class="group">/ dərs</span>';

        return '<article class="teacher-card" data-url="' + url + '">' +
            '<div class="teacher-card-inner">' +
                '<div class="teacher-card-header">' +
                    '<img src="' + t.photo + '" alt="' + t.name + '" class="teacher-avatar" loading="lazy">' +
                    '<div>' +
                        '<h3>' + t.name + '</h3>' +
                        '<p class="teacher-subjects">' + t.subjects.join(' · ') + '</p>' +
                    '</div>' +
                '</div>' +
                '<p class="teacher-bio line-clamp-2">' + t.bio + '</p>' +
                '<div class="teacher-rating">' +
                    '<span class="stars">' + renderStars(t.rating) + '</span>' +
                    '<span class="score">' + t.rating + '</span>' +
                    '<span class="reviews">(' + t.reviews + ' rəy)</span>' +
                '</div>' +
                '<div class="teacher-card-footer">' +
                    '<div class="teacher-price">' + priceHTML + '</div>' +
                    '<a href="' + url + '" class="btn btn-outline btn-sm">Profilə bax</a>' +
                '</div>' +
            '</div>' +
        '</article>';
    }

    function renderPagination(totalPages) {
        var el = document.getElementById('pagination');
        if (totalPages <= 1) { el.innerHTML = ''; return; }

        var html = '';
        html += '<button class="page-btn" data-page="' + (state.page - 1) + '"' + (state.page === 1 ? ' disabled' : '') + '>&lsaquo;</button>';

        for (var i = 1; i <= totalPages; i++) {
            if (totalPages > 7 && i > 2 && i < totalPages - 1 && Math.abs(i - state.page) > 1) {
                if (i === 3 || i === totalPages - 2) html += '<span class="page-dots">…</span>';
                continue;
            }
            html += '<button class="page-btn' + (i === state.page ? ' active' : '') + '" data-page="' + i + '">' + i + '</button>';
        }

        html += '<button class="page-btn" data-page="' + (state.page + 1) + '"' + (state.page === totalPages ? ' disabled' : '') + '>&rsaquo;</button>';
        el.innerHTML = html;

        el.querySelectorAll('.page-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                if (btn.disabled) return;
                state.page = Number(btn.dataset.page);
                render();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    function render() {
        var filtered = getFiltered();
        var totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
        if (state.page > totalPages) state.page = totalPages;

        var start = (state.page - 1) * PER_PAGE;
        var pageItems = filtered.slice(start, start + PER_PAGE);

        var grid = document.getElementById('teachers-grid');
        var empty = document.getElementById('empty-state');
        var countEl = document.getElementById('results-count');
        var badge = document.getElementById('filter-badge');

        countEl.textContent = filtered.length ? filtered.length + ' müəllim tapıldı' : '';

        var active = countActiveFilters();
        if (active > 0) {
            badge.textContent = active;
            badge.classList.add('visible');
        } else {
            badge.classList.remove('visible');
        }

        if (filtered.length === 0) {
            grid.innerHTML = '';
            grid.classList.add('hidden');
            empty.classList.add('visible');
            document.getElementById('pagination').innerHTML = '';
        } else {
            grid.classList.remove('hidden');
            empty.classList.remove('visible');
            grid.innerHTML = pageItems.map(cardHTML).join('');
            renderPagination(totalPages);

            grid.querySelectorAll('.teacher-card').forEach(function (card) {
                card.addEventListener('click', function (e) {
                    if (e.target.closest('a')) return;
                    window.location.href = card.dataset.url;
                });
            });
        }
    }

    function initFilters() {
        document.getElementById('desktop-filters').innerHTML = buildFilterHTML('');
        document.getElementById('drawer-filters').innerHTML = buildFilterHTML('mob-');
        bindFilters('', true);
        bindFilters('mob-', false);
    }

    function resetFilters() {
        state.search = '';
        state.subjects = [];
        state.priceMin = '';
        state.priceMax = '';
        state.rating = '';
        state.sessionType = '';
        state.availability = [];
        state.page = 1;
        document.getElementById('search-input').value = '';
        initFilters();
        render();
    }

    function openDrawer() {
        document.getElementById('drawer-filters').innerHTML = buildFilterHTML('mob-');
        bindFilters('mob-', false);
        document.getElementById('filter-overlay').classList.add('open');
        document.getElementById('filter-drawer').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        document.getElementById('filter-overlay').classList.remove('open');
        document.getElementById('filter-drawer').classList.remove('open');
        document.body.style.overflow = '';
    }

    document.getElementById('search-input').addEventListener('input', debounce(function (e) {
        state.search = e.target.value;
        state.page = 1;
        render();
    }, 300));

    document.getElementById('sort-select').addEventListener('change', function (e) {
        state.sort = e.target.value;
        state.page = 1;
        render();
    });

    document.getElementById('desktop-reset').addEventListener('click', resetFilters);
    document.getElementById('empty-reset').addEventListener('click', resetFilters);
    document.getElementById('mobile-filter-btn').addEventListener('click', openDrawer);
    document.getElementById('drawer-close').addEventListener('click', closeDrawer);
    document.getElementById('filter-overlay').addEventListener('click', closeDrawer);
    document.getElementById('drawer-reset').addEventListener('click', function () {
        resetFilters();
        closeDrawer();
    });
    document.getElementById('drawer-apply').addEventListener('click', function () {
        readFilters('mob-');
        state.page = 1;
        initFilters();
        render();
        closeDrawer();
    });

    initFilters();
    render();
})();
