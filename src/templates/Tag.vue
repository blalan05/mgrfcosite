<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium">
          {{ $page.services.title }}
        </h1>
      </div>

      <div class="pt-8 border-b"></div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.services.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.services.path"
          :currentPage="$page.services.belongsTo.pageInfo.currentPage"
          :totalPages="$page.services.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.services.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    allServices(id: $id) {
      title
      path
      belongsTo(perPage: 15, page: $page) @paginate {
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
              image
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
      return pluralize("post", this.$page.services.belongsTo.totalCount);
    },
  },
  metaInfo() {
    return {
      title: this.$page.services.title,
    };
  },
};
</script>
