<template>
    <div class="contact">
        <div class="map-wrapper" ref="bmap" id="bmap">
            <div class="map-loading" v-if="mapLoading">
                <i class="iconfont icon-load"></i>
                <span>地图加载中...</span>
            </div>
        </div>

        <div class="aboutus">
            <div class="header">联系我们</div>
            <div class="email">电子邮箱: 912392193@dwd.com</div>
            <div class="tel">企业电话: 16237899231</div>
        </div>
    </div>
</template>
<script>
    const baiduMapSDK = 'https://api.map.baidu.com/api?v=3.0&ak=BLjtCDqfyezMr8t52SlF5vYGftHwAGpE&callback=onBMapCallback'

    export default {
        name: 'contact',

        data () {
            return {
                mapLoading: true,
                map: null,
                coordinate: {
                    x: 106.529826,
                    y: 29.580935
                },
                point: null,
            }
        },

        created () {
            this.baiduMapLoad().then(() => {
                this.mapLoading = false
                
                // 渲染地图
                this.renderMap()
            })
        },

        methods: {
            // 动态加载百度地图
            baiduMapLoad () {
                if (typeof window.BMap !== 'undefined') return Promise.resolve(window.BMap)
                var script = document.createElement('script')
                script.src = baiduMapSDK
                script.type = 'text/javascript'
                script.setAttribute('id', 'baiduMap')
                document.head.appendChild(script)
                return new Promise(resolve => {
                    window.onBMapCallback = () => {
                        resolve(window.BMap)
                    }
                })
            },

            // 渲染地图
            renderMap () {
                this.map = new window.BMap.Map('bmap')
                this.point = new window.BMap.Point(this.coordinate.x, this.coordinate.y)
                // 创建坐标系及几何中心点
                this.map.centerAndZoom(this.point, 12)

                // 添加地图控件
                this.renderMapCtl()
                const maker = new window.BMap.Marker(this.point)
                this.map.addOverlay(maker)
            },

            renderMapCtl () {
                this.map.addControl(new window.BMap.NavigationControl())
                this.map.addControl(new window.BMap.ScaleControl())
                this.map.addControl(new window.BMap.OverviewMapControl())
                // this.map.addControl(new BMap.MapTypeControl());
                // this.map.setCurrentCity('重庆')
            },
        }
    }
</script>
<style lang="less">
    .contact {
        padding: 30px;

        .map-wrapper {
            height: 600px;
            width: 100%;
            margin: 0 auto;
            border: 1px solid #eee;
            background-color: #F8F8F8;
        }

        .aboutus {
            text-align: left;
            margin-top: 30px;

            .header {
                font-size: 20px;
                font-weight: bold;
                margin: 20px 0px;
            }


        }
    }
</style>