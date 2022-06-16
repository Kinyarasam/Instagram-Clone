<template>
    <div>
        <div class="grid grid-cols-2 gap-5">
            <div class="pt-8 scrollbar h-screen">
                <div class="py-2 bg-white border shadow-xs rounded-xl w-[450px]">
                    <div class="overflow-x-scroll scrollbar scrollbar-thumb-rounded flex items-center px-2">
                        <div
                            class=""
                            v-for="(names, i) in name" 
                            :key="i"
                        
                        >
                            <div class="m-2 flex flex-col items-center">
                                <div class="flex items-center overflow-hidden justify-center p-8 border-2 border-t-purple-600/70 border-x-rose-500/70 border-b-yellow-400/70 w-16 h-16 rounded-full">
                                    <div class="text-white w-14 border-teal-900 flex items-center justify-center h-14 p-4 bg-teal-900 rounded-full  ">
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
                <div 
                    v-for="(post, i) in posts"
                    :key="i"
                >
                    <div class="mt-5 bg-white border rounded-xl">
                        <div class="flex p-3 items-center border-b rounded-b-xl">
                            <div class="w-8 h-8 border overflow-hidden rounded-full">
                                <img 
                                    src="" 
                                    alt="">
                            </div>
                            {{ post.header }}
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
            </div>
            <div class="pt-8 mr-16">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="cursor-pointer overflow-hidden w-16 h-16 rounded-full p-2 border-2 border-t-purple-500/80 border-x-rose-500/80 border-b-yellow-600/80">
                            <img
                                src="" 
                                alt="PROFILE LOGO">
                        </div>
                        <div class="mx-4 text-sm">
                            <div class="font-semibold">kinyarasam</div>
                            <div class="text-gray-400">Sam.G.K</div>
                        </div>
                    </div>
                    <div class="text-xs text-blue-400 font-semibold cursor-pointer">Switch</div>
                </div>
                <div class="my-4">
                    <div class="flex justify-between font-semibold items-center">
                        <div class="text-gray-500">
                            Suggestions For You
                        </div>
                        <div class="text-xs cursor-pointer">
                            See All
                        </div>
                    </div>
                </div>
            </div>
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
            ],
            posts: [
                {header: 'POST HEAD', caption: 'POST CAPTIONS', likes: 200},
                {header: 'POST HEAD', caption: 'POST CAPTIONS', likes: 200},
                {header: 'POST HEAD', caption: 'POST CAPTIONS', likes: 200},
                {header: 'POST HEAD', caption: 'POST CAPTIONS', likes: 200},
                {header: 'POST HEAD', caption: 'POST CAPTIONS', likes: 200},
            ]
        }
    }

}
</script>

<style>

</style>