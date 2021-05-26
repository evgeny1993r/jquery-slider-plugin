!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";t.__esModule=!0,t.Observer=void 0;var n=function(){function e(){this.observers=[]}return e.prototype.subscribe=function(e){this.observers.push(e)},e.prototype.broadcast=function(e){0!==this.observers.length&&this.observers.forEach((function(t){return t(e)}))},e}();t.Observer=n},function(e,t,i){"use strict";t.__esModule=!0;var n=i(2);!function(e){e.fn.slider=function(t,i){var a=this;switch(this.presenter,this.init=function(t,i){var a=e.extend({$this:t,orientation:"horizontal",minValue:0,maxValue:100,currentValue:[0],step:1,isShowValueWindow:!1,isShowScaleValues:!1},i);return new n.Presenter(a)},this.isValidSetCurrentValue=function(e){return Array.isArray(e)&&"number"==typeof e[0]||Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1]},this.isValidSetOrientation=function(e){return"horizontal"===e||"vertical"===e},this.setCurrentValue=function(e){1===e.length?a.presenter.setCurrentValue(e[0]):2===e.length&&(e[0]<e[1]?(a.presenter.setCurrentValueMin(e[0]),a.presenter.setCurrentValueMax(e[1])):e[0]>e[1]&&(a.presenter.setCurrentValueMin(e[1]),a.presenter.setCurrentValueMax(e[0])))},this.setOrientation=function(e){a.presenter.setOrientation(e)},this.setMinValue=function(e){a.presenter.setMinValue(e)},this.setMaxValue=function(e){a.presenter.setMaxValue(e)},this.setStep=function(e){a.presenter.setStep(e)},this.setIsShowValueWindow=function(e){a.presenter.setIsShowValueWindow(e)},this.setIsShowScaleValues=function(e){a.presenter.setIsShowScaleValues(e)},t){case"setCurrentValue":this.isValidSetCurrentValue(i)&&this.setCurrentValue(i);break;case"setOrientation":this.isValidSetOrientation(i)&&this.setOrientation(i);break;case"setMinValue":"number"==typeof i&&this.setMinValue(i);break;case"setMaxValue":"number"==typeof i&&this.setMaxValue(i);break;case"setStep":"number"==typeof i&&this.setStep(i);break;case"setIsShowValueWindow":"boolean"==typeof i&&this.setIsShowValueWindow(i);break;case"setIsShowScaleValues":"boolean"==typeof i&&this.setIsShowScaleValues(i);break;default:t?"object"==typeof t&&(this.presenter=this.init(this,t)):this.presenter=this.init(this)}return this}}(jQuery)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Presenter=void 0;var s=i(0),r=i(3),u=i(4),o=function(e){function t(t){var i=t.$this,n=t.orientation,a=t.minValue,s=t.maxValue,o=t.currentValue,l=t.step,h=t.isShowValueWindow,c=t.isShowScaleValues,d=e.call(this)||this;return d.model=new r.Model({orientation:n,minValue:a,maxValue:s,currentValue:o,step:l,isShowValueWindow:h,isShowScaleValues:c}),d.view=new u.View({$this:i,orientation:n,minValue:a,maxValue:s,currentValue:o,step:l,isShowValueWindow:h,isShowScaleValues:c}),d.$this=i,d.init(),d}return a(t,e),t.prototype.init=function(){var e=this;this.model.subscribe((function(t){switch(t.type){case"updateCurrentValue":e.updateCurrentValue(t.value);break;case"updateCurrentValueMin":e.updateCurrentValueMin(t.value);break;case"updateCurrentValueMax":e.updateCurrentValueMax(t.value);break;case"updateOrientation":e.updateOrientation(t.value);break;case"updateMinValue":e.updateMinValue(t.value);break;case"updateMaxValue":e.updateMaxValue(t.value);break;case"updateStep":e.updateStep(t.value);break;case"updateIsShowValueWindow":e.updateIsShowValueWindow(t.value);break;case"updateIsShowScaleValues":e.updateIsShowScaleValues(t.value)}})),this.view.subscribe((function(t){switch(t.type){case"setCurrentValue":e.setCurrentValue(t.value);break;case"setCurrentValueMin":e.setCurrentValueMin(t.value);break;case"setCurrentValueMax":e.setCurrentValueMax(t.value)}}))},t.prototype.setCurrentValue=function(e){this.model.setCurrentValue(e),this.$this.trigger("updateCurrentValue",{currentValue:this.model.getCurrentValue()})},t.prototype.updateCurrentValue=function(e){this.view.updateCurrentValue(e)},t.prototype.setCurrentValueMin=function(e){this.model.setCurrentValueMin(e),this.$this.trigger("updateCurrentValue",{currentValue:this.model.getCurrentValue()})},t.prototype.updateCurrentValueMin=function(e){this.view.updateCurrentValueMin(e)},t.prototype.setCurrentValueMax=function(e){this.model.setCurrentValueMax(e),this.$this.trigger("updateCurrentValue",{currentValue:this.model.getCurrentValue()})},t.prototype.updateCurrentValueMax=function(e){this.view.updateCurrentValueMax(e)},t.prototype.setOrientation=function(e){this.model.setOrientation(e)},t.prototype.updateOrientation=function(e){this.view.updateOrientation(e)},t.prototype.setMinValue=function(e){this.model.setMinValue(e),this.$this.trigger("updateMinValue",{minValue:this.model.getMinValue()})},t.prototype.updateMinValue=function(e){this.view.updateMinValue(e)},t.prototype.setMaxValue=function(e){this.model.setMaxValue(e),this.$this.trigger("updateMaxValue",{maxValue:this.model.getMaxValue()})},t.prototype.updateMaxValue=function(e){this.view.updateMaxValue(e)},t.prototype.setStep=function(e){this.model.setStep(e),this.$this.trigger("updateStep",{step:this.model.getStep()})},t.prototype.updateStep=function(e){this.view.updateStep(e)},t.prototype.setIsShowValueWindow=function(e){this.model.setIsShowValueWindow(e)},t.prototype.updateIsShowValueWindow=function(e){this.view.updateIsShowValueWindow(e)},t.prototype.setIsShowScaleValues=function(e){this.model.setIsShowScaleValues(e)},t.prototype.updateIsShowScaleValues=function(e){this.view.updateIsShowScaleValues(e)},t.prototype.getState=function(){return{model:this.model,view:this.view}},t}(s.Observer);t.Presenter=o},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Model=void 0;var s=function(e){function t(t){var i=t.orientation,n=t.minValue,a=t.maxValue,s=t.currentValue,r=t.step,u=t.isShowValueWindow,o=t.isShowScaleValues,l=e.call(this)||this;return l.orientation=i,l.minValue=n,l.maxValue=a,l.currentValue=s,l.step=r,l.isShowValueWindow=u,l.isShowScaleValues=o,l}return a(t,e),t.prototype.setCurrentValue=function(e){e>=this.minValue&&e<=this.maxValue&&(e===this.minValue||e===this.maxValue?this.currentValue[0]=e:this.currentValue[0]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValue",value:this.currentValue[0]}),2===this.currentValue.length&&this.currentValue.splice(1,1))},t.prototype.setCurrentValueMin=function(e){1===this.currentValue.length&&(e>=this.minValue&&e<=this.maxValue&&(e===this.minValue?this.currentValue[0]=e:this.currentValue[0]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValueMin",value:this.currentValue[0]})));2===this.currentValue.length&&(e>=this.minValue&&e<=this.currentValue[1]&&(e===this.minValue?this.currentValue[0]=e:this.currentValue[0]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValueMin",value:this.currentValue[0]})))},t.prototype.setCurrentValueMax=function(e){e>this.currentValue[0]&&e<=this.maxValue&&(e===this.maxValue?this.currentValue[1]=e:this.currentValue[1]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValueMax",value:this.currentValue[1]}))},t.prototype.getCurrentValue=function(){return this.currentValue},t.prototype.setOrientation=function(e){this.orientation=e,this.broadcast({type:"updateOrientation",value:this.orientation})},t.prototype.setMinValue=function(e){e<this.currentValue[0]&&(this.minValue=e,this.broadcast({type:"updateMinValue",value:this.minValue}))},t.prototype.getMinValue=function(){return this.minValue},t.prototype.setMaxValue=function(e){1===this.currentValue.length&&e>this.currentValue[0]&&(this.maxValue=e,this.broadcast({type:"updateMaxValue",value:this.maxValue})),2===this.currentValue.length&&e>this.currentValue[1]&&(this.maxValue=e,this.broadcast({type:"updateMaxValue",value:this.maxValue}))},t.prototype.getMaxValue=function(){return this.maxValue},t.prototype.setStep=function(e){e<(this.maxValue-this.minValue)/10&&(this.step=e,this.broadcast({type:"updateStep",value:this.step}))},t.prototype.getStep=function(){return this.step},t.prototype.setIsShowValueWindow=function(e){this.isShowValueWindow=e,this.broadcast({type:"updateIsShowValueWindow",value:this.isShowValueWindow})},t.prototype.setIsShowScaleValues=function(e){this.isShowScaleValues=e,this.broadcast({type:"updateIsShowScaleValues",value:this.isShowScaleValues})},t.prototype.getState=function(){return{orientation:this.orientation,minValue:this.minValue,maxValue:this.maxValue,currentValue:this.currentValue,step:this.step,isShowValueWindow:this.isShowValueWindow,isShowScaleValues:this.isShowScaleValues}},t}(i(0).Observer);t.Model=s},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.View=void 0;var s=i(0),r=i(5),u=i(7),o=i(9),l=i(11),h=i(13),c=i(15),d=function(e){function t(t){var i=t.$this,n=t.orientation,a=t.minValue,s=t.maxValue,d=t.currentValue,p=t.step,V=t.isShowValueWindow,w=t.isShowScaleValues,v=e.call(this)||this;return v.$this=i,v.orientation=n,v.minValue=a,v.maxValue=s,v.currentValue=d,v.viewMinValue=v.minValue-v.minValue,v.viewMaxValue=v.maxValue-v.minValue,v.isCurrentValue()&&(v.viewCurrentValue=[v.currentValue[0]-v.minValue]),v.isCurrentValues()&&(v.viewCurrentValue=[v.currentValue[0]-v.minValue,v.currentValue[1]-v.minValue]),v.step=p,v.isShowValueWindow=V,v.isShowScaleValues=w,v.slider=new r.Slider(v.orientation),v.scale=new u.Scale(v.orientation),v.progressBar=new o.ProgressBar(v.orientation),v.isCurrentValue()&&(v.runner=new l.Runner(v.orientation)),v.isCurrentValue()&&v.isShowValueWindow&&(v.valueWindow=new h.ValueWindow(v.orientation)),v.isCurrentValues()&&(v.runnerMin=new l.Runner(v.orientation),v.runnerMax=new l.Runner(v.orientation)),v.isCurrentValues()&&v.isShowValueWindow&&(v.valueWindowMin=new h.ValueWindow(v.orientation),v.valueWindowMax=new h.ValueWindow(v.orientation)),v.isShowScaleValues&&(v.scaleValues=new c.ScaleValues(v.orientation,v.minValue,v.maxValue,v.step)),v.$slider=v.slider.getSlider(),v.$scale=v.scale.getScale(),v.$progressBar=v.progressBar.getProgressBar(),v.isCurrentValue()&&(v.$runner=v.runner.getRunner()),v.isCurrentValue()&&v.isShowValueWindow&&(v.$valueWindow=v.valueWindow.getValueWindow()),v.isCurrentValues()&&(v.$runnerMin=v.runnerMin.getRunner(),v.$runnerMax=v.runnerMax.getRunner()),v.isCurrentValues()&&v.isShowValueWindow&&(v.$valueWindowMin=v.valueWindowMin.getValueWindow(),v.$valueWindowMax=v.valueWindowMax.getValueWindow()),v.isShowScaleValues&&(v.$scaleValues=v.scaleValues.getScaleValues()),v.init(),v}return a(t,e),t.prototype.init=function(){var e=this;this.$this.append(this.$slider.append(this.$scale).append(this.$progressBar)),this.isCurrentValue()&&this.$slider.append(this.$runner),this.isCurrentValue()&&this.isShowValueWindow&&this.$slider.append(this.$valueWindow),this.isCurrentValues()&&this.$slider.append(this.$runnerMin).append(this.$runnerMax),this.isCurrentValues()&&this.isShowValueWindow&&this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax),this.isShowScaleValues&&(this.$slider.append(this.$scaleValues),"horizontal"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()),"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())),this.dataCollection(),this.isCurrentValue()&&this.renderCurrentValue(),this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax()),this.runner&&this.runner.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunner(n)})),this.$runnerMin&&this.runnerMin.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMin(n)})),this.$runnerMax&&this.runnerMax.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMax(n)})),this.scale.subscribe((function(t){var i=t.type,n=t.value;"clickScale"===i&&e.handleScalesClick(n)})),this.progressBar.subscribe((function(t){var i=t.type,n=t.value;"clickScale"===i&&e.handleScalesClick(n)})),this.$scaleValues&&this.scaleValues.subscribe((function(t){var i=t.type,n=t.value;"clickScaleValues"===i&&e.handleScaleValuesClick(n)})),$(window).on("resize",(function(){return e.handleWindowResize()}))},t.prototype.updateCurrentValue=function(e){this.isCurrentValue()&&(this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValue()),this.isCurrentValues()&&(this.convertSingleValue(),this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValue())},t.prototype.updateCurrentValueMin=function(e){this.isCurrentValue()&&(this.convertIntervalValue(),this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValueMin()),this.isCurrentValues()&&(this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValueMin())},t.prototype.updateCurrentValueMax=function(e){this.isCurrentValue()&&(this.convertIntervalValue(),this.currentValue[1]=e,this.viewCurrentValue[1]=e-this.minValue,this.renderCurrentValueMax()),this.isCurrentValues()&&(this.currentValue[1]=e,this.viewCurrentValue[1]=e-this.minValue,this.renderCurrentValueMax())},t.prototype.updateOrientation=function(e){this.$this.children(".slider").removeClass("slider_"+this.orientation).addClass("slider_"+e),this.orientation=e,this.scale.updateOrientation(this.orientation),this.progressBar.updateOrientation(this.orientation),this.isCurrentValue()&&this.runner.updateOrientation(this.orientation),this.isCurrentValue()&&this.isShowValueWindow&&this.valueWindow.updateOrientation(this.orientation),this.isCurrentValues()&&(this.runnerMin.updateOrientation(this.orientation),this.runnerMax.updateOrientation(this.orientation)),this.isCurrentValues()&&this.isShowValueWindow&&(this.valueWindowMin.updateOrientation(this.orientation),this.valueWindowMax.updateOrientation(this.orientation)),this.isShowScaleValues&&this.scaleValues.updateOrientation(this.orientation),this.dataCollection(),this.isShowScaleValues&&"horizontal"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()),this.isShowScaleValues&&"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight()),this.isCurrentValue()&&this.renderCurrentValue(),this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},t.prototype.updateMinValue=function(e){this.minValue=e,this.viewMinValue=this.minValue-this.minValue,this.viewMaxValue=this.maxValue-this.minValue,this.isCurrentValue()&&(this.viewCurrentValue[0]=this.currentValue[0]-this.minValue),this.isCurrentValues()&&(this.viewCurrentValue[0]=this.currentValue[0]-this.minValue,this.viewCurrentValue[1]=this.currentValue[1]-this.minValue),this.dataCollection(),this.scaleValues&&this.scaleValues.updateMinMaxValues(this.minValue,this.maxValue),this.isCurrentValue()&&this.renderCurrentValue(),this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},t.prototype.updateMaxValue=function(e){this.maxValue=e,this.viewMaxValue=this.maxValue-this.minValue,this.dataCollection(),this.scaleValues&&this.scaleValues.updateMinMaxValues(this.minValue,this.maxValue),this.isCurrentValue()&&this.renderCurrentValue(),this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},t.prototype.updateStep=function(e){this.step=e,this.scaleValues&&this.scaleValues.updateStep(this.step)},t.prototype.updateIsShowValueWindow=function(e){this.isShowValueWindow=e,this.isShowValueWindow&&this.isCurrentValue()&&(this.valueWindow=new h.ValueWindow(this.orientation),this.$valueWindow=this.valueWindow.getValueWindow(),this.$slider.append(this.$valueWindow),this.renderCurrentValue()),this.isShowValueWindow&&this.isCurrentValues()&&(this.valueWindowMin=new h.ValueWindow(this.orientation),this.valueWindowMax=new h.ValueWindow(this.orientation),this.$valueWindowMin=this.valueWindowMin.getValueWindow(),this.$valueWindowMax=this.valueWindowMax.getValueWindow(),this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax),this.renderCurrentValueMin(),this.renderCurrentValueMax()),!this.isShowValueWindow&&this.isCurrentValue()&&(delete this.valueWindow,delete this.$valueWindow,this.$slider.find(".value-window").remove()),!this.isShowValueWindow&&this.isCurrentValues()&&(delete this.valueWindowMin,delete this.valueWindowMax,delete this.$valueWindowMin,delete this.$valueWindowMax,this.$slider.find(".value-window").remove())},t.prototype.updateIsShowScaleValues=function(e){var t=this;this.isShowScaleValues=e,this.isShowScaleValues&&(this.scaleValues=new c.ScaleValues(this.orientation,this.minValue,this.maxValue,this.step),this.$scaleValues=this.scaleValues.getScaleValues(),this.$slider.append(this.$scaleValues),this.scaleValues.subscribe((function(e){var i=e.type,n=e.value;"clickScaleValues"===i&&t.handleScalesClick(n)}))),this.isShowScaleValues&&"horizontal"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()),this.isShowScaleValues&&"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight()),this.isShowScaleValues||(delete this.scaleValues,delete this.$scaleValues,this.$slider.find(".scale-values").remove())},t.prototype.convertIntervalValue=function(){var e=this;delete this.runner,this.isShowValueWindow&&delete this.valueWindow,delete this.$runner,this.isShowValueWindow&&delete this.$valueWindow,this.$this.find(".runner").remove(),this.isShowValueWindow&&this.$this.find(".value-window").remove(),this.runnerMin=new l.Runner(this.orientation),this.runnerMax=new l.Runner(this.orientation),this.isShowValueWindow&&(this.valueWindowMin=new h.ValueWindow(this.orientation),this.valueWindowMax=new h.ValueWindow(this.orientation)),this.$runnerMin=this.runnerMin.getRunner(),this.$runnerMax=this.runnerMax.getRunner(),this.isShowValueWindow&&(this.$valueWindowMin=this.valueWindowMin.getValueWindow(),this.$valueWindowMax=this.valueWindowMax.getValueWindow()),this.$slider.append(this.$runnerMin).append(this.$runnerMax),this.isShowValueWindow&&this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax),this.runnerMin.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMin(n)})),this.runnerMax.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMax(n)}))},t.prototype.convertSingleValue=function(){var e=this;this.currentValue.splice(1,1),this.viewCurrentValue.splice(1,1),delete this.runnerMin,delete this.runnerMax,this.isShowValueWindow&&(delete this.valueWindowMin,delete this.valueWindowMax),delete this.$runnerMin,delete this.$runnerMax,this.isShowValueWindow&&(delete this.$valueWindowMin,delete this.$valueWindowMax),this.$this.find(".runner").remove(),this.isShowValueWindow&&this.$this.find(".value-window").remove(),this.runner=new l.Runner(this.orientation),this.isShowValueWindow&&(this.valueWindow=new h.ValueWindow(this.orientation)),this.$runner=this.runner.getRunner(),this.isShowValueWindow&&(this.$valueWindow=this.valueWindow.getValueWindow()),this.$slider.append(this.$runner),this.isShowValueWindow&&this.$slider.append(this.$valueWindow),this.runner.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunner(n)}))},t.prototype.isCurrentValue=function(){return 1===this.currentValue.length},t.prototype.isCurrentValues=function(){return 2===this.currentValue.length},t.prototype.dataCollection=function(){"horizontal"===this.orientation&&(this.scaleSize=this.$scale.outerWidth(),this.scaleOffset=this.$scale.offset().left),"vertical"===this.orientation&&(this.scaleSize=this.$scale.outerHeight(),this.scaleOffset=this.$scale.offset().top),this.unit=this.scaleSize/this.viewMaxValue},t.prototype.renderCurrentValue=function(){this.runner.updatePositionRunner(this.viewCurrentValue[0]*this.unit),this.progressBar.renderProgressBar(this.viewCurrentValue[0]*this.unit,0),this.isShowValueWindow&&this.valueWindow.renderValueWindow(this.currentValue[0],this.viewCurrentValue[0]*this.unit)},t.prototype.renderCurrentValueMin=function(){this.runnerMin.updatePositionRunner(this.viewCurrentValue[0]*this.unit),this.progressBar.renderProgressBar((this.viewCurrentValue[1]-this.viewCurrentValue[0])*this.unit,this.viewCurrentValue[0]*this.unit),this.isShowValueWindow&&this.valueWindowMin.renderValueWindow(this.currentValue[0],this.viewCurrentValue[0]*this.unit)},t.prototype.renderCurrentValueMax=function(){this.runnerMax.updatePositionRunner(this.viewCurrentValue[1]*this.unit),this.progressBar.renderProgressBar((this.viewCurrentValue[1]-this.viewCurrentValue[0])*this.unit,this.viewCurrentValue[0]*this.unit),this.isShowValueWindow&&this.valueWindowMax.renderValueWindow(this.currentValue[1],this.viewCurrentValue[1]*this.unit)},t.prototype.handleSliderUpdatePositionRunner=function(e){this.broadcast({type:"setCurrentValue",value:(e-this.scaleOffset)/this.unit+this.minValue})},t.prototype.handleSliderUpdatePositionRunnerMin=function(e){this.broadcast({type:"setCurrentValueMin",value:(e-this.scaleOffset)/this.unit+this.minValue})},t.prototype.handleSliderUpdatePositionRunnerMax=function(e){this.broadcast({type:"setCurrentValueMax",value:(e-this.scaleOffset)/this.unit+this.minValue})},t.prototype.handleScalesClick=function(e){if(this.isCurrentValue()&&this.broadcast({type:"setCurrentValue",value:(e-this.scaleOffset)/this.unit+this.minValue}),this.isCurrentValues()){var t=this.currentValue[1]-Math.floor((e-this.scaleOffset)/this.unit+this.minValue),i=Math.floor((e-this.scaleOffset)/this.unit)-this.currentValue[0]+this.minValue;t>i&&this.broadcast({type:"setCurrentValueMin",value:(e-this.scaleOffset)/this.unit+this.minValue}),i>t&&this.broadcast({type:"setCurrentValueMax",value:(e-this.scaleOffset)/this.unit+this.minValue})}},t.prototype.handleScaleValuesClick=function(e){if(this.isCurrentValue()&&this.broadcast({type:"setCurrentValue",value:e}),this.isCurrentValues()){var t=this.currentValue[1]-e+this.minValue,i=e-this.currentValue[0]+this.minValue;t>i&&this.broadcast({type:"setCurrentValueMin",value:e}),i>=t&&this.broadcast({type:"setCurrentValueMax",value:e})}},t.prototype.handleWindowResize=function(){this.progressBar.renderProgressBar(0,0),this.dataCollection(),this.isCurrentValue()&&this.renderCurrentValue(),this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax()),this.isShowScaleValues&&"horizontal"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()),this.isShowScaleValues&&"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())},t.prototype.getState=function(){return{this:this,orientation:this.orientation,minValue:this.minValue,maxValue:this.maxValue,currentValue:this.currentValue,viewMinValue:this.viewMinValue,viewMaxValue:this.viewMaxValue,viewCurrentValue:this.viewCurrentValue,step:this.step,isShowValueWindow:this.isShowValueWindow,isShowScaleValues:this.isShowScaleValues,scale:this.scale,runner:this.runner,runnerMin:this.runnerMin,runnerMax:this.runnerMax,$this:this.$this,$runner:this.$runner,$runnerMin:this.$runnerMin,$runnerMax:this.$runnerMax,$valueWindow:this.$valueWindow,$valueWindowMin:this.$valueWindowMin,$valueWindowMax:this.$valueWindowMax,$scaleValues:this.$scaleValues}},t}(s.Observer);t.View=d},function(e,t,i){"use strict";t.__esModule=!0,t.Slider=void 0,i(6);var n=function(){function e(e){this.$slider=$("<div />",{class:"slider slider_"+e})}return e.prototype.getSlider=function(){return this.$slider},e}();t.Slider=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Scale=void 0;var s=i(0);i(8);var r=function(e){function t(t){var i=e.call(this)||this;return i.orientation=t,i.$scale=$("<div />",{class:"scale scale_"+t,on:{click:function(e){return i.handleScaleClick(e)}}}),i}return a(t,e),t.prototype.getScale=function(){return this.$scale},t.prototype.updateOrientation=function(e){this.$scale.removeClass("scale_"+this.orientation),this.orientation=e,this.$scale.addClass("scale_"+this.orientation)},t.prototype.handleScaleClick=function(e){"horizontal"===this.orientation&&this.broadcast({type:"clickScale",value:e.pageX}),"vertical"===this.orientation&&this.broadcast({type:"clickScale",value:e.pageY})},t.prototype.getState=function(){return{orientation:this.orientation}},t}(s.Observer);t.Scale=r},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.ProgressBar=void 0;var s=i(0);i(10);var r=function(e){function t(t){var i=e.call(this)||this;return i.orientation=t,i.$progressBar=$("<div />",{class:"progress-bar progress-bar_"+t,on:{click:function(e){return i.handleProgressBar(e)}}}),i}return a(t,e),t.prototype.getProgressBar=function(){return this.$progressBar},t.prototype.renderProgressBar=function(e,t){"horizontal"===this.orientation&&(this.size=this.$progressBar.css("height"),this.$progressBar.css({width:e+"px",transform:"translateX("+t+"px)"})),"vertical"===this.orientation&&(this.size=this.$progressBar.css("width"),this.$progressBar.css({height:e+"px",transform:"translateY("+t+"px)"}))},t.prototype.updateOrientation=function(e){this.$progressBar.removeClass("progress-bar_"+this.orientation),this.orientation=e,this.$progressBar.addClass("progress-bar_"+this.orientation),"horizontal"===this.orientation&&this.$progressBar.css({height:this.size,transform:"translateX(0)"}),"vertical"===this.orientation&&this.$progressBar.css({width:this.size,transform:"translateY(0)"})},t.prototype.handleProgressBar=function(e){"horizontal"===this.orientation&&this.broadcast({type:"clickScale",value:e.pageX}),"vertical"===this.orientation&&this.broadcast({type:"clickScale",value:e.pageY})},t.prototype.getState=function(){return{orientation:this.orientation}},t}(s.Observer);t.ProgressBar=r},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Runner=void 0;var s=i(0);i(12);var r=function(e){function t(t){var i=e.call(this)||this;return i.orientation=t,i.$document=$(document),i.$runner=$("<div />",{class:"runner runner_"+t,on:{mousedown:function(){return i.handleRunnerMousedown()}}}),i}return a(t,e),t.prototype.getRunner=function(){return this.$runner},t.prototype.updatePositionRunner=function(e){"horizontal"===this.orientation&&this.$runner.css({transform:"translateX("+e+"px)"}),"vertical"===this.orientation&&this.$runner.css({transform:"translateY("+e+"px)"})},t.prototype.updateOrientation=function(e){this.$runner.removeClass("runner_"+this.orientation),this.orientation=e,this.$runner.addClass("runner_"+this.orientation)},t.prototype.handleRunnerMousedown=function(){var e=this;this.$document.on("mousemove",(function(t){return e.handleDocumentMousemove(t)})),this.$document.on("mouseup",(function(){return e.handleDocumentMouseup()}))},t.prototype.handleDocumentMousemove=function(e){"horizontal"===this.orientation&&this.broadcast({type:"updatePositionRunner",value:e.pageX}),"vertical"===this.orientation&&this.broadcast({type:"updatePositionRunner",value:e.pageY})},t.prototype.handleDocumentMouseup=function(){this.$document.off("mousemove")},t.prototype.getState=function(){return{orientation:this.orientation}},t}(s.Observer);t.Runner=r},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";t.__esModule=!0,t.ValueWindow=void 0,i(14);var n=function(){function e(e){this.orientation=e,this.$valueWindow=$("<div />",{class:"value-window value-window_"+e})}return e.prototype.getValueWindow=function(){return this.$valueWindow},e.prototype.renderValueWindow=function(e,t){this.$valueWindow.text(e),"horizontal"===this.orientation&&this.$valueWindow.css({transform:"translateX("+(t-this.$valueWindow.outerWidth()/2)+"px)"}),"vertical"===this.orientation&&this.$valueWindow.css({transform:"translate(-"+(this.$valueWindow.outerWidth()+20)+"px,\n        "+(t-this.$valueWindow.outerHeight()/2)+"px)"})},e.prototype.updateOrientation=function(e){this.$valueWindow.removeClass("value-window_"+this.orientation),this.orientation=e,this.$valueWindow.addClass("value-window_"+this.orientation)},e.prototype.getState=function(){return{orientation:this.orientation}},e}();t.ValueWindow=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.ScaleValues=void 0;var s=i(0);i(16);var r=function(e){function t(t,i,n,a){var s=e.call(this)||this;s.orientation=t,s.minValue=i,s.maxValue=n,s.step=a,s.$scaleValues=$("<div/>",{class:"scale-values scale-values_"+s.orientation}),"horizontal"===s.orientation&&(s.symbol="|"),"vertical"===s.orientation&&(s.symbol="—");var r=Math.round((s.maxValue-s.minValue)/8/s.step)*s.step;return s.addScaleValue(s.minValue),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+r),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+2*r),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+3*r),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+4*r),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+5*r),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+6*r),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+7*r),s.addScaleValue(Math.round(s.minValue/s.step)*s.step+8*r),s.addScaleValue(s.maxValue),s}return a(t,e),t.prototype.getScaleValues=function(){return this.$scaleValues},t.prototype.updatePositionScaleValues=function(e){if(this.scaleSize=e,"horizontal"===this.orientation)for(var t=this.$scaleValues.find(".scale-values__scale-value"),i=this.scaleSize/(this.maxValue-this.minValue),n=0;n<=t.length;n+=1){var a=$(t[n]).data("value")-this.minValue;$(t[n]).css({transform:"translateX("+(a*i-20)+"px)"})}if("vertical"===this.orientation)for(t=this.$scaleValues.find(".scale-values__scale-value"),i=this.scaleSize/(this.maxValue-this.minValue),n=0;n<=t.length;n+=1){a=$(t[n]).data("value")-this.minValue;$(t[n]).css({transform:"translateY("+(a*i-20)+"px)"})}},t.prototype.updateOrientation=function(e){this.$scaleValues.removeClass("scale-values_"+this.orientation),this.orientation=e,this.$scaleValues.addClass("scale-values_"+this.orientation),"horizontal"===this.orientation&&(this.symbol="|",this.$scaleValues.find(".scale-values__symbol").text(this.symbol)),"vertical"===this.orientation&&(this.symbol="—",this.$scaleValues.find(".scale-values__symbol").text(this.symbol))},t.prototype.updateMinMaxValues=function(e,t){this.$scaleValues.find("*").remove(),this.minValue=e,this.maxValue=t;var i=Math.round((this.maxValue-this.minValue)/6/this.step)*this.step;this.addScaleValue(this.minValue),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+i),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+2*i),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+3*i),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+4*i),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+5*i),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+6*i),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+7*i),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+8*i),this.addScaleValue(this.maxValue),this.updatePositionScaleValues(this.scaleSize)},t.prototype.updateStep=function(e){this.step=e,this.$scaleValues.find("*").remove();var t=Math.round((this.maxValue-this.minValue)/6/this.step)*this.step;this.addScaleValue(this.minValue),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+t),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+2*t),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+3*t),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+4*t),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+5*t),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+6*t),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+7*t),this.addScaleValue(Math.round(this.minValue/this.step)*this.step+8*t),this.addScaleValue(this.maxValue),this.updatePositionScaleValues(this.scaleSize)},t.prototype.addScaleValue=function(e){var t=this;e>this.maxValue||this.$scaleValues.append($("<div/>",{class:"scale-values__scale-value",data:{value:e},on:{click:function(){return t.handleScaleValueClick(e)}}}).append($("<span/>",{class:"scale-values__symbol",text:this.symbol})).append($("<span/>",{text:e,class:"scale-values__value"})))},t.prototype.handleScaleValueClick=function(e){"horizontal"===this.orientation&&this.broadcast({type:"clickScaleValues",value:e}),"vertical"===this.orientation&&this.broadcast({type:"clickScaleValues",value:e})},t.prototype.getState=function(){return{orientation:this.orientation,symbol:this.symbol,minValue:this.minValue,maxValue:this.maxValue,step:this.step}},t}(s.Observer);t.ScaleValues=r},function(e,t,i){"use strict";i.r(t)}]);