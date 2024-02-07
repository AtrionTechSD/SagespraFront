<template>
    <div class="flex h-full flex-col justify-between items-end">
        <div class="w-full h-full  grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col">
                <el-descriptions border :column="1">
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
                <el-descriptions border :column="1">
                    <el-descriptions-item>
                        <template #label>
                            <el-icon size="1.2rem">
                                <Icon icon="tabler:school" />
                            </el-icon>
                        </template>
                        <div class="w-[17rem] line-clamp-1">{{ student.careers?.name || "N/D" }}</div>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <el-icon size="1.2rem">
                                <Icon icon="tabler:building-skyscraper" />
                            </el-icon>
                        </template>
                        {{ student.campus?.name || "N/D" }}
                    </el-descriptions-item>
                </el-descriptions>
            </div>
            <el-descriptions border :column="1">
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
        </div>
        <el-button :disabled="!isComplete" @click="$emit('nextStep')">
            Siguiente
        </el-button>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, computed } from "vue";
import useProfile from "../../services/ProfileService";
const { student, getStudent, info, getInfo } = useProfile();
const emit = defineEmits(["nextStep"])
const isComplete = computed(() => {
    return (
        Boolean(student.value.id) &&
        Boolean(student.value.careers) &&
        Boolean(student.value.campus)
    );
});
onBeforeMount(async () => {
    await getStudent();
    await getInfo();
    console.log(student.value);
});
</script>
