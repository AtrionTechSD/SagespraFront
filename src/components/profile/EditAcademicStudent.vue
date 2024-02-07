<template>
    <div class="w-full max-w-sm shadow-xl rounded-lg bg-white p-4 ">
        <h1 class="text-center uppercase font-bold my-4 md:text-xl">Datos Académicos</h1>
        <hr class="py-2">
        <el-form :model="student" @submit.prevent="onSubmit" label-position="top">
            <div class="grid grid-cols-6 gap-2">

                <el-form-item label="Carrera" class="!col-span-3">
                    <el-select filterable size="large" v-model="student.career_id" placeholder="Seleccione una carrera">
                        <el-option v-for="(career, index) in careers" :key="index" :value="career.id"
                            :label="career.name" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Campus/Recinto" class="!col-span-3">
                    <el-select filterable size="large" v-model="student.campus_id" prop="campus_id"
                        placeholder="Seleccione un municipio">
                        <el-option v-for="(campu, index) in campus" :key="index" :value="campu.id" :label="campu.name" />
                    </el-select>
                </el-form-item>
                <el-button size="large" @click="onSubmit" class="w-full !col-span-6">Actualizar</el-button>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useProfile from "../../services/ProfileService";
const { student, getStudent, updateAcademic, careers, campus, loadAcademics } = useProfile();
const emit = defineEmits(["updateAcademic"]);

onMounted(async () => {
    await getStudent();
    await loadAcademics();
})

const onSubmit = async () => {
    const saved = await updateAcademic();
    if (saved) {
        emit("updateAcademic")
    }
}

</script>