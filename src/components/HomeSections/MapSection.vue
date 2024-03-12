<script setup>
import {ref, shallowRef} from 'vue';
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapListener,
  YandexMapMarker
} from 'vue-yandex-maps';
import DumpInfo from "@/components/DumpInfo.vue";

const map = shallowRef(null);

const mapWidth = '100%'
const mapHeight = '60vh'

const longitude = ref(null)
const latitude = ref(null)

const showMarker = ref(false)
const showDialogWindow = ref(false)

const logMapClick = (_, event) => {
  latitude.value = event.coordinates[0]
  longitude.value = event.coordinates[1]
  showMarker.value = true
  setTimeout(() => {
    showDialogWindow.value = true
  }, 1000)
};
</script>

<template>
  <div class="map-container">
    <div class="header-container map_header">
      <img class="header-icon" src="../../assets/icons/dump.png" alt="news">
      <p class="header-text">Отметить свалку</p>
    </div>

    <div class="map-container_map">
      <yandex-map
          class="map-container__map"
          v-model="map"
          :settings="{
        location: {
          center: [37.617644, 55.755819],
          zoom: 9}
      }"
          :width="mapWidth"
          :height="mapHeight"
      >
        <yandex-map-default-scheme-layer/>
        <yandex-map-listener :settings="{ onClick: logMapClick }"/>
        <yandex-map-default-features-layer/>
        <yandex-map-marker
            v-if="showMarker"
            :settings="{coordinates: [latitude, longitude]}">
          <template #default>
            <img src="../../assets/icons/marker.png" alt="dump" style="width: 4rem">
          </template>
        </yandex-map-marker>
      </yandex-map>
    </div>
    <DumpInfo/>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main";

.map-container {
  padding: 2rem;
  background-color: $light-grey;

  &_map {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    border: $blue 0.3rem solid;
    box-shadow: rgba(46,107,240,0.4) -5px 5px, rgba(30,104,201,0.3) -10px 10px, rgba(26,47,155,0.2) -15px 15px, rgba(1,19,138,0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;;;
  }
}

.map_header {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>