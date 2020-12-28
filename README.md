# jquery-slider-plugin

## Демонстрационная страница:
  [DEMO PAGE](https://evgeny1993r.github.io/demo-page-jquery-slider-plugin/)

## Основные команды npm:
__Запуск проекта в режиме "development":__
```js
  npm start 
```
__Запуск проекта в режиме "build":__
```js
  npm run build
```
__Развертывание проекта в ветке gh-pages:__
```js
  npm run deploy
```
__Запуск тестирования проекта:__
```js
  npm test
```
__Клонирование репозитория__
```js
  git clone https://github.com/evgeny1993r/jquery-slider-plugin.git
```
  
## Инициализация:
```js
  const $slider = $('.slider').slider([parameters]);
```

## Параметры:
__position__ <br/>
Тип: ```string``` <br/>
Значение по умолчанию: ```horizontal``` <br/>
Допустимые значения: ```horizontal | vertical``` <br/>
<br/>

__minValue__ <br/>
Тип: ```number``` <br/>
Значение по умолчанию: ```0``` <br/>
<br/>

__maxValue__ <br/>
Тип: ```number``` <br/>
Значение по умолчанию: ```100``` <br/>
<br/>

__currentValue__ <br/>
Тип: ```[number] || [number, number]``` <br/>
Значение по умолчанию: ```[0]``` <br/>
<br/>

__step__ <br/>
Тип: ```number``` <br/>
Значение по умолчанию: ```1``` <br/>
<br/>

__isShowWindowValue__ <br/>
Тип: ```boolean``` <br/>
Значение по умолчанию: ```false``` <br/>
<br/>

__isShowScaleValues__ <br/>
Тип: ```boolean``` <br/>
Значение по умолчанию: ```false``` <br/>
<br/>

__$inputElement__ <br/>
Тип: ```JQuery``` <br/>
Значение по умолчанию: ```$()``` <br/>

## Публичные методы:
__setPosition__ <br/>
Тип: `function` <br/>
Пример:
```js
  $slider.slider('setPosition', 'vertical');
```
<br/>

__setMinValue__ <br/>
Тип: `function` <br/>
Пример:
```js
  $slider.slider('setMinValue', -100);
```
<br/>

__setMaxValue__ <br/>
Тип: `function` <br/>
Пример: 
```js
  $slider.slider('setMaxValue', 200);
```
<br/>

__setCurrentValue__ <br/>
Тип: `function` <br/>
Пример:
```js
  $slider.slider('setCurrentValue', [25, 50]);
```
<br/>

__setStep__ <br/>
Тип: ```function``` <br/>
Пример:
```js
  $slider.slider('setStep', 10);
```
<br/>

__setIsShowWindowValue__ <br/>
Тип: ```function``` <br/>
Пример: 
```js
  $slider.slider('setIsShowWindowValue', true);
```

__setIsShowScaleValues__ <br/>
Тип: ```function``` <br/>
Пример: 
```js
  $slider.slider('setIsShowScaleValues', true);
```

## Архитектура
В данном проекте использовалась архитектура Model View Presenter. 
Из index.js параметры передаются в класс Presenter, из Presenter параметры, такие как minValue, maxValue, currentValue, step и isShowWindowValue передаются в класс Model, а такие как $this, position, minValue, maxValue, currentValue, step и isShowWindowValue передаются в класс View. <br/>
В зависимости от переданных параметров, в классе View вызваются классы компоненты, такие как Slider, Scale, ProgressBar, Runner и ValueWindow и отображаются данные. <br/>
При взаимодействии пользователя с этими классами компонентами, срабатывают некоторые события, на которые подписан View. View, получив некоторые данные из события, проводит расчеты, и вызывает события на которые подписан Presenter. Presenter, получив данные из события, вызывает методы для изменения данных из Model, Model меняет данные, Presenter вызывает методы отображения из View, и View отображает новые данные.

## UML-диаграмма
[Диаграмма](https://github.com/evgeny1993r/jquery-slider-plugin/blob/main/src/images/Diagram.png)
