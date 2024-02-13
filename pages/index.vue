<template>
  <div>
    <h1>Choose your preference:</h1>
    <form @submit.prevent="handleSubmit" method="post">
      <input
        type="email"
        placeholder="Email"
        name="email"
        v-model="email"
        required
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        min="0"
        v-model="age"
        required
      />
      <select name="spice" id="spice" v-model="spiceLevel">
        <option value="" disabled selected>Select Your Spice Level</option>
        <option value="lemon-herb">Lemon-Herb</option>
        <option value="mild">Mild</option>
        <option value="hot">Hot</option>
        <option value="extra-hot">Extra Hot</option>
      </select>
      <button id="submit-btn">Submit</button>
    </form>
    <div
      v-if="message"
      :class="{ 'success-message': isSuccess, 'error-message': !isSuccess }"
    >
      {{ message }}
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const age = ref("");
const spiceLevel = ref("");
const message = ref("");
const isSuccess = ref(false);

async function handleSubmit() {
  const formData = {
    email: email.value,
    age: age.value,
    spiceLevel: spiceLevel.value,
  };

  try {
    const response = await fetch("http://localhost:3001/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    email.value = "";
    age.value = "";
    spiceLevel.value = "";
    message.value = "Request submitted successfully";
    isSuccess.value = true;
  } catch (error) {
    message.value = "Form submission failed";
    isSuccess.value = false;
    console.error("Error submitting form:", error);
  }
}

useHead({
  title: "Mongo DB Tester",
  meta: [
    {
      name: "description",
      content: "This is a playground for Sahil Maharaj to test MongoDB.",
    },
  ],
});
</script>

<style>
h1 {
  margin: 30px 0;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
}

label {
  margin-right: 15px;
}

input {
  width: 300px;
  font-family: inherit;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  margin-top: 10px;
  color: black;
}

input::placeholder {
  color: grey;
}

select {
  width: 300px;
  font-family: inherit;
  padding: 10px 15px;
  border: none;
  font-size: 16px;
  margin-top: 10px;
  color: black;
}

#submit-btn {
  margin-top: 10px;
  border: none;
  background: #e34;
  color: #fff;
  font-family: inherit;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 0;
  border-radius: 5px;
}

#submit-btn:hover {
  background: greenyellow;
  cursor: pointer;
}

.success-message {
  margin: 30px auto;
  padding: 10px;
  text-align: center;
  background-color: green;
  color: #fff;
  width: 300px;
  border-radius: 5px;
}
</style>
