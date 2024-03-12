<script setup>
import {ref, shallowRef} from 'vue';
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapListener,
  YandexMapMarker
} from 'vue-yandex-maps';
import DumpInfo from "@/components/Dialog.vue";

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
    <div class="map-container_header">
      <img class="map-container_header__icon" src="@/assets/icons/news.png" alt="news">
      <p>Отметить свалку</p>
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
            <img src="@/assets/icons/marker.png" alt="dump" style="width: 4rem">
          </template>
        </yandex-map-marker>
      </yandex-map>
      <DumpInfo/>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main";

.map-container {
  &_header {
    @include sub-headers;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 2rem 2rem 2rem;

    &__icon {
      width: 2rem;
    }
  }

  &_map {
    display: flex;
    flex-direction: column;

  }
}

</style>