<template>
    <div ref="searchMain">
        fffffff
        <hr>
        <button @click="togglePanel">点击</button>
        <div v-show="visible" ref="main" style="border:1px solid red;">弹出层</div>
    </div>
</template>

<script>
    export default {
        name: "document",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            // 点击空白区域关闭某个div图层
            togglePanel() {
                this.visible ? this.hide() : this.show()
            },
            show() {
                this.visible = true;
                document.addEventListener('click', this.hidePanel, false)
            },

            hide() {
                this.visible = false;
                document.removeEventListener('click', this.hidePanel, false)
            },

            hidePanel(e) {
                if (!this.$refs.searchMain.contains(e.target)) {
                    this.hide();
                }
            }
        }
    }
</script>

<style scoped>

</style>