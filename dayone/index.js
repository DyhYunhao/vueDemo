

var app = new Vue({
  el: "#app",
  data: {
    message: "today is " + new Date().toLocaleString()
  }
});

var app1 = new Vue({
  el: "#app1",
  data: {
    seen: true
  }
});

app1.seen = true;

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