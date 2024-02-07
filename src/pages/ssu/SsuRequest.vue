<template>
    <div class="h-full  flex flex-col justify-between">
        <el-steps :active="active" finish-status="success" class="!h-14 ">
            <el-step>
                <template #title><span class="hidden md:block">Información Personal</span></template>
            </el-step>
            <el-step>
                <template #title><span class="hidden md:block">Selección de Empresa</span></template>
            </el-step>
            <el-step>
                <template #title><span class="hidden md:block">Descripción de Proyecto</span></template>
            </el-step>
            <el-step>
                <template #title><span class="hidden md:block">Enviar Solicitud</span></template>
            </el-step>
        </el-steps>

        <div class="h-full p-2 w-full ">
            <ProfileInfo @nextStep="next" v-if="active == 0" />
            <SelectCompany @nextStep="next" v-if="active == 1" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)

const next = () => {
    if (active.value++ > 3) active.value = 0
}
</script>