<template>
    <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="bg-white shadow-lg rounded-md px-12 py-6">
      <h1 class="font-bold text-2xl my-5 text-center">Login</h1>
      <div class="py-4">
        <label for="name">
          <h2 class="font-medium mb-2">Your Username</h2>
          <InputText id="name" type="text" v-model="username" class="px-5 py-2 focus:scale-110 transition duration-100" placeholder="Username"/>
        </label>
      </div>
       <div class="py-4 mb-4">
        <label for="password">
          <h2 class="font-medium mb-2">Your Password</h2>
          <InputText id="password" type="password" v-model="password" class="px-5 py-2 focus:scale-110 transition duration-100" placeholder="Password"/>
        </label>
      </div>
       <Button type="submit" label="Log In" class="w-full py-3 text-inherit" @click="attemptLogin"></Button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Login',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
