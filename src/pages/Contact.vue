<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container mx-auto pt-24 pb-16 px-4 sm:px-0">
      <div class="lg:mx-32 md:mx-16 sm:mx-8">
        <h1 class="pb-8 text-6xl font-medium">Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true" action="/">
          <div>
            <label>Your name: <input type="text" label="Name" /></label>
          </div>
          <div>
            <label>Your email: <input label="Name" type="email" /></label>
          </div>
          <div>
            <label>Your message: </label>
            <textarea label="Name" />
          </div>
          <div>
            <button type="submit">Submit</button>
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