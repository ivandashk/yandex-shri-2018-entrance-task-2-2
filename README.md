На момент сдачи задания (16.08.2018) присутствуют следующие недоработки и пути их решения:

- Слайдеры

 **Комментарий:** В последний момент осознал, что слайдеры необходимо было делать совершенно по-другому: через input(type='range') и селекторы ::-webkit-slider-runnable-track, ::-moz-range-track, ::-ms-track для трэка и ::-webkit-slider-thumb, ::-moz-range-thumb, ::-ms-thumb для ползунка. Данному инпуту можно было бы задать шаг, начальное и конечное значение и тогда будет просто выводить значение в правый верхний угол (для температурного слайдера), а также устанавливать значение на слайдере на основе выбранного пресета (напр. "Вручную", "Холодно", "Тепло", "Жарко")
 
- Корректное отображение термостата в браузере Edge. Javascript для термостата

  **Комментарий:** Edge в данный момент не поддерживает CSS-свойство clip-path. Для более корректного отображения и задания поведения, предполагаю, лучше использовать js-библиотеки для работы с svg-объектами (например svg.js с плагинами)
  
- Скроллинг устройств в разделе "Главное", "Избранные устройства" и сценариев в разделе "Избранные сценарии"

  **Комментарий:** Для браузеров на webkit есть простое решение (закомментировано в соответствующих блоках), для обеспечения кроссбраузерности, одно из решений - спрятать полосы прокрутки за границу блока
  
- Работа кнопок для скроллинга (горизонтальных стрелок)

 **Комментарий:** 
 Для раздела "Избранные сценарии" в мобильной версии и "Избранные устройства", можно определить степень прокрутки при помощи
```
let scrollPercentage = e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth);
```
Если scrollPercentage = 0, дизейблить левую стрелку, если 1 - правую. Если обе стрелки задизейблены - скрыть. При нажатии на стрелку, изменять scrollLeft.

Для раздела "Избранные сценарии" в десктопной версии необходимо отслеживать интервал индексов видимых в данный момент сценариев (если с сервера пришел полный список сценариев). Если начальный индекс видимого элемента равен 0 или конечный индекс равен длине списка сценариев, дизейблить левую или правую стрелочку соответственно. При нажатии по стрелочке, смещать интервал индексов на величину, равную количеству видимых на экране элементов.

- Корректное отображение тени кнопок блока "Избранные сценарии"

 **Комментарий:** Наблюдается на нижнем ряду элементов в десктопной версии и на всех элементах в мобильной версии. Исправляется фиксированием высоты кнопок для сценариев и увеличением высоты контейнера.

- Анимация открытия модального окна

 **Комментарий:** После множественных попыток, не удалось достичь именно желаемого эффекта перехода от кнопки к модальному окну. Способ решения: спросить совета у более опытных разработчиков :)
 
# Задание 2 — сверстать макет

В этом репозитории находятся материалы тестового задания по вёрстке для [14-й Школы разработки интерфейсов](https://academy.yandex.ru/events/frontend/shri_msk-2018-2) (осень 2018, Москва, Санкт-Петербург, Симферополь).
