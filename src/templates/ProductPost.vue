<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8">
        <section class="post-header container mx-auto px-0 mb-4 border-b">
          <h1 class="text-5xl font-medium leading-none mt-0">
            {{ $page.product.title }}
          </h1>
          <div
            class="text-2xl pt-4 pb-10 text-gray-700 font-serif"
            v-html="$page.product.excerpt"
          ></div>
        </section>
      </div>

      <section class="post-image mx-auto w-full">
        <g-image
          :src="
            require(`!!assets-loader?width=1600&height=800!@products/${imageUrl}`)
          "
          :alt="$page.product.image_caption"
        ></g-image>
      </section>

      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0">
        <section
          class="post-content container mx-auto relative font-serif text-gray-700"
        >
          <div
            class="post-content-text text-xl"
            v-html="$page.product.content"
          ></div>
        </section>
      </div>
    </div>

    <section
      class="post-related bg-black text-gray-200 pt-10 border-b border-b-gray-900"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
          <PostListItem
            v-if="$page.previous"
            :record="$page.previous"
            :border="false"
          ></PostListItem>
          <PostListItem
            v-if="$page.next"
            :record="$page.next"
            :border="false"
          ></PostListItem>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    product(id: $id) {
      title
      path
      image
      image_caption
      excerpt
      content
    }

    previous: service(id: $previousElement) {
      title
      excerpt
      path
    }

    next: service(id: $nextElement) {
      title
      excerpt
      path
    }


    
  }
</page-query>

<script>
import PostListItem from "~/components/PostListItem.vue";

export default {
  components: {
    PostListItem,
  },
  metaInfo() {
    return {
      title: this.$page.product.title,
    };
  },
  computed: {
    imageUrl() {
      return this.$page.product.image;
    },
  },
};
</script>