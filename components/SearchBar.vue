<template>
    <div class="search-bar">
        <div class="d-flex flex-row justify-content-between my-5 py-4 px-5 bg-gray-400 rounded-2">
            <div class="d-flex flex-row my-auto">
                <div class="mx-3">Search by release date:</div>
                <input v-model="release_start_date" type="date" class="border border-gray-300">
                <input v-model="release_end_date" type="date" class="border border-gray-300">
            </div>
            <div class="my-auto">
                <BaseButton @click="search">Search</BaseButton>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        dateRange: {
            type: Object
        }
    },
    data() {
        return {
            release_start_date: this.dateRange.release_start_date,
            release_end_date: this.dateRange.release_end_date
        }
    },
    methods: {
        search() {
            this.$emit('search', { release_start_date: this.release_start_date, release_end_date: this.release_end_date })
        }
    }
}
</script>