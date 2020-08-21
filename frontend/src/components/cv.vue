<template>
    <div id="demo">
  <div v-bind:key="picture in pictures">
      <img src="http://www.arabianbusiness.com/skins/ab.main/gfx/loading_spinner.gif" v-img="picture">
  </div>
</div>
</template>

<script> 
    Vue.directive('img', function(url) {
    var img = new Image();
    img.src = url;

    img.onload = function() {
        this.el.src = url;
        $(this.el)
        .css('opacity', 0)
        .animate({ opacity: 1 }, 1000)
    }.bind(this);
    
    });

    new Vue({
    el: '#demo',
    
    data: {
        pictures: [
        'http://lorempixel.com/1920/1920?0',
        'http://lorempixel.com/1920/1920?1',
        'http://lorempixel.com/1920/1920?2',
        'http://lorempixel.com/1920/1920?3',
        'http://lorempixel.com/1920/1920?4',
        'http://lorempixel.com/1920/1920?5',
        'http://lorempixel.com/1920/1920?6',
        'http://lorempixel.com/1920/1920?7',
        'http://lorempixel.com/1920/1920?8',
        'http://lorempixel.com/1920/1920?9',
        ]
    }
    });
</script>

<style scoped>
    #demo div {
  display: inline-block;
  margin: 6px 8px;
}

img {
  display: block;
  width: 200px;
  height: 200px;
}
</style>