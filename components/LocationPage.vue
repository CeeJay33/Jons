<template>
  <div class="min-h-screen flex items-center justify-center" id="location">
    <div class="w-full max-w-7xl p-6 bg-white rounded-lg ">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Contact Info -->
        <div>
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p class="text-gray-600 mb-6 text-sm">
            We'd love to hear from you. You can find us at our office or
            reach out via email or phone.
          </p>

          <!-- Location -->
          <div class="flex items-start space-x-4 mb-4">
            <div class="flex-shrink-0 p-2 bg-blue-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Our Location</h3>
              <p class="text-gray-600">17, Rufai Street, Off Shipelou, Shomolu Lagos</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start space-x-4 mb-4">
            <div class="flex-shrink-0 p-2 bg-red-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16v16H4z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Email Us</h3>
              <p class="text-gray-600">St.jonsworld@gmail.com</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start space-x-4 mb-4">
            <div class="flex-shrink-0 p-2 bg-green-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-2.92 19.51 19.51 0 0 1-6-6A19.78 19.78 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.13 12.13 0 0 0 .71 2.84 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.13 12.13 0 0 0 2.84.71A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Call Us</h3>
              <p class="text-gray-600">+2348181814007</p>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            class="w-full h-96 border-0 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8683067432935!2d3.365956474797972!3d6.538310422991459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbb250ef0ad%3A0x71aceac98f47db79!2sShipeolu%20St%20%26%20Rufai%20St%2C%20Somolu%2C%20Palmgrove%2FIjebutedo%20102216%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1727170063712!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
/* Add any additional styles here */
</style>
