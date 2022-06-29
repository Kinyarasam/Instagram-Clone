<template>
    <div>
        <div class="grid grid-cols-2 gap-5">
            <div class="pt-8 scrollbar h-screen w-[450px]">
                <div class="py-2 bg-white border shadow-xs rounded-xl ">
                    <div class="overflow-x-scroll scrollbar scrollbar-thumb-rounded flex items-center px-2">
                        <div
                            class=""
                            v-for="(names, i) in name" 
                            :key="i"
                        
                        >
                            <div class="m-2 flex flex-col items-center">
                                <div class="hover:cursor-pointer flex items-center overflow-hidden justify-center p-8 border-2 border-t-purple-600/70 border-x-rose-500/70 border-b-yellow-400/70 w-16 h-16 rounded-full">
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
                <div class="mb-[120px]">
                    <div 
                        v-for="(post, i) in posts"
                        :key="i"
                    >
                        <div class="mt-5 bg-white border rounded-xl">
                            <div class="flex p-3 justify-between border-b rounded-b-xl">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 border overflow-hidden rounded-full">
                                        <img 
                                            src="" 
                                            alt="">
                                    </div>
                                    <div class="mx-3">
                                        <div class="font-semibold">
                                            {{ post.header }}
                                        </div>
                                        <div class="text-xs text-[#535353]">
                                            {{ post.username }}
                                        </div>
                                    </div>
    
                                </div>
                                <div>
                                    <span class="material-icons">more_horiz</span>
                                </div>
                            </div>
                            <div class="h-[400px] border">
                                <img
                                    class="h-full w-full" 
                                    src="" 
                                    alt="POST BODY"
                                >
                            </div>
                            <div class="p-3">
                                <div class="flex justify-between">
                                    <div>
                                        <div>
                                            <span class="material-icons">
                                                favorite_outline
                                            </span>
                                        </div>
                                        <div class="mx-2">
                                            <span class="material-icons">comment</span>
                                        </div>
                                        <div>
                                            <span class="material-icons">send_outline</span>
                                        </div>
                                    </div>
                                    <span class="material-icons">bookmark_outline</span>
                                </div>
                                <div class="flex items-center">
                                    <div class=" my-2 p-2.5 w-4 h-4 bg-red-900 flex rounded-full"></div> 
                                    <div class="mx-2 text-sm">
                                        Liked by ... and {{ post.likes }} others
                                    </div>
                                </div>
                                <!-- TODO: Add the caption section here -->
                                <div class="text-[13.5px] my-2 max-h-10 scrollbar overflow-y-scroll">
                                    <span class="font-medium">{{post.username}}</span> {{ post.post }}
                                </div>
                                <!-- TODO: Add the comments section here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-10 mr-16">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="cursor-pointer overflow-hidden w-16 h-16 rounded-full p-2 border-2 border-t-purple-500/80 border-x-rose-500/80 border-b-yellow-600/80">
                            <img
                                src="" 
                                alt="PROFILE LOGO">
                        </div>
                        <div class="mx-4 text-sm">
                            <div class="font-semibold cursor-pointer">kinyarasam</div>
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
                    <div class="mt-1">
                        <div 
                            v-for="(recom, i) in recommendations"
                            :key="i"
                        >
                            <div class="flex justify-between items-center my-2">
                                <div class="flex items-center">
                                    <div class="bg-black p-4 w-6 h-6 rounded-full overflow-hidden cursor-pointer"></div>
                                    <div class="mx-3 ">
                                        <div class="font-semibold text-sm hover:underline cursor-pointer flex">{{ recom.username }}</div>
                                        <div class="text-xs text-gray-500">{{ recom.follows}}</div>
                                    </div>
                                </div>
                                <div>
                                    <span class="cursor-pointer text-blue-400 text-xs font-semibold">Follow</span>
                                </div>
                            </div>
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
            recommendations: [
                {image: 'url', username: 'Random Person', follows: 'Follows you', followBack: 'Follow'},
                {image: 'url', username: 'Person 2', follows: 'Followed by fri...', followBack: 'Follow'},
                {image: 'url', username: 'Person 3', follows: 'Followed by Vibes + 1 more', followBack: 'Follow'},
                {image: 'url', username: 'Person 4', follows: 'Follows you', followBack: 'Follow'},
                {image: 'url', username: 'Person 5', follows: 'Follows by Celest + 4 more', followBack: 'Follow'},
            ],
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
                {
                    header: 'POST 1',
                    username: 'username',
                    caption: 'POST CAPTIONS',
                    likes: 20,
                    tags: '',
                    post_image: '',
                    post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat labore, temporibus sapiente, eligendi corrupti fuga perferendis totam ducimus facilis veniam ab, consequatur libero molestiae? Quaerat cumque labore ratione voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat labore, temporibus sapiente, eligendi corrupti fuga perferendis totam ducimus facilis veniam ab, consequatur libero molestiae? Quaerat cumque labore ratione voluptatem.'
                },
                {
                    header: 'POST 2',
                    username: 'username',
                    caption: 'POST CAPTIONS',
                    likes: 5,
                    tags: '',
                    post_image: ''
                },
                {
                    header: 'POST 3',
                    username: 'username',
                    caption: 'POST CAPTIONS',
                    likes: 35,
                    tags: '',
                    post_image: '',
                    post: ''
                },
                {
                    header: 'POST 4',
                    username: 'username',
                    caption: 'POST CAPTIONS',
                    likes: 78,
                    tags: '',
                    post_image: '',
                    post: ''
                },
                {
                    header: 'POST 5',
                    username: 'username',
                    caption: 'POST CAPTIONS',
                    likes: '2K',
                    tags: '',
                    post_image: '',
                    post: ''
                },
            ]
        }
    }

}
</script>

<style>

</style>