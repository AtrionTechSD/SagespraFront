<template>
    <div class="w-full max-w-sm shadow-xl rounded-lg bg-white p-4 ">
        <h1 class="text-center uppercase font-bold my-4 md:text-xl">Actualizar información</h1>
        <hr class="py-2">
        <el-form :model="info" @submit.prevent="onSubmit" label-position="top" :rules="infoStudentValidations"
            ref="formInfo">
            <div class="grid grid-cols-6 gap-2">
                <el-form-item prop="name" label="Nombre Completo" class="!col-span-6">
                    <el-input size="large" v-model="info.name" type="text"
                        placeholder="Ingrese nombre y apellido"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="Teléfono" class="!col-span-2">
                    <el-input size="large" v-model="info.phone" type="number" placeholder="Sin guiones"></el-input>
                </el-form-item>
                <el-form-item size="large" prop="email" label="Correo Electrónico" class="!col-span-4">
                    <el-input v-model="info.email" type="email" placeholder="user@example.com"></el-input>
                </el-form-item>
                <el-form-item prop="address" label="Dirección" class="!col-span-6">
                    <el-input v-model="info.address" type="textarea" placeholder="Calle / Nº. / Sector" :min-rows="2"
                        resize="none"></el-input>
                </el-form-item>
                <el-form-item label="Provincia" class="!col-span-3">
                    <el-select filterable size="large" @change="onSelectProvince" v-model="province_id"
                        placeholder="Seleccione una provincia">
                        <el-option v-for="(province, index) in provinces" :key="index" :value="province.id"
                            :label="province.name" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Municipio" class="!col-span-3">
                    <el-select filterable size="large" v-model="info.municipe_id" prop="municipe_id"
                        placeholder="Seleccione un municipio">
                        <el-option v-for="(municipe, index) in municipes" :key="index" :value="municipe.id"
                            :label="municipe.name" />
                    </el-select>
                </el-form-item>
                <el-button size="large" @click="onSubmit" class="w-full !col-span-6">Actualizar</el-button>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import useProfile from "../../services/ProfileService";
const { info, saveInfo, getInfo, formInfo, infoStudentValidations, provinces, getProvinces } = useProfile();
const emit = defineEmits(["updateInfo"]);
const province_id = ref(null)
const municipes: Ref<any[]> = ref([])

const onSelectProvince = (prov: any) => {
    const currentProv = provinces.value.find(p => p.id == prov);
    if (currentProv) {
        info.value.municipe_id = null;
        municipes.value = currentProv.municipes!;
    }
}
onBeforeMount(async () => {
    await getInfo();
    await getProvinces();
    if (info.value?.id) {
        municipes.value = [{ name: info.value.municipes?.name, id: info.value.municipes?.id }]
    }
})

const onSubmit = async () => {
    const saved = await saveInfo();
    if (saved) {
        emit("updateInfo")
    }
}

</script>