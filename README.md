# Art Museum Project

Главная страница представляет собой информационную часть приложения, в которой можно выполнить поиск и отсортировать получаемые данные. Так же на главной странице необходимо реализовать пагинацию по пяти картинам. При клике на выбранную картину должен осуществляться переход на страницу с детальной информацией, чтобы изучить произведение подробнее. Понравившиеся произведения можно поместить в избранное, чтобы иметь быстрый доступ к их изучению и просмотру.

## API:

[Art API](https://api.artic.edu/docs/#introduction)

## Функционал

- Получение данных о картинах с внешнего API;
- Отображение списка картин с возможностью пагинации;
- Реализация формы поиска с валидацией введенных данных;
- Использование роутинга для разделения страниц приложения;
- Реализация дебаунса для поисковой формы;
- Возможность добавления картины в список избранных с сохранением их в SessionStorage;
- Возможность просмотра более детальной информации о картине;
- Интерфейс для просмотра списка избранных и возможности удаления из списка;
- Реализация возможности сортировки картин по различным критериям (по дате или алфавиту).
- При загрузке товаров реализован Loader;
- Оптимизация дизайна под мобильные устройства (до 420px);
- Реализация burger-menu с реализовацией кастомного хука при закрытии;
- Использование React context;
- Использование алиасов для импортирования файлов;
- Настройка конфигурации eslint, prettier, husky;

## Используемые технологии

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_eslint_** - линтер для JavaScript кода;
- **_prettier_** - инструмент для автоформатирования кода;
- **_yarn_** - менеджер пакетов;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_typescript_** - строго типизированный язык для уменьшения количества потенциальных багов;
- **_vite_** - инструмент сборки;
- **_SCSS_** - препроцессор, который служит для быстрого написания CSS стилей;
- **_jest_** - библиотека для unit-тестирования;
- **_react-router-dom_** - библиотека для навигации между разными частями веб-приложения;
- **_zod_** - библиотека для валидации форм;
- **_formik_** - библиотека для обработки элемента ввода формы.
