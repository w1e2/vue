<template>
    <div>
        <ul class="goodsList">
            <li v-for="(goods,index) in list" v-bind:key="index">
                <img v-bind:src="goods.goodsImg">
                <p>{{goods.goodsName}}</p>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props: {
        goodsId: Number
    },
    data() {
        var _this = this
        var url = ""
        if (_this.goodsId === 1) {
            url = "json/bjb.json"
        } else if (_this.goodsId === 2) {
            url = "json/sj.json"
        } else {
            url = "json/bjb.json"
        }
        _this.$http.get(url).then((res) => {
            _this.list = res.data
        })
        return {
            list: []
        }
    },
    watch: {
        goodsId() {
            var _this = this
            var url = ""
            if (_this.goodsId === 1) {
                url = "json/bjb.json"
            } else if (_this.goodsId === 2) {
                url = "json/sj.json"
            }
            _this.$http.get(url).then((res) => {
                _this.list = res.data
            })
            return {
                list: []
            }
        }
    }
}
</script>

<style>
.goodsList li{
    width: 200px;
    height: 200px;
    list-style: none;
    float: left;
    font-size: 12px;
    color: red;
    margin-bottom: 30px;
}
.goodsList img {
    width: 180px;
    height: 180px;
}
</style>

