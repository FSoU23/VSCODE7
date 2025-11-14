// Проверка загрузки jQuery
$(document).ready(function() {
    console.log('jQuery готов к работе!');
    console.log('Версия jQuery:', $.fn.jquery);

    // =============================================================
    // ЗАДАЧА A: ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК (ТАБЫ)
    // =============================================================
    
    // ВАРИАНТ 1: jQuery
    console.log('--- Задача A: Вкладки (jQuery) ---');
    
    $('.tab-btn').click(function() {
        // Убираем класс active у всех кнопок и контента
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');
        
        // Добавляем active к нажатой кнопке
        $(this).addClass('active');
        
        // Получаем ID таба из data-атрибута
        var tabId = $(this).data('tab');
        console.log('Переключение на вкладку:', tabId);
        
        // Показываем нужный контент
        $('#' + tabId).addClass('active');
    });

    /* 
    ВАРИАНТ 2: Vanilla JS (для сравнения)
    
    document.querySelectorAll('.tab-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            // Убираем active у всех
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Добавляем active к нажатой кнопке
            this.classList.add('active');
            
            // Получаем ID таба
            var tabId = this.dataset.tab;
            console.log('Переключение на вкладку:', tabId);
            
            // Показываем контент
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    СРАВНЕНИЕ:
    - jQuery: $('.tab-btn') - короткий селектор
    - Vanilla: document.querySelectorAll('.tab-btn') - более длинный
    - jQuery: .click() - короткий метод
    - Vanilla: .addEventListener('click') - более явный
    - jQuery: .addClass() / .removeClass() - удобные методы
    - Vanilla: .classList.add() / .remove() - современный стандарт
    - jQuery: $(this).data('tab') - простое получение data-атрибута
    - Vanilla: this.dataset.tab - нативный способ
    */

    // =============================================================
    // ЗАДАЧА B: ПЛАВНАЯ ПРОКРУТКА К ЯКОРЮ
    // =============================================================
    
    // ВАРИАНТ 1: jQuery
    console.log('--- Задача B: Плавная прокрутка (jQuery) ---');
    
    $('a[href^="#"]').click(function(e) {
        e.preventDefault(); // Отменяем стандартное поведение
        
        var target = $(this).attr('href');
        console.log('Прокрутка к:', target);
        
        // Плавная анимация прокрутки
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // 800ms - длительность анимации
    });

    /* 
    ВАРИАНТ 2: Vanilla JS
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            
            console.log('Прокрутка к:', targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    СРАВНЕНИЕ:
    - jQuery: .animate() - мощный метод для любой анимации
    - Vanilla: scrollIntoView() - современный нативный метод
    - jQuery требовал кастомную анимацию для прокрутки
    - Современный JS имеет встроенный behavior: 'smooth'
    - Это пример того, как браузеры "впитали" функциональность jQuery
    */

    // =============================================================
    // ЗАДАЧА C: AJAX ЗАПРОСЫ
    // =============================================================
    
    // ВАРИАНТ 1: jQuery
    console.log('--- Задача C: AJAX запросы (jQuery) ---');
    
    $('#loadQuote').click(function() {
        var button = $(this);
        button.text('Загрузка...');
        
        console.log('Отправка AJAX запроса...');
        
        // GET запрос через jQuery
        $.get('https://api.quotable.io/random', function(data) {
            console.log('Получена цитата:', data);
            
            // Вставляем данные в блок
            $('#quote p').text('"' + data.content + '"');
            $('#quote cite').text('— ' + data.author);
            button.text('Загрузить цитату');
        }).fail(function(error) {
            console.error('Ошибка загрузки:', error);
            $('#quote p').text('Ошибка загрузки цитаты. Попробуйте еще раз.');
            button.text('Попробовать снова');
        });
    });

    /* 
    ВАРИАНТ 2: Vanilla JS с Fetch API
    
    document.getElementById('loadQuote').addEventListener('click', function() {
        var button = this;
        button.textContent = 'Загрузка...';
        
        console.log('Отправка Fetch запроса...');
        
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                console.log('Получена цитата:', data);
                
                document.querySelector('#quote p').textContent = '"' + data.content + '"';
                document.querySelector('#quote cite').textContent = '— ' + data.author;
                button.textContent = 'Загрузить цитату';
            })
            .catch(error => {
                console.error('Ошибка загрузки:', error);
                document.querySelector('#quote p').textContent = 'Ошибка загрузки цитаты';
                button.textContent = 'Попробовать снова';
            });
    });
    
    СРАВНЕНИЕ:
    - jQuery: $.get(url, callback) - простой однострочный метод
    - Vanilla: fetch(url).then().then() - цепочка промисов
    - jQuery использует callback-функции
    - Fetch использует промисы (можно использовать async/await)
    - Fetch - это современный стандарт, более мощный
    - fetch требует .json() для парсинга, jQuery делает это автоматически
    - Оба подхода хороши, fetch более универсальный
    */

    // =============================================================
    // ЗАДАЧА D: jQuery UI ПЛАГИНЫ
    // =============================================================
    
    console.log('--- Задача D: jQuery UI плагины ---');
    
    // Делаем элемент перетаскиваемым (Draggable)
    $('#draggable').draggable({
        containment: 'parent', // Ограничиваем перемещение родителем
        cursor: 'move',        // Меняем курсор
        opacity: 0.7,          // Прозрачность при перетаскивании
        start: function() {
            console.log('Начало перетаскивания');
        },
        stop: function() {
            console.log('Конец перетаскивания');
        }
    });

    // Календарь (Datepicker)
    $('#datepicker').datepicker({
        dateFormat: 'dd.mm.yy',  // Формат даты
        changeMonth: true,        // Выбор месяца
        changeYear: true,         // Выбор года
        yearRange: '1900:2030',   // Диапазон лет
        onSelect: function(dateText) {
            console.log('Выбрана дата:', dateText);
        }
    });

    /* 
    ВАРИАНТ Vanilla JS для Drag & Drop (ОЧЕНЬ МНОГО КОДА!)
    
    var draggable = document.getElementById('draggable');
    var isDragging = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    draggable.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === draggable) {
            isDragging = true;
            console.log('Начало перетаскивания');
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            xOffset = currentX;
            yOffset = currentY;
            
            setTranslate(currentX, currentY, draggable);
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        
        if (isDragging) {
            console.log('Конец перетаскивания');
        }
        
        isDragging = false;
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    }
    
    СРАВНЕНИЕ:
    - jQuery UI: $('#draggable').draggable(); - ОДНА строка кода!
    - Vanilla JS: ~40 строк кода для базового функционала
    - jQuery UI предоставляет множество опций из коробки
    - Vanilla JS требует ручной реализации всей логики
    - Для сложных UI компонентов библиотеки значительно экономят время
    - HTML5 Drag & Drop API существует, но он еще сложнее
    */

    // =============================================================
    // ВЫВОДЫ И АНАЛИЗ
    // =============================================================
    
    console.log('=== ВЫВОДЫ ===');
    console.log('1. jQuery упрощает работу с DOM (селекторы, события, классы)');
    console.log('2. Современный JS "впитал" многие идеи jQuery (querySelector, classList)');
    console.log('3. Для анимации jQuery удобнее, но CSS transitions тоже хороши');
    console.log('4. AJAX: $.get() проще, но fetch() - современный стандарт');
    console.log('5. jQuery UI сильно упрощает создание сложных UI компонентов');
    console.log('6. Выбор зависит от задачи: legacy проекты - jQuery, новые - Vanilla JS');
    
console.log('Все скрипты загружены и работают!');
});