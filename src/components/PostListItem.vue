<template>
  <div
    class="flex flex-post px-0 sm:px-4 pb-8 mb-8"
    v-bind:class="{ 'no-border': !border }"
  >
    <g-link :to="record.path" class="post-card-image-link" v-if="record.image">
      <g-image
        :src="require(`!!assets-loader?width=800!@services/${imageUrl}`)"
        :alt="record.image_caption"
        class="post-card-image"
      ></g-image>
    </g-link>
    <div class="post-card-content mt-3">
      <g-link :to="record.path">
        <h2 class="post-card-title mt-0">
          {{ record.title }}
        </h2>
        <p class="post-card-excerpt">{{ record.excerpt }}</p>
      </g-link>
      <div class="w-full post-card-meta pt-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {},
    border: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    imageUrl() {
      return this.record.image;
    },
  },
};
</script>

<style>
</style>