<template>
    <div class="movie-details-header">
        <div class="d-flex flex-row justify-content-start my-5 py-4 px-5 bg-gray-400 rounded-2">
            <div class="my-auto">
                
                    <BaseButton @click="$router.back()"><img src="/icons/arrow-left.svg"> Back</BaseButton>
            </div>
            <div class="d-flex flex-column mx-5 fs-3">
                <div class="fw-bold">{{ title }}</div>
                <div class="">{{ tagline }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieDetailsHeader',
    props: {
        title: {
            type: String,
        },
        tagline: {
            type: String
        }
    }
}
</script>