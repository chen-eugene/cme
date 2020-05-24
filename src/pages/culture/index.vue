<template>
    <div class="culture">
        <div class="route-content">
            <div class="culture-wapper clearfix">
                <div class="culture-item culture1">
                    <div class="culture-wrapper" @mouseenter="active1 = true" @mouseleave="active1 = false">
                        <div class="culture-title">企业愿景</div>
                        <div class="culture-slogan">智能制造、引领未来</div>

                        <transition name="fade">
                            <div class="culture-content" v-show="active1">
                                公司以市场为导向，以科技创新为核心驱动力，以解决制造企业痛点、难点问题为突破口，深入开展云计算、大数据、机器人、互联网+、人工智能、增材制造等新技术在工业制造中的应用研究。
                            </div>
                        </transition>
                    </div>
                </div>

                <div class="culture-item culture2">
                    <div class="culture-wrapper" @mouseenter="active2 = true" @mouseleave="active2 = false">
                        <div class="culture-title">经营理念</div>
                        <div class="culture-slogan">以市场为导向、以创新为动力</div>

                        <transition name="fade">
                            <div class="culture-content" v-show="active2">
                                公司在短短三年时间内将自身打造成集数字化高端装备制造与智能工厂系统集成服务于一体的高新技术企业，在工业机器人、智能物流、自动化成套装备、自动化生产线、信息化管控系统等方面形成了一定竞争优势。
                            </div>
                        </transition>
                    </div>
                </div>

                <div class="culture-item culture3">
                    <div class="culture-wrapper" @mouseenter="active3 = true" @mouseleave="active3 = false">
                        <div class="culture-title">企业精神</div>
                        <div class="culture-slogan">坚韧无畏，创新无限</div>
                        
                        <transition name="fade">
                            <div class="culture-content" v-show="active3">
                                坚韧,坚指牢固、坚固、强固有力而不易摧毁;坚韧指在遭遇身体及精神困难、压力时,坚持而不放弃的忍受力,即面对危险与灾难时精神的坚定、坚强的耐受力、勇气和后劲。无畏,指丝毫不害怕,没有恐惧感,勇往直前。创新是民族进步的灵魂,是企业发展的动力。无限,指没有边界、没有限制,永无止境。
                            </div>
                        </transition>
                    </div>
                </div>

                <div class="culture-item culture4">
                    <div class="culture-wrapper" @mouseenter="active4 = true" @mouseleave="active4 = false">
                        <div class="culture-title">公司使命</div>
                        <!-- <div class="culture-slogan">坚韧无畏，创新无限</div> -->

                        <transition name="fade">
                            <div class="culture-content" v-show="active4">
                                建立重庆智能制造创新平台，提高重庆企业智能制造水平，推动中国制造产业转型升级，引领中国智能制造产业发展。
                            </div>
                        </transition>
                    </div>
                </div>

                <div class="culture-item culture5">
                    <div class="culture-wrapper" @mouseenter="active5 = true" @mouseleave="active5 = false">
                        <div class="culture-title">发展理念</div>
                        <div class="culture-slogan">合作共赢，志在超越</div>

                        <transition name="fade">
                            <div class="culture-content" v-show="active5">
                                共克时艰，共赢商机。提振信心，携手共进。稳定市场，重在回访精心打理；长期经营，积累客户充分准备；追求卓越，挑战自我全力以赴。
                            </div>
                        </transition>
                    </div>
                </div>

                <div class="culture-item culture6">
                    <div class="culture-wrapper" @mouseenter="active6 = true" @mouseleave="active6 = false">
                        <div class="culture-title">发展目标</div>
                        <!-- <div class="culture-slogan">合作共赢，志在超越</div> -->

                        <transition name="fade">
                            <div class="culture-content" v-show="active6">
                                打造机电集团智能制造战略新兴板块领头羊。以系统集成项目为依托，带动核心产品和关键技术研发生产，整合优势资源，形成本部加多个子企业的“1+N”产业布局，实现重点行业智能制造新模式运营和重点领域智能装备及工业机器人的产业化应用，为用户提供智能化系统一站式解决方案和服务。
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            active6: false,
        }
    },
}
</script>
<style lang="less">
    .fade-enter-active {
        transition: all .3s ease;
    }
    .fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    .route-content {
        padding: 30px;
        width: 1190px;
        min-width: 1190px;
        background: #FFFFFF;
        margin: 30px auto;

        .culture-wapper {
            .culture-item {
                width: 33.33%;
                float: left;
                height: 370px;
                background-color: rgba(35,155,216,1);
                box-sizing: border-box;
                background-size: cover;
                background-position: center center;
                color: #FFFFFF;
                
                .culture-wrapper {
                    padding: 30px;
                    box-sizing: border-box;
                    height: 100%;
                    width: 100%;
                    background-color: rgba(35,155,216,0.1);
                }

                &.culture1 {
                    background-image: url(./images/culture1.png)
                }

                &.culture3 {
                    background-image: url(./images/culture2.png)
                }

                &.culture5 {
                    background-image: url(./images/culture3.png)
                }

                .culture-title {
                    font-weight: bold;
                    font-size: 16px;
                }

                .culture-slogan {
                    font-weight: bold;
                    font-size: 20px;
                    margin-top: 3px;
                }

                .culture-content {
                    text-indent: 2em;
                    font-size: 14px;
                    margin-top: 30px;
                    padding-bottom: 100px;
                    line-height: 1.7em;
                    font-weight: bold;
                }
            }
        }
    }
</style>