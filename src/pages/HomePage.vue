<template>
    <p class="p-2">
    <div class=" max-w-4xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl  gap-x-4 gap-y-2">
        <el-card class="!rounded-xl !shadow-sm hover:!scale-[1.01] hover:!shadow-xl !cursor-pointer"
            v-for="section in sections" :key="section.title" :body-style="{ padding: '0px' }">
            <div class="border-b">
                <img :src="section.image" class="image" />
            </div>
            <div style="padding: 14px">
                <span class="font-bold uppercase">{{ section.title }}</span>
                <div class="bottom flex items-center justify-between">
                    <span>{{ section.subtitle }}</span>
                    <Icon icon="tabler:chevron-right" />
                </div>
            </div>
        </el-card>

    </div>
    </p>
</template>

<script setup lang="ts">

import sections from '../assets/sections';

</script>