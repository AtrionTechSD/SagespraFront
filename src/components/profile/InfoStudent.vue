<template>
    <el-descriptions border :column="1">
        <template #title>
            <div class="flex justify-between items-center w-[21.5rem]">
                <span class="text-sm text-gray-600">Datos de Contacto</span>
                <div class="">
                    <div class="cursor-pointer">
                        <el-button circle class="!p-0" @click="$emit('edit', 'info')" :disabled="!$auth.user.students">
                            <el-icon size="1rem">
                                <Icon icon="tabler:edit" />
                            </el-icon>
                        </el-button>
                    </div>
                </div>
            </div>
        </template>
        <el-descriptions-item>
            <template #label>
                <el-icon size="1.2rem">
                    <Icon icon="tabler:user" />
                </el-icon>
            </template>
            <div class="w-[17rem] line-clamp-1">{{ info?.name || "N/D" }}</div>
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <el-icon size="1.2rem">
                    <Icon icon="tabler:phone" />
                </el-icon>
            </template>
            {{ info?.phone || "N/D" }}
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <el-icon size="1.2rem">
                    <Icon icon="tabler:mail" />
                </el-icon>
            </template>

            {{ info?.email || "N/D" }}
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <el-icon size="1.2rem">
                    <Icon icon="tabler:map-pin" />
                </el-icon>
            </template>
            <div class="line-clamp-2 leading-4">
                {{ info?.address || "N/D" }}
            </div>
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <el-icon size="1.2rem">
                    <Icon icon="tabler:map" />
                </el-icon>
            </template>
            {{ info?.municipes?.name || "N/D" }}
        </el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import useProfile from "../../services/ProfileService"

const { info, getInfo } = useProfile();

onBeforeMount(async () => {
    await getInfo();

})

</script>