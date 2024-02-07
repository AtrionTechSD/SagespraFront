<template>
    <div class="w-full max-w-sm shadow-xl rounded-lg bg-white p-4 ">
        <h1 class="text-center uppercase font-bold my-4 md:text-xl">Actualizar información</h1>
        <hr class="py-2">
        <el-form :model="student" @submit.prevent="onSubmit" label-position="top" :rules="studentValidations"
            ref="formStudent">
            <div class="grid grid-cols-3 gap-x-2 gap-y-4">
                <el-form-item prop="cedula" label="Cédula/Pasaporte" class="!col-span-2">
                    <el-input v-model="student.cedula" type="text" placeholder="Sin guiones"></el-input>
                </el-form-item>
                <el-form-item prop="genre" label="Sexo" class="!col-span-1">
                    <el-select v-model="student.genre" placeholder="Sexo">
                        <el-option value="Masculino" />
                        <el-option value="Femenino" />
                    </el-select>
                </el-form-item>
                <el-button @click="onSubmit" class="w-full !col-span-3">Actualizar</el-button>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useProfile from "../../services/ProfileService";
const { student, saveStudent, studentValidations, formStudent, getStudent } = useProfile();
const emit = defineEmits(["updateStudent"]);

onMounted(async () => {
    await getStudent();
})

const onSubmit = async () => {
    const saved = await saveStudent();
    if (saved) {
        emit("updateStudent")
    }
}

</script>