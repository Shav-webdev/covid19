<template>
  <GmapMap
          :center="{lat:40.155305, lng:44.509788}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
  >
<!--    <GmapMarker-->
<!--            :key="index"-->
<!--            v-for="(m, index) in markers"-->
<!--            :position="m.position"-->
<!--            :clickable="true"-->
<!--            :draggable="true"-->
<!--            @click="center=m.position"-->
<!--    />-->
  </GmapMap>
</template>

<script>
export default {
  name: 'GoogleMap',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
