<template>
    <div class="pagination d-flex flex-column">
        <div class="mx-auto my-3 d-flex flex-row">
            <div @click="$emit('goToPreviousPage')" class="cursor-pointer">Previous Page</div>
            <div @click="$emit('goToNextPage')" class="border-start border-gray-600 ms-3 ps-3 cursor-pointer">Next Page</div>
        </div>
        <div class="mx-auto text-gray-550">Showing results <span>{{ range[0] }}</span>-<span>{{ range[1] }}</span></div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        range: {
            type: Array
        }
    }
}
</script>