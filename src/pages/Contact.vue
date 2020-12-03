<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container mx-auto pt-24 pb-16 px-4 sm:px-0">
      <div class="lg:mx-32 md:mx-16 sm:mx-8">
        <h1 class="pb-8 text-6xl font-medium">Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label for="name">Your name: </label>
            </div>
            <div class="md:w-2/3">
              <input
                id="name"
                type="text"
                label="Name"
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label for="email">Your email: </label>
            </div>
            <div class="md:w-2/3">
              <input
                id="email"
                label="Name"
                type="email"
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label for="message">Your message: </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                id="message"
                label="Name"
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
            >
              Submit
            </button>
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