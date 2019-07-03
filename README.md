# Критерии приема

- Создан репозиторий `goit-js-hw-10-food-service`
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на GitHub pages
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений
- Имена переменных и функций понятные, описательные
- Проект собран с помощью `Webpack`
- Код отформатирован с помощью `Prettier`

# Задание

Создай страницу меню с возможностью выбора темы для сервиса заказа еды.
[Ссылка на демо видео](https://take.ms/2D8qB).

![Превью](preview.jpg)

- Обязательно используй `Webpack` для сборки и деплоя
- В папке [src](./src) ты найдешь стартовую разметку, стили и данные
- Массив объектов блюд лежит в [menu.json](./src/menu.json)

## Тема

Реализуй функционал изменения темы при нажатии на кнопку
`button[data-action="theme-switch"]` в тулбаре.

- По умолчанию тема светлая
- При изменении темы, необходимо добавлять на элемент `body` класс `theme-light`
  или `theme-dark`
- Выбранная тема должна сохраняться между перезагрузками страницы (используй
  localStorage)

Для иконок как обычно используем `Material Icons`, достаточно подменить текст в
теге `i`.

- Иконка светлой темы - `wb_sunny`
- Иконка темной темы - `brightness_3`

## Шаблонизация

Используя шаблонизатор [Handlebars](https://handlebarsjs.com/) создай шаблон
одного элемента меню. После чего, используя шаблон, создай разметку всего меню
по данным из [menu.json](./src/menu.json) и добавь в DOM.

Ниже указана разметка элемента меню которая должна получаться по шаблону (данные
будут разные для каждого объекта).

```html
<li class="menu__item">
  <div class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt=""
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картофель, запеченный в мундире</h2>
      <p class="card__price">
        <i class="material-icons">
          monetization_on
        </i>
        100 кредитов
      </p>

      <p class="card__descr">
        Ароматный, сытный, шипящий домашний картофель, фаршированный
        сметанно-беконной начинкой, — это очень простой и очень эффектный способ
        накормить большое количество человек, практически не потратив на готовку
        ни сил, ни времени. Обычную картошку при желании тут можно заменить на
        сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий
        красный перец.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon">
        shopping_cart
      </i>
      В корзину
    </button>
  </div>
</li>
```
