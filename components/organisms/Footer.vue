<template>
  <footer class="border-t">
    <div class="container my-6">
      <div class="flex flex-col md:flex-row items-start justify-between gap-x-20 gap-y-4">
        <p class="heading-2">
          Forms
        </p>
        <div class="grid md:grid-cols-2 md:mx-auto gap-y-6 gap-x-20">
          <div class="flex flex-col">
            <p class="font-bold mb-2 border-b">
              Socials
            </p>
            <div class="flex">
              <NuxtLink
                to="https://www.instagram.com/appeel.io/"
                target="_blank"
                rel="noreferrer noopener"
                class="px-1"
              >
                <Icon name="ph:instagram-logo-bold" size="18" class="hover:text-teal duration-200 ease-in-out" />
              </NuxtLink>
              <NuxtLink
                to="https://www.linkedin.com/company/appeel-io/mycompany/"
                rel="noreferrer noopener"
                class="px-1"
              >
                <Icon name="ph:linkedin-logo-bold" size="18" class="hover:text-yellow duration-200 ease-in-out" />
              </NuxtLink>
              <NuxtLink
                to="https://twitter.com/appeelio"
                rel="noreferrer noopener"
                class="px-1"
              >
                <Icon name="ph:twitter-logo-bold" size="18" class="hover:text-pink duration-200 ease-in-out" />
              </NuxtLink>
              <NuxtLink
                to="https://www.facebook.com/appeel.io"
                rel="noreferrer noopener"
                class="px-1"
              >
                <Icon name="ph:facebook-logo-bold" size="18" class="hover:text-orange duration-200 ease-in-out" />
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="font-bold mb-2 border-b">
              Contact
            </p>
            <NuxtLink
              to="https://appeel.io?utm_source=formkit"
              target="_blank"
              rel="noreferrer noopener"
              class="flex items-center gap-2 group py-1"
            >
              <Icon name="dashicons:admin-site-alt3" size="18" class="group-hover:text-teal duration-200 ease-in-out" />
              <p>
                Appeel.io
              </p>
            </NuxtLink>
            <NuxtLink
              to="mailto:info@appeel.io"
              rel="noreferrer noopener"
              class="flex items-center gap-2 group py-1"
            >
              <Icon name="material-symbols:mail-outline" size="18" class="group-hover:text-teal duration-200 ease-in-out" />
              <p>
                info@appeel.io
              </p>
            </NuxtLink>
            <NuxtLink
              to="tel:+32495741421"
              rel="noreferrer noopener"
              class="flex items-center gap-2 group py-1"
            >
              <Icon name="material-symbols:phone-iphone-outline" size="18" class="group-hover:text-teal duration-200 ease-in-out" />
              <p>
                +32 495 74 14 21
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
      <p class="md:text-center pt-6">
        {{ `©${new Date().getFullYear()} Appeel.io` }}
      </p>
    </div>
  </footer>
</template>
