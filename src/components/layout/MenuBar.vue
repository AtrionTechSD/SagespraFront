<template>
    <section class="h-[3rem] md:h-[4rem] w-full bg-blue-900  overflow-hidden ">
        <div class="h-full flex justify-between items-center px-2 md:px-4  max-w-7xl mx-auto">
            <h1 class="font-bold uppercase text-lg md:text-xl flex space-x-2 text-gray-50">
                <span>Bienvenido(a)</span>
                <span class="hidden md:block"> a Sagespra</span>
            </h1>
            <el-menu class="el-menu-demo !border-none" mode="horizontal" :ellipsis="false"
                :default-active="$router.currentRoute.value.path" style="--active-color: #FF8400">
                <el-sub-menu v-for="link in getLinks()" :index="`${link.key}`" :key="link.key" placement="bottom-end">
                    <template #title>
                        <div class="flex items-center space-x-2 !text-gray-100">
                            <el-icon size="1.5rem">
                                <Icon :icon="link.icon" />
                            </el-icon>
                            <span class="hidden md:block">{{ link.label }}</span>
                        </div>
                    </template>
                    <el-menu-item @click="() => $router.replace(`${child.key}`)" v-for="child in link.children"
                        class="hover:!bg-[#FF8400] hover:!text-gray-100" :key="child.key" :index="`${child.key}`">
                        <div class="flex items-center space-x-2 ">
                            <el-icon size="1.2rem">
                                <Icon :icon="child.icon" />
                            </el-icon>
                            <span>{{ child.label }}</span>
                        </div>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>

        </div>

        <div class="size-8  fixed bottom-4 right-3 " v-if="$auth.user.real_role_id == IUserRole.admin">
            <el-dropdown>
                <el-button circle size="large" class="!z-[9999]">
                    <el-icon size="1.2rem">
                        <Icon icon="tabler:switch-3" />
                    </el-icon>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item class="capitalize" v-for="(role, ind) in getRoles()" :key="ind"
                            @click="switchRole(ind + 1)">
                            <span :class="$auth.user.role_id == (ind + 1) ? '!text-[#FF8400] font-bold' : ''">
                                {{ role }}
                            </span>
                        </el-dropdown-item>
                        <el-dropdown-item divided>Ver como</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>

    </section>
</template>

<script setup lang="ts">
import participanteLinks from "../../routes/links/ParticipanteLinks";
import adminLinks from "../../routes/links/AdminLinks";
import directorLinks from "../../routes/links/DirectorLinks";
import { authStore } from "../../stores/authStore";
import { IUserRole } from "../../data/models/User";


const getLinks = () => {
    const role_id = authStore().user.role_id;
    switch (role_id) {
        case 1:
            return adminLinks;
        case 2:
            return directorLinks;
        default:
            return participanteLinks;
    }
}

const getRoles = () => {
    return Object.keys(IUserRole).filter((k) => isNaN(Number(k)))
}

const switchRole = (role_id: number) => {
    authStore().setFakeRole(role_id);
}

</script>