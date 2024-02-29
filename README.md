# Macaroons (лендинг по продаже пирожных макарун)
![image](https://github.com/marrina-dm/macaroons/assets/149144461/43fafce2-5a54-45d0-bc02-7488d3aa8262)
Сайт можно посмотреть по ссылке https://marrina-dm.github.io/macaroons/

## Макет и ТЗ
Сайт был создан по Photoshop-макетам для различных расширений экрана: https://github.com/marrina-dm/macaroons/tree/main/macets
В работе нужно реализовать эффекты:
- Нижнее подчеркивание в меню - ховер эффект.
- Тень при наведении на кнопки
- Растущие круги в первом блоке позади картинки.
- Смена цветов фона и текста в блоке с преимуществами
- У товаров при наведении на блок увеличивается картинка, при наведении на кнопку - появляется тень.
- В блоке «Оформить заказ» картинки с ягодами плавают вверх-вниз
- В правом нижнем углу фиксированная круглая кнопка с иконкой подарка. При наведении на нее всплывает плашка с текстом «Оформите заказ и получите подарок».

Блоки с преимуществами и с товарами реализованы при помощи грид-контейнеров.

В последнем блоке этой страницы в форме заказа выполнена валидация полей, которая соответствует следующему описанию:
1. При нажатии на кнопку "Оформить заказ", проверяются все поля сразу. Все поля - обязательные. В случае, если какое-то поле не заполнено, под ним показывается красный текст "Необходимо ввести ... (тут название того, что надо ввести пользователю)". Рамка для инпута становится красного цвета. В случае, если не заполнены сразу все 3 поля, значит ошибки должны быть показаны сразу для всех 3 полей. При повторной проверке заполнения, стили не валидной формы должны сбрасываться, и показываться только актуальные ошибки.
2. Если все элементы формы валидны - отправляутся POST запрос на адрес https://testologia.site/checkout с данными из полей: Товар (product), Имя (name), Телефон (phone). Если отправляется name itlogia - в ответ приходит объект со свойством success равном 1, если другие данные - success со значением 0. Использованы AJAX от jQuery.
3. Во время отправки формы показывается пользователю лоадер.
4. Если ответ от сервера успешный (т.е. success равен 1, со значением name itlogia), скрываутся форма и на ее месте отображается блок такого же размера с текстом "Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!". В случае, если приходит ответ success со значением 0, выводит пользователю alert с текстом "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ".

## Используемые технологии
- HTML
- CSS
- JavaScript
- Flexbox Layout
- Grid Layout
- jQuery
- gulp
- Grunt
- LESS
