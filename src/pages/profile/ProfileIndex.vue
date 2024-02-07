<template>
    <div class="flex h-full relative overflow-hidden " :key="key">

        <div class="w-full h-full max-w-sm bg-gray-100 p-3 rounded-xl overflow-y-auto">
            <fieldset class="border p-2 ">
                <legend class="px-2 font-bold text-gray-500">Información Personal</legend>
                <div class="grid grid-cols-1 gap-y-4">
                    <StudentView @edit="viewToEdit" />
                    <InfoStudent @edit="viewToEdit" />
                </div>
            </fieldset>
            <fieldset class="border p-2 ">
                <div class="grid grid-cols-1">
                    <AcademicStudent @edit="viewToEdit" />
                </div>
            </fieldset>
        </div>

        <div class="w-full h-full p-4 bg-gray-50 absolute md:relative flex items-center justify-center transform transition-all duration-500 ease-linear overflow-y-auto"
            :class="view2Edit == 'none' ? 'translate-x-[120%] md:translate-x-0' : 'translate-x-0'">
            <div class="cursor-pointer  absolute top-2 right-2" v-if="view2Edit !== 'none'">
                <el-icon @click="() => viewToEdit('none')">
                    <Icon icon="carbon:close-outline" />
                </el-icon>
            </div>
            <EditStudent v-if="view2Edit == 'student'" @updateStudent="updateData" />
            <EditInfoStudent v-else-if="view2Edit == 'info'" @updateInfo="updateData" />
            <EditAcademicStudent v-else-if="view2Edit == 'academic'" @updateAcademic="updateData" />
            <img v-else src="@/assets/sagespra.png" alt="Sagespra" class="w-4/5" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue"
const key: Ref<number> = ref(0)
const view2Edit = ref("none")
const viewToEdit = (view: string) => {
    view2Edit.value = view;
}

const updateData = () => {
    setTimeout(() => {
        key.value = key.value + 1;
        view2Edit.value = "none"
    }, 500);
}
</script>
