<template>
  <div>
    <router-link class="user" :to="`/users/${user.id}`" v-if="asideSearch">
      <img
        class="user__image"
        :src="user.image ? user.image : imagePlaceholder"
        :alt="user.description"
        width="70"
        height="70"
      />
      <div class="user__text">
        <p class="user__name base-text">{{ user.name }}</p>

        <p class="user__email">{{ user.email }}</p>
      </div>
    </router-link>
    <div class="user user--profile" v-else>
      <img
        class="user__image"
        :src="user.image ? user.image : imagePlaceholderBig"
        :alt="user.description"
        width="70"
        height="70"
      />
      <div class="user__text">
        <div class="user__contacts">
          <h3 class="user__name base-text">{{ user.name }}</h3>

          <p>
            email:
            <a class="user__email" :href="`mailto:${user.email}`">{{
              user.email
            }}</a>
          </p>

          <p>
            phone:
            <a class="user__phone" :href="`tel:${user.phone}`">{{
              user.phone
            }}</a>
          </p>
        </div>

        <p>О себе:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import imagePlaceholder from '@/images/placeholder-image.png';
import imagePlaceholderBig from '@/images/placeholder-image-big.png';

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  asideSearch: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  min-height: 70px;

  &:hover {
    .user__text {
      background-color: $GREY_E0E0E0;
    }
  }

  &__image {
    width: 70px;
    object-fit: contain;
  }

  &__text {
    transition: 0.3s ease-in-out;
    width: 100%;
    padding: 0 10px;
    min-height: inherit;
    word-break: break-word;
    display: grid;
    align-items: center;
    align-content: center;

    p {
      margin: 0;
    }
  }

  &__name {
    color: $BLACK;
  }

  &__email {
    font-size: 14px;
    color: $GREY_76787D;
  }

  &__contacts {
    display: grid;
    gap: 10px;
  }

  &--profile {
    gap: 20px;
    box-shadow: none;

    &:hover {
      .user__text {
        background-color: $TRANSAPRENT;
      }
    }

    .user__image {
      width: 424px;
      height: 286px;
    }
  }
}
</style>
