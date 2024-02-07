<template>
  <el-descriptions border :column="1">
    <template #title>
      <div class="flex justify-between items-center w-[21.5rem]">
        <span class="text-sm text-gray-600">Datos Básicos</span>
        <div class="cursor-pointer">
          <el-button circle class="!p-0" @click="$emit('edit', 'student')">
            <el-icon size="1rem">
              <Icon icon="tabler:edit" />
            </el-icon>
          </el-button>
        </div>
      </div>
    </template>
    <el-descriptions-item>
      <template #label>
        <el-icon size="1.2rem">
          <Icon icon="tabler:number" />
        </el-icon>
      </template>
      <div class="w-[17rem] line-clamp-1">{{ student.id || $auth.user.id }}</div>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon size="1.2rem">
          <Icon icon="tabler:id" />
        </el-icon>
      </template>
      {{ student.cedula || "N/D" }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon size="1.2rem">
          <Icon icon="fa:intersex" />
        </el-icon>
      </template>
      {{ student.genre || "N/D" }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue"
import useProfile from "../../services/ProfileService";
const { student, getStudent } = useProfile();

onBeforeMount(async () => {
  await getStudent();
})
</script>