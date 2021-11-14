import Vue from 'vue'
import notification from 'vue-notification-ui'

Vue.use(notification, {
  position: 'notification-top-right', // top, bottom, left, right
  duration: 5000, // default
  left: 20, // default
  bottom: 20, // default
  top: 20, // default
  right: 40 // default
})


// call $notification api
this.$notification(
  'Good job!', 
  'You clicked the button!',
  'success', 
  async () => {
    console.log('Clicked notification')
  }, 
  'A minute ago'
)