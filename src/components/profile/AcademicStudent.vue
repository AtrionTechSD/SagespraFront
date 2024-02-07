<template>
    <el-descriptions border :column="1">
        <template #title>
            <div class="flex justify-between items-center w-[21.5rem]">
                <span class="text-sm text-gray-600">Información Académica</span>
                <div class="">
                    <div class="cursor-pointer">
                        <el-button circle class="!p-0" @click="$emit('edit', 'academic')" :disabled="!$auth.user.students">
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
                    <Icon icon="tabler:school" />
                </el-icon>
            </template>
            <div class="w-[17rem] line-clamp-1">{{ student.careers?.name || 'N/D' }}</div>
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <el-icon size="1.2rem">
                    <Icon icon="tabler:building-skyscraper" />
                </el-icon>
            </template>
            {{ student.campus?.name || 'N/D' }}
        </el-descriptions-item>

    </el-descriptions>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import useProfile from "../../services/ProfileService";
const { student, getStudent, } = useProfile();
onBeforeMount(async () => {
    await getStudent();
})


</script>