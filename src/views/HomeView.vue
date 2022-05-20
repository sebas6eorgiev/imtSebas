<template>
    <div class="padre">
        <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    }
}
</script>
