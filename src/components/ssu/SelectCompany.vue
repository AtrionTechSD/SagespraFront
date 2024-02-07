<template>
    Selección de empresa
</template>

<script setup lang="ts">

import { onBeforeMount } from "vue";
import useCompany from "../../services/management/CompanyService"
const { companies, getCompanies } = useCompany();
const emit = defineEmits(['nextStep'])
onBeforeMount(async () => {
    await getCompanies();
    console.log(companies.value)
})
</script>