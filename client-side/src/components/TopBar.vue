<template>
    <div class="p-2 pt-0 border-b">
        <div class="h-8">
            <div class="flex justify-between items-center">
                <div class="flex text-xs items-center text-light pt-1.5 cursor-default">
                    <div class="px-2 text-[#dddddd] font-light">
                        <span class="material-icons">arrow_back</span>
                    </div>
                    <div class="px-2 hover:bg-gray-200">
                        <span class="material-icons">cached</span>
                    </div>
                    <div class="px-2">Instagram</div>
                </div>
                <div>
                    <div>windows icons</div>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center mx-[150px] p-2 pb-0">
            <router-link to>
                <img 
                    src="../assets/Ig_name_logo.png" alt=""
                    class="h-12 bg-white cursor-pointer"
                >
            </router-link>
            <div class="bg-gray-200/50 flex items-center rounded-l overflow-hidden">
                <span class="material-icons p-1.5 pl-4">search</span>
                <input 
                    type="text"
                    placeholder="Search"
                    class="bg-gray-100 w-[200px] py-1.5 rounded-l font-light active:border-white"
                >
            </div>
            <div class="flex items-center">
                <div>
                    <span class="mx-2 material-icons">home</span>
                </div>
                <div>
                    <span class="mx-2 material-icons">chat</span>
                </div>
                <div>
                    <span class="mx-2 material-icons p border-2 border-black rounded">add</span>
                </div>
                <div>
                    <span class="mx-2 material-icons">explore</span>
                </div>
                <div>
                    <span class="mx-2 material-icons">favorite_border</span>
                </div>
                <div class="min-w-8 p-4 min-h-8 bg-teal-400 rounded-full">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>