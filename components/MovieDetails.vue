<template>
    <div class="movie-details">
        <div class="d-flex flex-row">
            <div class="image-container" v-if="details.poster_path">
                <img :src="`${imagesURL}${details.poster_path}`" :alt="details.original_title + ' poster'" class="rounded-3"/>
            </div>
            <div class="w-100 mx-4 p-3">
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">Budget</span>
                    <span class="text-black-400">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(details.budget) }}</span>
                </div>
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">Revenue</span>
                    <span class="text-black-400">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(details.revenue) }}</span>
                </div>
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">Release Date</span>
                    <span class="text-black-400">{{ details.release_date }}</span>
                </div>
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">Runtime</span>
                    <span class="text-black-400">{{ Math.floor(details.runtime / 60) }}h {{ Math.floor(details.runtime % 60) }}m</span>
                </div>
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">Score</span>
                    <span class="text-black-400">{{ details.vote_average }} <span class="fs-5">({{ details.vote_count }} votes)</span></span>
                </div>
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">Genres</span>
                    <span class="text-black-400"><span v-for="(genre, index) of details.genres" :key="genre.name">{{ genre.name }}<span v-if="index < details.genres.length - 1">, </span></span></span>
                </div>
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">IMDB Link</span>
                    <span class="text-black-400"><a target="_blank" :href="`https://www.imdb.com/title/${details.imdb_id}`">Link</a></span>
                </div>
                <div class="d-flex flex-row justify-content-between py-2">
                    <span class="fw-bold">Homepage Link</span>
                    <span class="text-black-400"><a target="_blank" :href="details.homepage">Link</a></span>
                </div>
            </div>
        </div>
        <div class="my-5 text-black-500">{{ details.overview }}</div>
        <div class="my-5 text-black-500">
            <div class="text-black fs-3 fw-bold">Credit:</div>
            <span class="fs-5">
                <span v-for="(person, index) in cast.slice(0, numberOfCastToShow)" :key="person">{{ person.name }}<span v-if="index < cast.slice(0, numberOfCastToShow).length - 1">, </span></span><span v-if="cast.length > numberOfCastToShow"> and {{cast.length - numberOfCastToShow}} more</span>.
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieDetails',
    props: {
        details: {
            type: Object
        },
        credits: {
            type: Object
        }
    },
    computed: {
        cast() {
            if (this.credits.cast) {
                return this.credits.cast.sort((a,b) => {
                if(a.popularity < b.popularity) return 1;
                if(a.popularity > b.popularity) return -1;
                return 0;
            });
            } else {
                return []
            }
        }
    },
    data() {
        return {
            imagesURL : 'https://image.tmdb.org/t/p/w400',
            numberOfCastToShow: 10
        }
    }
}
</script>



<style lang="scss" scoped>
    .image-container{
        min-width: 330px;
        overflow: hidden;
        img {
            width: 330px;
        }
    }
</style>