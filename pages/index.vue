<template>
    <div>
        <SearchBar :dateRange="dateRange" @search="search"/>
        <div class="grid-container">
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
            page:  Number(this.$route.query.page) || 1,
            dateRange: { release_start_date: this.$route.query.release_start_date, release_end_date: this.$route.query.release_end_date },
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
                await this.$router.push({path: this.$route.path, query: { ...this.$route.query, page: this.page }})
                this.moviesList = await useMoviesList(this.$route.query)
            }
        },
        async goToNextPage() {
            this.page = this.page + 1
            await this.$router.push({path: this.$route.path, query: { ...this.$route.query, page: this.page }})
            this.moviesList = await useMoviesList(this.$route.query)
        },
        async search(dateRange) {
            this.dateRange = dateRange;
            this.page = 1;
            await this.$router.push({path: this.$route.path, query: { ...this.$route.query, page: this.page, ...this.dateRange }})
            this.moviesList = await useMoviesList(this.$route.query)
        }
    },
    async mounted(){
        this.moviesList = await useMoviesList(this.$route.query)
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