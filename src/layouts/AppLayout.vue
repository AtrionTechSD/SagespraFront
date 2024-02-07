<template>
    <el-container class="bg-gray-100 !h-dvh">
        <el-header class="!h-[7rem] md:!h-[10rem] !p-0 sticky top-0">
            <HeaderBar />
            <MenuBar />
        </el-header>
        <el-main class="!h-full !max-h-[calc(100vh-7rem)] !md:max-h-[calc(100vh-10rem)] !p-0">
            <div class=" max-w-7xl mx-auto p-4 h-full w-full bg-gray-50">
                <router-view />
            </div>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
</script>