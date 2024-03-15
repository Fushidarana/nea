<script setup>

const props = defineProps({
  text: {type: String}
})
</script>
<template>
  <div class="ui-read-more">
    <RouterLink to="/news" class="ui-read-more_button">{{ props.text }}</RouterLink>
    <img class="ui-read-more_icon" src="@/assets/icons/arrow-bar-right.png" alt="more">
  </div>
</template>


<style lang="scss">
@import "@/assets/styles/main";

.ui-read-more {
  margin-top: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite ease-in-out;

  &_button {
    background-color: $primary2;
    text-transform: uppercase;
    border-radius: 1.5rem;
    border: none;
    color: white;
    font-weight: bold;
    padding: 1rem;
    width: 20%;
    height: 20%;
    text-align: center;

    &:hover {
      background-color: $accent2;
      color: $secondary3;
    }
  }
  &_icon {
    width: 4rem;

  }
}

@media (min-width: 500px) {
  .ui-read-more {
    &_button {
      width: 30%;
      font-size: 2rem;
    }

    &_icon {
      width: 5rem;
    }
  }
}

@media (min-width: 992px) {
  .ui-read-more {
    &_button {
      width: 20%;
      font-size: 2rem;
    }
  }
}

@media (min-width: 1200px) {
  .ui-read-more {
    &_button {
      width: 20%;
      font-size: 3rem;
    }
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-7px)
  }
  100% {
    transform: translateY(0)
  }
}
</style>