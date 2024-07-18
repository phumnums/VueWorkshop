<template>
    <div class="pa-5">
        <v-btn color="primary" dark @click="sandData()">
            Click Me
        </v-btn>
        <v-dialog v-model="dialog" width="500">
            <v-card height="300">
                <Simple-Com :send_dialog="data_send_props"></Simple-Com>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import SimpleCom from '../components/SimpleCom.vue'
export default {
    components: {
        SimpleCom
    },
    data() {
        return {
            dialog: false,
            data_send_props: 'send value from Simple'
        }
    },
    methods: {
        sandData() {
            this.dialog = true
        }
    }
}
</script>

<style>

</style>