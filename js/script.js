const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      list: {

        element: ""
       
      },

      newElem: [],
    };
  },

  methods: {
    addElement: function() {
        this.newElem.push({...this.list})
        this.list.element = "";
        
    }
    
  }
}).mount("#app");