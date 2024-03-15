<script>
</script>

<template>
  <p class="small-header">Название</p>
  <p class="highlight-text">23923</p>
  <div class="template">
    <div class="template_image_container">
      <img class="template_image_container_image" src="../../public/logo.png" alt="">
    </div>
    <p class="plain-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam blanditiis culpa
      doloremque ea error facere magnam nemo nesciunt non nostrum officiis perferendis perspiciatis, porro, possimus quo
      repudiandae, sequi sunt suscipit tenetur ullam voluptatem voluptates. Beatae cupiditate dolore doloremque facere
      fuga hic iste quisquam suscipit temporibus ullam! A adipisci deserunt dolores odit perspiciatis reiciendis sunt
      veritatis? Consequuntur, cum cumque ex iste molestiae officiis perspiciatis quis sed. Accusantium adipisci amet
      assumenda beatae cumque cupiditate debitis dignissimos, distinctio doloribus eius eos et expedita explicabo in
      inventore labore laudantium mollitia nobis quasi quo ratione repellendus saepe tempora veniam vero voluptate
      voluptates. Eveniet, ratione.</p>

    <div class="template_image_container">
      <img class="template_image_container_image" src="../../public/logo.png" alt="">
    </div>

    <p class="plain-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam blanditiis culpa
      doloremque ea error facere magnam nemo nesciunt non nostrum officiis perferendis perspiciatis, porro, possimus quo
      repudiandae, sequi sunt suscipit tenetur ullam voluptatem voluptates. Beatae cupiditate dolore doloremque facere
      fuga hic iste quisquam suscipit temporibus ullam! A adipisci deserunt dolores odit perspiciatis reiciendis sunt
      veritatis? Consequuntur, cum cumque ex iste molestiae officiis perspiciatis quis sed. Accusantium adipisci amet
      assumenda beatae cumque cupiditate debitis dignissimos, distinctio doloribus eius eos et expedita explicabo in
      inventore labore laudantium mollitia nobis quasi quo ratione repellendus saepe tempora veniam vero voluptate
      voluptates. Eveniet, ratione.</p>
  </div>
</template>


<style lang="scss">
@import "src/assets/styles/main";
.template {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 2rem;

  &_image_container {
    width: 70%;
    background-color: $primary2;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    &_image {
      width: 100%;
    }
  }
}

@media (min-width: 500px) {

}

@media (min-width: 992px) {

}

@media (min-width: 1200px) {

}
</style>