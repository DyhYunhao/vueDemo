
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