# _Afrianska_

## Настройка проекта:

1. Установить [nodejs](https://nodejs.org/en) елси не установлен (это делаетеся один раз);
2. Установить gupl глобально командой `npm install --global gulp-cli` если не установлен (это делаетеся один раз).
3. Установить необходимые пакеты командой `npm i`;

## Работа с проектом:

- `npm run svgSprive` - сборка спрайта из файлов формата _svg_ в папке _svgicons_;
- `npm run dev` - режим разработки;
- `npm run build` - режим прод;
- `npm run deployFTP` - выгрузка результата на сервер по FTP;
- `npm run zip` - Скомпилировать ZIP-файл с результатом прод;

## Примечание

При добавление картинок формата _svg_ в папку _svgicons_, необходимо в названии файлов убрать любые знаки, тире и подчеркивания. Иначе может выдать ошибку при компиляции.

## Правки

- [x] Не следует использовать инлайн-стили там, где это уместно делать средствами файлов CSS. https://i.imgur.com/agiAd6V.png
- [x] Главный баннер на разрешении более 1920px не соответствует макету: текст не выровнен по вертикали, изображение также не выровнено и обрезается. https://i.imgur.com/VLJlmO4.png
- [x] Здесь так же неуместно использование инлайн-стилей. https://i.imgur.com/diJsRg6.png
- [x] В Firefox hover по стрелочке рождает странный баг: сетка перестраивается, перекидывая последний элемент вниз. https://i.imgur.com/XsyJ9Mq.png
- [x] Масштабирование фоновой тени при открытии модального окна не является стандартным подходом: обычно, масштабируется само окно, а тень плавно появляется средствами opacity.
- [x] Проигнорировано требование ТЗ не использовать стандартную валидацию формы. https://i.imgur.com/YL1FEB4.png
- [x] В некоторых местах нарушается семантическая структура БЭМ: нет блоков, элементы содержат только модификаторы, что недопустимо. https://i.imgur.com/SkG5NcD.png
- [x] Для цветов следует использовать CSS3-переменные. https://i.imgur.com/0HC78Zi.png
- [x] Нарушен принцип "представление - функционал", согласно которому обращения к DOM-элементам должны осуществляться по ID/data-attr. https://i.imgur.com/TpljujL.png
- [x] После успешной отправки форму следует очищать посредством form.reset()
- [ ] Перед отправкой - блокировать кнопку submit.
- [x] Проигнорировано требование ТЗ использовать отдельные функции для обработчиков событий. https://i.imgur.com/QqsWLZD.png
- [x] Плавный скролл можно сделать в одну строчку кода через API ScrollIntoView. https://i.imgur.com/lA1Oicw.png"
- [x] В файле handleSubmit.js мешанина кода: и валидация, и отправка формы. Следует разделить данный функционал.
- [x] Подобные конструкции следует оформлять через switch. https://i.imgur.com/p347Df7.png"
- [x] Перед обращением к элементам нет проверок на их существование, если что-то убрать из HTML, всё сломается. https://i.imgur.com/SY9NfxR.png
- [x] Это костыльное решение. Проще повесить класс на весь документ. https://i.imgur.com/iwEluJ2.png