## 一、简介
Knockout有四个重要概念：  
+ 声明式绑定：使用简明易读的语法很容易地将模型(model)数据关联到DOM元素上。
+ UI界面自动刷新：当您的模型状态(model state)改变时，您的UI界面将自动更新。
+ 依赖跟踪：为转变和联合数据，在你的模型数据之间隐式建立关系。
+ 模板：为您的模型数据快速编写复杂的可嵌套的UI。

## 二、入门简介
### 好处
+ 优雅的依赖追踪- 不管任何时候你的数据模型更新，都会自动更新相应的内容。  
+ 声明式绑定- 浅显易懂的方式将你的用户界面指定部分关联到你的数据模型上。  
+ 灵活全面的模板- 使用嵌套模板可以构建复杂的动态界面。
+ 轻易可扩展- 几行代码就可以实现自定义行为作为新的声明式绑定
+ 纯JavaScript类库 – 兼容任何服务器端和客户端技术
+ 可添加到Web程序最上部 – 不需要大的架构改变
+ 简洁的 – Gzip之前大约25kb
+ 兼容任何主流浏览器 (IE 6+、Firefox 2+、Chrome、Safari、其它)
+ Comprehensive suite of specifications （采用行为驱动开发） - 意味着在新的浏览器和平台上可以很容易通过验证。
### 使用
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想在一个页面上，航空旅客可以为他们的旅行升级高级食物套餐，当他们选择一个套餐的时候，页面立即显示套餐的描述和价格
+ 首先声明套餐
```
var availableMeals = [
    { mealName: 'Standard', description: 'Dry crusts of bread', extraCost: 0 },
    { mealName: 'Premium', description: 'Fresh bread with cheese', extraCost: 9.95 },
    { mealName: 'Deluxe', description: 'Caviar and vintage Dr Pepper', extraCost: 18.50 }
];
```
+ 如果想让这3个选项显示到页面上，我们可以绑定一个下拉菜单（例如：<select>元素）到这个数据上。例如：
```
<h3>Meal upgrades</h3>
<p>Make your flight bearable by selecting a meal to match your  social and economic status</p>
Chosen meal: <select data-bind:"options:availableMeals
                                optionsText:'mealName'"></select>
```
+ 启用Knockout并使你的绑定生效，在availableMeals变量声明之后添加如下代码：
```
var viewModel = {
    /* 我们将在一瞬间填充这个 */
}
ko.applyBindings(viewModel)
// Makes Knockout get to work
// 注意：ko.applyBindings需要在上述HTML之后应用才有效
```
+ 下一步，声明一个简单的data model来描述旅客已经选择的套餐，添加一个属性到当前的view model上：
```
var viewModel = {
    chosenMeal: ko.observable(availableMeals[0])
}
```
> ko.observable是什么？它是KO里的一个基础概念。UI可以监控（observe）它的值并且回应它的变化。这里我们设置chosenMeal是UI可以监控已经选择的套餐，并初始化它，使用availableMeal里的第一个值作为它的默认值（例如：Standard）。
+ 让我们将chosenMeal 关联到下拉菜单上，仅仅是更新<select>的data-bind属性，告诉它让<select>元素的值读取/写入chosenMeal这个模型属性
```
Chosen meal: <select data-bind="options: availableMeals,
                                optionsText: 'mealName',
                                value: chosenMeal"></select>
```
+ 理论上说，我们现在可以读/写chosenMeal 属性了，但是我们不知道它的作用。让我们来显示已选择套餐的描述和价格
```
<p>
    You've chosen:
    <b data-bind="text: chosenMeal().description"></b>
    (price: <span data-bind='text: chosenMeal().extraCost'></span>)
</p>
```
> 于是，套餐信息和价格，将根据用户选择不同的套餐项而自动更新
+ 最后一件事：如果能将价格格式化成带有货币符号的就好了，声明一个JavaScript函数就可以实现了
```
function formatPrice(price) {
    return price == 0 ? "Free" : "$" + price.toFixed(2);
}
```
+ 然后更新绑定信息使用这个函数
```
(price: <span data-bind='text: formatPrice(chosenMeal().extraCost)'></span>)
```
> Price的格式化展示了，你可以在你的绑定里写任何JavaScript代码，KO仍然能探测到你的绑定依赖代码。这就展示了当你的model改变时，KO如何只进行局部更新而不用重新render整个页面 – 仅仅是有依赖值改变的那部分  
链式的observables也是支持的（例如：总价依赖于价格和数量）。当链改变的时候，依赖的下游部分将会重新执行，同时所有相关的UI将自动更新。不需要在各个observables之间声明关联关系，KO框架会在运行时自动执行的

### KO和jQuery (或Prototype等)是竞争关系还是能一起使用？
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有人都喜欢jQuery! 它是一个在页面里操作元素和事件的框架，非常出色并且易使用，在DOM操作上肯定使用jQuery，KO解决不同的问题。

### Knockout的实现有何不同？
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用KO非常简单。将你的数据描绘成一个JavaScript数组对象myItems，然后使用模板（template）转化这个数组到表格里（或者一组DIV）。不管什么时候数组改变， UI界面也会响应改变（不用指出如何插入新行 tr 或在哪里插入），剩余的工作就是同步了。例如：你可以声明绑定如下一个SPAN显示数据数量（可以放在页面的任何地方，不一定非要在template里）
```
There are <span data-bind="text: myItems().count"></span> items
```
就是这些！你不需要写代码去更新它，它的更新依赖于数组myItems的改变。同样， Add按钮的启用和禁用依赖于数组myItems的长度，如下：
```
<button data-bind="enable: myItems().count < 5 ">Add</button>
```
之后，如果你要实现Delete功能，不必指出如何操作UI元素，只需要修改数据模型就可以了。 
 
### 总结
KO没有和jQuery或类似的DOM 操作API对抗竞争。KO提供了一个关联数据模型和用户界面的高级功能。KO本身不依赖jQuery，但是你可以一起同时使用jQuery，生动平缓的UI改变需要真正使用jQuery。

## 监控属性（Observables）
Knockout是在下面三个核心功能是建立起来的：
1. 监控属性（Observables）和依赖跟踪（Dependency tracking）
2. 声明式绑定（Declarative bindings）
3. 模板（Templating）

### MVVM and View Models
Model-View-View Model (MVVM) 是一种创建用户界面的设计模式。 描述的是如何将复杂的UI用户界面分成3个部分：

 + model：你程序里存储的数据。这个数据包括对象和业务操作（例如：银子账户可以完成转账功能）， 并且独立于任何UI。使用KO的时候，通常说是向服务器调用Ajax读写这个存储的模型数据。
 + view model：在UI上，纯code描述的数据以及操作。例如，如果你实现列表编辑，你的view model应该是一个包含列表项items的对象和暴露的add/remove列表项（item）的操作方法。
 
> 注意这不是UI本身：它不包含任何按钮的概念或者显示风格。它也不是持续数据模型 – 包含用户正在使用的未保存数据。使用KO的时候，你的view models是不包含任何HTML知识的纯JavaScript 对象。保持view model抽象可以保持简单，以便你能管理更复杂的行为。

 + view：一个可见的，交互式的，表示view model状态的UI。从view model显示数据，发送命令到view model（例如：当用户click按钮的时候），任何view model状态改变的时候更新。

创建一个view model，只需要声明任意的JavaScript object。例如：

    var myViewModel = {
        personName: 'Bob',
        personAge: 123
    };

你可以为view model创建一个声明式绑定的简单view。例如：下面的代码显示personName 值：

    The name is <span data-bind="text: personName"></span>

data-bind属性尽管好用，但它不是HTML的原生属性。由于浏览器不识别它是什么意思，所以你需要激活Knockout 来让他起作用。

    ko.applyBindings(myViewModel);
    //相当于增加了一个根对象，脚本和html都在根对象下


### ko.applyBindings使用的是什么样的参数？
1. 第一个参数是你想用于声明式绑定
2. 第二个参数（可选），可以声明成使用data-bind的HTML元素或者容器。例如， ko.applyBindings(myViewModel, document.getElementById('someElementId'))。它的现在是只有作为someElementId 的元素和子元素才能激活KO功能。好处是你可以在同一个页面声明多个view model，用来区分区域。  

现在已经知道如何创建一个简单的view model并且通过binding显示它的属性了。但是KO一个重要的功能是当你的view model改变的时候能自动更新你的界面。当你的view model部分改变的时候KO是如何知道的呢？答案是：你需要将你的model属性声明成observable的。  
例如：将上述例子的view model改成如下代码：

    var myViewModel = {
        personName: ko.observable('Bob'),
        personAge: ko.observable(123)
    };

### 监控属性（observables）的读和写
不是所有的浏览器都支持JavaScript的 getters and setters (比如IE),，所以为了兼容性，使用ko.observable监控的对象都是真实的function函数。
+ 读取监控属性（observable）的值，只需要直接调用监控属性（observable）（不需要参数），例如myViewModel.personName() 将返回'Bob', myViewModel.personAge() 将返回 123。
+ 写一个新值到监控属性（observable）上，调用这个observable属性并当新值作为参数。例如：调用 myViewModel.personName('Mary') 将更新name值为'Mary'。
+ 给一个model对象的多个属性写入新值，你可以使用链式语法。例如：myViewModel.personName('Mary').personAge(50) 将会将name更新为 'Mary' 并且 将age更新为 50。  

### 监控属性（Observables）的显式订阅
通常情况下，你不用手工订阅，所以新手可以忽略此小节。高级用户，如果你要注册自己的订阅到监控属性（observables），你可以调用它的subscribe 函数。例如：

    myViewModel.personName.subscribe(function (newValue) {
        alert("The person's new name is " + newValue);
    });
    
这个subscribe 函数在内部很多地方都用到的。你也可以终止自己的订阅：首先得到你的订阅，然后调用这个对象的dispose函数，例如：  

    var subscription = myViewModel.personName.subscribe(function (newValue) { 
        /* do stuff */ 
    });
    // ...then later...
    subscription.dispose(); 
    // I no longer want notifications
    
大多数情况下，你不需要做这些，因为内置的绑定和模板系统已经帮你做好很多事情了，可以直接使用它们。

### 使用依赖监控属性(Dependent Observables)

如果你已经有了监控属性firstName和lastName，你想显示全称怎么办？ 这就需要用到依赖监控属性了 – 这些函数是一个或多个监控属性， 如果他们的依赖对象改变，他们会自动跟着改变。  
例如，下面的view model,  

    var viewModel = {
        firstName: ko.observable('Bob'),
        lastName: ko.observable('Smith')
    };
    
你可以添加一个依赖监控属性来返回姓名全称：  

    viewModel.fullName = ko.dependentObservable(function () {
        return this.firstName() + " " + this.lastName();
    }, viewModel);

并且绑定到UI的元素上，例如：

    The name is <span data-bind="text: fullName"></span>
    
不管firstName还是lastName改变，全称fullName都会自动更新（不管谁改变，执行函数都会调用一次，不管改变成什么，他的值都会更新到UI或者其他依赖监控属性上）。  

#### 管理‘this’

你可能疑惑ko.dependentObservable的第二个参数是做什么用的（上面的例子中我传的是viewModel）, 它是声明执行依赖监控属性的this用的。 没有它，你不能引用到this.firstName() 和this.lastName()。  

JavaScript 对象没有任何办法能引用他们自身，你不能直接在view model里声明他们，换句话说，你不能写成下面这样：

    var viewModel = {
        myDependentObservable: ko.dependentObservable(function() {
            ...
        }, /* can't refer to viewModel from here, so this doesn't work */)
    }
    
相反你必须写成如下这样：

    var viewModel = {
        // Add other properties here as you wish
    };
    
    viewModel.myDependentObservable = ko.dependentObservable(function() {
        ...
    }, viewModel); 
    // This is OK

只要你知道期望什么，它确实不是个问题。

#### 依赖链

理所当然，如果你想你可以创建一个依赖监控属性的链。例如：

+ 监控属性items表述一组列表项
+ 监控属性selectedIndexes保存着被用户选上的列表项的索引
+ 依赖监控属性selectedItems 返回的是selectedIndexes 对应的列表项数组
+ 另一个依赖监控属性返回的true或false依赖于 selectedItems 的各个列表项是否包含一些属性（例如，是否新的或者还未保存的）。一些UI element（像按钮的启用/禁用）的状态取决于这个值）。  

然后，items或者selectedIndexes 的改变将会影响到所有依赖监控属性的链，所有绑定这些属性的UI元素都会自动更新。多么整齐与优雅！

#### 可写的依赖监控属性

依赖监控属性是通过计算其它的监控属性而得到的。感觉是依赖监控属性正常情况下应该是只读的。那么，有可能让依赖监控属性支持可写么？你只需要声明自己的callback函数然后利用写入的值再处理一下相应的逻辑即可。  

> 详情移步html文件夹中dependentObservable系列文件

#### 使用observable数组

如果你要探测和响应一个对象的变化，你应该用observables。如果你需要探测和响应一个集合对象的变化，你应该用observableArray。

    var myObservableArray = ko.observableArray();    // Initially an empty array
    myObservableArray.push('Some value');            // Adds the value and notifies observers

> 关键点：监控数组跟踪的是数组里的对象，而不是这些对象自身的状态。也就是说，一个observableArray 仅仅监控他拥有的对象，并在这些对象添加或者删除的时候发出通知。里面对象的变化不进行监控，除非你声明这个对象的属性为observable。

如果你想让你的监控数组在开始的时候就有一些初始值，那么在声明的时候，你可以在构造器里加入这些初始对象。例如：

    // This observable array initially contains three objects
    var anotherObservableArray = ko.observableArray([
        { name: "Bungle", type: "Bear" },
        { name: "George", type: "Hippo" },
        { name: "Zippy", type: "Unknown" }
    ]);
    
#### 从observableArray里读取信息

一个observableArray其实就是一个observable的监控对象，只不过他的值是一个数组。所以你可以像获取普通的observable的值一样，只需要调用无参函数就可以获取自身的值了。

    alert('The length of the array is ' + myObservableArray().length);
    alert('The first element is ' + myObservableArray()[0]);

#### 下面讲解的均是observableArray的读取和写入的相关函数

+ indexOf：myObservableArray.indexOf('Blah')将返回第一个等于Blah的数组项的索引。如果没有找到相等的，将返回-1
+ slice：调用myObservableArray.slice(...)等价于调用JavaScript原生函数
+ pop, push, shift, unshift, reverse, sort, splice：所有这些函数都是和JavaScript数组原生函数等价的，唯一不同的数组改变可以通知订阅者。
+ remove和removeAll
    + myObservableArray.remove(someItem) 删除所有等于someItem的元素并将被删除元素作为一个数组返回
    + myObservableArray.remove(function(item) { return item.age < 18 }) 删除所有age属性小于18的元素并将被删除元素作为一个数组返回
    + myObservableArray.removeAll(['Chad', 132, undefined]) 删除所有等于'Chad', 123, or undefined的元素并将被删除元素作为一个数组返回
+ destroy和destroyAll
    + myObservableArray.destroy(someItem) 找出所有等于someItem的元素并给他们添加一个属性_destroy，并赋值为true
    + myObservableArray.destroy(function(someItem) { return someItem.age < 18 }) 找出所有age属性小于18的元素并给他们添加一个属性_destroy，并赋值为true
    + myObservableArray.destroyAll(['Chad', 132, undefined]) 找出所有等于'Chad', 123, 或undefined 的元素并给他们添加一个属性_destroy，并赋值为true
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_destroy是做什么用的？这只是为Rails 开发者准备的。在Rails 开发过程中，如果你传入一个JSON对象，Rails 框架会自动转换成ActiveRecord对象并且保存到数据库。Rails 框架知道哪些对象以及在数据库中存在，哪些需要添加或更新， 标记_destroy为true就是告诉框架删除这条记录。   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意的是：在KO render一个foreach模板的时候，会自动隐藏带有_destroy属性并且值为true的元素。所以如果你的“delete”按钮调用destroy(someItem) 方法的话，UI界面上的相对应的元素将自动隐藏，然后等你提交这个JSON对象到Rails上的时候，这个元素项将从数据库删除（同时其它的元素项将正常的插入或者更新）
