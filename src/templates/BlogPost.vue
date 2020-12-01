<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8">
        <section class="post-header container mx-auto px-0 mb-4 border-b">
          <h1 class="text-5xl font-medium leading-none mt-0">
            {{ $page.service.title }}
          </h1>
          <div
            class="text-2xl pt-4 pb-10 text-gray-700 font-serif"
            v-html="$page.service.excerpt"
          ></div>
        </section>
      </div>
      <section class="post-image mx-auto w-full">
        <g-image
          :src="$page.service.image"
          :alt="$page.service.image_caption"
        ></g-image>
      </section>

      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0">
        <section
          class="post-content container mx-auto relative font-serif text-gray-700"
        >
          <div
            class="post-content-text text-xl"
            v-html="$page.service.content"
          ></div>
        </section>

        <section class="post-services container mx-auto relative py-10">
          <g-link
            v-for="tag in $page.service.services"
            :key="tag.id"
            :to="tag.path"
            class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
            >{{ tag.title }}</g-link
          >
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
    service(id: $id) {
      title
      path
      image (width:1600, height:800)
      image_caption
      excerpt
      content
      services {
        id
        title
        path
      }
    }

    previous: service(id: $previousElement) {
      title
      excerpt
      image(width:800)
      image_caption
      path
    }

    next: service(id: $nextElement) {
      title
      excerpt
      image(width:800)
      image_caption
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
      title: this.$page.service.title,
    };
  },
};
</script>