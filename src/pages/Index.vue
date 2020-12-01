<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-16 pb-16 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.entries.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query($page:Int) {

  entries: allService(perPage: 9, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        excerpt
        image
        path
        datetime : created
      }
    }
  }
}

</page-query>

<script>
import PostListItem from "~/components/PostListItem.vue";

export default {
  metaInfo: {
    title: "Welcome, MGRF",
  },
  components: {
    PostListItem,
  },
};
</script>
