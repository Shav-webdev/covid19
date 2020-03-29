<template>
  <div class="google_map">
    <h2 class="title is-2" >Nearest patients on map</h2>
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
  </div>
</template>
<script>
export default {
  name: 'GoogleMap',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.google_map {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
