<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container mx-auto pt-24 pb-16 px-4 sm:px-0">
      <div class="lg:mx-32 md:mx-16 sm:mx-8">
        <h1 class="pb-8 text-6xl font-medium">Contact Us</h1>
        <form>
          <div>
            <input label="Name" />
          </div>
          <div>
            <input label="Name" type="email" />
          </div>
          <div>
            <textarea label="Name" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
};
</script>

<style>
</style>