<template>
    <div>
        <div class="mt-5 grid grid-cols-2 gap-5">
            <div class="overflow-hidden overflow-y-scroll h-[600px]">
                <div class="py-2 bg-white border rounded-xl w-[450px]">
                    <div class="overflow-x-scroll scrollbar scrollbar-thumb-rounded flex items-center justify-center px-2">
                        <div
                            class=""
                            v-for="(names, i) in name" 
                            :key="i"
                        
                        >
                            <div class="m-2 flex flex-col items-center">
                                <div class="flex items-center overflow-hidden justify-center p-8 border-2 w-16 h-16 border-rose-500 rounded-full">
                                    <div class="">
                                        <img 
                                            src="" 
                                            :alt="`${names.src}`">
                                    </div>
                                </div>
                                <div class="text-xs">
                                    name
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5 bg-white border rounded-xl">
                    <div class="flex p-3 items-center border-b rounded-b-xl">
                        <div class="w-8 h-8 border overflow-hidden rounded-full">
                            <img 
                                src="" 
                                alt="">
                        </div>
                        posts Header
                    </div>
                    <div class="h-[400px] border">
                        <img
                            class="h-full w-full" 
                            src="" 
                            alt="POST BODY"
                        >
                    </div>
                </div>
            </div>
            <div class="py-2 bg-white border rounded-xl"></div>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            name: [
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
                {src: 'Hello There'},
            ]
        }
    }

}
</script>

<style>

</style>