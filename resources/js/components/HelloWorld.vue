<template>
    <div>
        <h1 class="text-xl text-green-500">Hello World</h1>
        <p>The below button comes from the Flowbite component library. If this looks correct, we're good to go!!</p>
        <FwbButton color="default">Click Me</FwbButton>
    </div>
</template>

<script>
import {FwbButton} from "flowbite-vue";
export default {
    name: "HelloWorld",
    components: {
        FwbButton,
    }
}
</script>

<style scoped>

</style>
