<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium">
          {{ $page.category.title }}
        </h1>
        <p class="text-gray-700 text-xl">
          A collection of
          <span class="self-center"
            >{{ $page.category.belongsTo.totalCount }} {{ postLabel }}</span
          >
        </p>

        <div class="pt-8 border-b"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    category(id: $id) {
      title
      path
      belongsTo(perPage: 2, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Service {
              title
              excerpt
              image(width:800)
              path
            }
          }
        }
      }
    }  
  }
</page-query>

<script>
import PostListItem from "~/components/PostListItem.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Pagination,
    PostListItem,
  },
  computed: {
    postLabel: function () {
      var pluralize = require("pluralize");
      return pluralize("post", this.$page.category.belongsTo.totalCount);
    },
  },
  metaInfo() {
    return {
      title: this.$page.category.title,
    };
  },
};
</script>
