<template>
    <div>
        <SearchBar />
        <div class="grid-container" >
            <MovieCard v-for="movie in moviesList" class="grid-item" :key="movie.id" :details="movie" :genres-list="genresList" />
        </div>
        <Pagination :range="range" @goToPreviousPage="goToPreviousPage" @goToNextPage="goToNextPage"/>
    </div>
</template>

<script>
export default {
    name: 'index page',
    data(){
        return {
            moviesList: [],
            page: 1,
            genresList: []
        }
    },
    computed: {
        range() {
            return [(this.page - 1) * 20 + 1 , (this.page - 1) * 20 + this.moviesList.length]
        }
    },
    methods: {
        async goToPreviousPage() {
            if(this.page > 1 ){
                this.page = this.page - 1
                this.moviesList = await useMoviesList(this.page)
            }
        },
        async goToNextPage() {
            this.page = this.page + 1
            this.moviesList = await useMoviesList(this.page)
        }
    },

    async mounted(){
        this.moviesList = await useMoviesList(this.page)
        this.genresList = await useGenresList()
    }    
}
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3rem
}

</style>