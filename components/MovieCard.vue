<template>
    <NuxtLink :to="`/movie/${details.id}`">
        <div class="movie-card d-flex flex-row bg-gray-100 rounded-2 p-1 border border-gray-500">
            <div class="image-container">
                <img :src="`${imagesURL}${details.poster_path}`" :alt="details.original_title + ' poster'" class="rounded-2"/>
            </div>
            <div class="d-flex flex-column justify-content-between px-2 py-3">
                <h4 class="fw-bold">{{ details.original_title }}</h4>
                <div>
                    <div class="d-flex flex-row">
                        <img src="/icons/calendar.svg">
                        <h6 class="text-gray-900 my-auto mx-1">{{ details.release_date }}</h6>
                    </div>
                    <div class="mt-1">
                        <span v-for="(genreId,index) in details.genre_ids" :key="genreId">
                            <span class="mx-1 fs-6">{{ genreComputed(genreId) }}</span><img v-if="details.genre_ids.length !== index + 1" class="mx-1" src="/icons/dot.svg" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        details: {
            type: Object,
        },
        genresList: {
            type: Array
        }
    },
    methods: {
        genreComputed (id) {
            return this.genresList.find(item => item.id === id)?.name
        }
    },
    data() {
        return {
            imagesURL : 'https://image.tmdb.org/t/p/w200'
        }
    }
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: unset;
}
.movie-card{
    width: 295px;
    height: 195px;
    .image-container{
        min-width: 128px;
        overflow: hidden;
        img {
            width: 128px;
            height: 189px;
        }
    }
}
</style>