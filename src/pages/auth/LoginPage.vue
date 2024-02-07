<template>
    <div class="w-screen min-w-[350px] h-screen bg-gray-100 flex items-center justify-center p-4 bg-center bg-cover relative"
        :style="{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/08/06/19/28/people-2595510_1280.jpg)'
        }">


        <div class="absolute top-0 left-0 w-full h-full  bg-gray-700 bg-opacity-60 blur-lg"></div>
        <div
            class="w-full h-[400px] bg-gray-100  max-w-xl rounded-xl shadow-xl relative overflow-hidden flex flex-col md:items-center md:flex-row md:bg-gray-50  ">
            <img src="@/assets/sagespra.png" alt="logo"
                class=" absolute top-2  transform  w-full max-w-xs left-1/2 -translate-x-1/2 md:max-w-full md:left-0 md:translate-x-0" />
            <div class="px-4 w-full h-2/3 pt-20 md:w-[53.5%] md:h-auto text-left flex items-center">
                <el-form @submit.prevent="login" :model="user" ref="formAuth" :rules="rules" label-position="top"
                    class="w-full max-w-xs mx-auto px-2 !py-8 text-lg">
                    <el-form-item label="Id de Usuario" prop="id">
                        <el-input size="large" type="number" v-model="user.id">
                            <template #prefix>
                                <el-icon class="el-input__icon" size="1.2rem">
                                    <Icon icon="tabler:id" />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Contraseña" prop="password">
                        <el-input show-password size="large" type="password" v-model="user.password">
                            <template #prefix>
                                <el-icon class="el-input__icon" size="1.2rem">
                                    <Icon icon="tabler:lock" />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-button @click="login" class="w-full">Acceder</el-button>
                    <input type="submit" class="hidden">
                </el-form>
            </div>
            <div class="w-full h-1/3  md:w-[46.5%] md:h-full bg-blue-900 flex items-center md:items-end justify-center p-4">
                <h1 class="font-bold text-xl lg:uppercase text-center lg:px-2 text-gray-200 transform md:-translate-y-1/3">
                    Accede al Sistema Automatizado para la Gestión del Servicio Social y
                    la Práctica Profesional
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '../../services/AuthService';
const { user, login, rules, formAuth } = useAuth();

</script>

