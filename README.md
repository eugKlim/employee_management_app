# Приложение для работы с данными полученными от сервера 

**На чем написано:**
- React
- TypeScript
- Redux toolkit
- Запросы на сервер: axios
- Scss
- Компилятор Vite

<br>

# Что реализовано в приложении?
- Получение данных из сервера `JSONplaceholder api`
- Адаптация под малые устройства.
- Роутинг:
    - При клике вся информация, покажет всю информацию о пользователе.
    - Если перейти на несуществующий адрес, например: `http://localhost:5173/employee_management_app/homedwqwd` то выведет на `страницу 404`.
- Статус панель, для добавления статуса сотруднику, c записью в `localstorage`, и отображение, если добавлено будет писать `удалить`, если не добавлено то будет писать `добавить`. При клике вне панели задач, она закроется. Или при клике на крестик.
- Отображения статусов на карточке, и на странице подробной информации о сотруднике. Если статусов нет то будет писать `пусто`.
- Сортировка сотрудников по статусу.
- Поиск по имени сотрудника, и если выбрана кнопка сортировки, и начать вводить в поле поиска, то сортировка переключится в `all`. Если ничего не найдено, то вместо карточек с сотрудниками, будет писать `ничего не найдено`. Так же в поиск включена оплошность при помощи библиотеки `fuse.js`. Например есть имя `Leanne` если ввести имя с ошибкой, например `lanne` то все равно наш Leanne и/или другие, найдутся.
- Виджет с информацией о статусах сотрудника, и отображение(фильтрация) подвиджетов по возрастанию, меньший вверху, больший ниже.
- При загрузке данных, будет `прелоадер`.
- Анимация при скроле, при помощи библиотеки `framer-motion`, и анимация появления редактора статусов.

<br>


<br>


<br>


> **ОГРАНИЧЕНИЕ GITHUB-PAGES:** <br> В html, написан специальный код, чтобы роутинг на `github-pages` работал, потому что он не видит пути роутсов, и тогда github начинает искать `страницу 404`, в этой странице мы перенаправляем его на главную страницу. `И так же страницу запрещенно перезагружать!!!!`, иначе github-pages опять вернется на страницу, которую он не может найти. И при введении не существующего пути, роутинг не перекинет на страницу 404.  И в консоли ошибка: `Failed to load resource: the server responded with a status of 404 ()` из за редиректа, который мы делаем чтобы роутинг работал, не смотря на ограничение github-pages. <br> <br> `Чтобы все работало четко, без ограничений github-pages, установите проект локально.`  <br> <br> <br>[🔗 Ссылка на сайт](https://eugklim.github.io/employee_management_app/?/home)

<br>


<br>

<br>

## Как установить проект себе?
1. Клонировать репозиторий:

```ruby
git clone https://github.com/eugKlim/employee_management_app.git
```

2. Установить зависимости:

```ruby
npm install
```

3. Запустить проект:

```ruby
npm run dev
```
