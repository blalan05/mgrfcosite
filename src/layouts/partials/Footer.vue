<template>
  <div class="relative bg-black pt-4 pb-8 text-sm text-gray-500">
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="w-full md:w-1/4 text-center">
        <g-image
          src="./../../assets/logo.png"
          width="100%"
          class="mx-auto"
        ></g-image>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <p>202 Harrison Street</p>
        <p>P.O. Box 39</p>
        <p>Reeseville, WI 53579</p>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <p>Phone: <a href="tel:920-927-3851">920-927-3851</a></p>
        <p>Fax: 920-927-5551</p>
        <p>Email: <a href="mailto:info@mgrf.com">Info@mgrf.com</a></p>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h4>Links</h4>
        <p>About</p>
        <p>Contact</p>
        <p>Carrers</p>
      </div>
    </div>
    <div class="container mx-auto flex justify-between items-center mt-12">
      <div class="w-full md:w-1/2 text-center md:text-left">
        Copyright {{ currentYear }} by {{ $static.metadata.siteName }}
      </div>
      <div class="w-full md:w-1/2">
        <ul class="list-none flex justify-center md:justify-end">
          <li
            :key="element.name"
            v-for="(element, index) in $static.metadata.navigation"
            class="hover:text-white"
            v-bind:class="{
              'mr-6':
                index != Object.keys($static.metadata.navigation).length - 1,
            }"
          >
            <a
              :href="element.link"
              v-if="element.external"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ element.name }}
            </a>
            <g-link v-else :to="element.link">{{ element.name }}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    navigation : footerNavigation {
      name
      link
      external
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>