// basic
var app = new Vue({
  el: "#app",
  data: {
    message: "today is " + new Date().toLocaleString()
  }
});

// if
var app1 = new Vue({
  el: "#app1",
  data: {
    seen: true
  }
});

app1.seen = true;

// function
var app2 = new Vue({
  el: "#app2",
  data: {
    message2: "hello World!!!"
  },
  methods: {
    reverseM: function(){
      this.message2 = this.message2.split('').reverse().join('')
    }
  }
});

// oop
var obj = {
  foo: 'abc'
};
Object.freeze(obj);

var app3 = new Vue({
  el: "#app3",
  data: obj
});

// 计算属性的getter,setter
var app4 = new Vue({
  el: "#app4",
  data: {
    firstName: "yh",
    lastName: "dai"
  },
  computed: {
    fullName: {
      // getter
      get: function(){
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function(newValue) {
        var name = newValue.split(' ')
        this.firstName = name[0]
        this.lastName = name[name.length - 1]     
      }
    }
  }
});
app4.fullName = "sdfsf aswewew";

// array filter
var app5 = new Vue({
  el: "#app5",
  data: {
    numbers: [1, 2, 3, 4, 5]
  },
  computed: {
    evenNumbers: function(){
      return this.numbers.filter(function(numbers){
        return numbers % 2 === 0
      })
    }
  }
});

// prop
Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
});

// 动画
var app6 = new Vue({
  el: "#app6",
  data: {
    show: true
  }
});

// 动画 
var app7 = new Vue({
  el: "#app7",
   data: {
    show: false
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
});