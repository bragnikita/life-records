<template>
  <div class="max-w-xs mx-auto border-2 border-sky-600 p-5">
    <div>Sign In</div>
    <n-form :model="formValue">
      <n-form-item label="Login" path="login">
        <n-input v-model:value="formValue.login"/>
      </n-form-item>
      <n-form-item label="Password" path="password">
        <n-input type="password" v-model:value="formValue.password"/>
      </n-form-item>
    </n-form>
    <div>
      <n-button type="primary" @click="submit" >Submit</n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {reactive} from "vue";
import {useAppStore} from "../store";
import {useMessage} from "naive-ui";
import {useRouter} from "vue-router";

const store = useAppStore();
const message = useMessage();
const router = useRouter();

const formValue = reactive({
  login: '',
  password: '',
});

const submit = async () => {
  const result = await store.signIn(formValue.login, formValue.password)
  if (result) {
    await router.replace({name: 'posts_list'})
  } else {
    message.error('Wrong login/password pair', { duration: 3});
  }
}
</script>
<style></style>
