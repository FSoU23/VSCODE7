## скрины ##
<img width="2493" height="1403" alt="image" src="https://github.com/user-attachments/assets/9d270772-18dd-414e-aca1-529aa4074a61" />
<img width="2517" height="1394" alt="image" src="https://github.com/user-attachments/assets/b8b17a0d-d853-474c-9826-8f1ee3b5b168" />
<img width="2515" height="1404" alt="image" src="https://github.com/user-attachments/assets/84086c1b-5dda-4376-b7b2-ffc00bbfce69" />

## Ответы на вопросы: ##

## Какие jQuery-функции использовались? ##
В работе использовались основные функции jQuery для работы с DOM и событиями:
- `$(document).ready()` — ожидание полной загрузки DOM.
- `$('.tab-btn').click()` — обработка кликов по вкладкам.
- `addClass()` и `removeClass()` — смена активных элементов.
- `$('a[href^="#"]').click()` — перехват переходов по якорям.
- `$('html, body').animate()` — плавная анимация прокрутки.
- `$.get()` — выполнение AJAX-запроса.
- Методы jQuery UI: `draggable()` и `datepicker()` для сложных UI-элементов.

Эти функции позволили реализовать вкладки, прокрутку, загрузку цитат и элементы интерфейса с минимальным количеством кода.

## Что показалось быстрее/проще — jQuery или чистый JS? ##
jQuery оказался быстрее и легче в написании:
- короче селекторы: `$('.item')` против `document.querySelector('.item')`;
- события пишутся проще: `.click()` против `addEventListener`;
- AJAX-запросы выполняются одной строкой (`$.get`), а в JS требуется цепочка `fetch().then()`;
- анимации прокрутки в jQuery встроенные, а в JS их нужно настраивать вручную.

Тем не менее, современный JavaScript стал гораздо ближе к jQuery-подходу и решает большинство задач нативно, особенно с `querySelector`, `classList`, `fetch`, `scrollIntoView`.

## Что из этого вы бы оставили, если писали современный сайт? ##
Если делать современный сайт, я бы оставил:
- **Vanilla JS** для вкладок, событий, скролла и AJAX — всё это сегодня делается нативно.
- **fetch + async/await** вместо `$.get()`.
- **scrollIntoView({ behavior: "smooth" })** вместо `.animate()`.
- **classList** вместо `.addClass()` и `.removeClass()`.

Но я бы сохранил использование:
- **jQuery UI**, если нужны быстрые компоненты вроде `draggable()` или `datepicker()` — их аналоги в чистом JS писать намного дольше.

Итог: jQuery остаётся удобным, но в современных проектах чаще выбирают чистый JavaScript + готовые UI-библиотеки.
