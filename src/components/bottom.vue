<template>
    <div>
        <div v-if="kk === '1'">
            <goodsList :goodsId="1"></goodsList>
        </div>
        <div v-else-if="kk === '2'">
            <goodsList :goodsId="2"></goodsList>
        </div>
        <div v-else-if="kk === '3'">
            <goodsList :goodsId="3"></goodsList>
        </div>
        <div v-else-if="kk === '4'">
            <goodsList :goodsId="4"></goodsList>
        </div>
        <div v-else>
            <goodsList :goodsId="0"></goodsList>
        </div>
    </div>
</template>

<script>
import msg from './msg.js'
import goodsList from './goodsList'
export default {
    components: { goodsList },
    data() {
        return {
            kk: 0
        }
    },
    mounted() {
        let _this = this //this指向当前vue组件
        msg.$on('val', function(m) {
            // this.kk 是取不到的，因为on事件里面的this,指向调用其的对象on/msg，其找不到kk属性，所以需要将this改变指向性
            _this.kk = m
        })
    }
}
</script>