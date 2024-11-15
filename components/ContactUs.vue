<template>
     <div id="contact" class="w-full px-[12%] mt-0 py-10 scroll-mt-20 bg-[#fefdff] bg-center">
        <!-- <h4 class="text-center mb-2 text-lg">Conect with me</h4> -->
        <h2 class="text-center text-3xl">Send us a Message</h2>
        <!-- <p class="text-center max-w-2xl mx-auto mt-5 mb-12">I'd love to hear from you! if you have any questions, comments or feedback, please use the form below.</p> -->

        <form @submit.prevent="submitForm" class="max-w-2xl mx-auto ">
            <div class="grid grid-cols-auto gap-6 mt-10 mb-8 ">
                <input type="text" placeholder="Enter your name" name="name" class="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" required v-model="form.name">

                <input type="email" placeholder="Enter your email" name="email" class="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" required v-model="form.email">
            </div>
            <textarea name="message" id="" rows="6" placeholder="Enter your message" class="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6" required v-model="form.message">

            </textarea>
            <button type="submit" class="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">Submit now 
                <img src="/images/icons8-right-arrow-64.png" alt="" class="w-4">
            </button>
        </form>
     </div>
</template>




<script setup>
const form = ref({
  access_key: "b8b78f65-a97c-444a-9612-ff12e080359b",
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  message: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  try {
    status.value = "loading";
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form.value,
    });
    console.log(response);
    result.value = response.message;
    if (response.status === 200) {
      status.value = "success";
    } else {
      console.log(response); // Log for debugging, can be removed
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";

    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>