<template>
  <div>
    <MovieDetailsHeader :title="details.title" :tagline="details.tagline" />
    <MovieDetails :details="details" :credits="credits" />
  </div>
</template>


<script>
export default {
  name: 'Movie details',
  data() {
    return {
      details: {},
      credits: []
    }
  },
  async mounted(){
      this.details = await useMovieDetails(this.$route.params.id)
      this.credits = await useMoviesCredits(this.$route.params.id)
  } 
}
</script>

