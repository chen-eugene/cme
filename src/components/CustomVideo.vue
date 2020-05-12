<template>
    <div class="custom-video">
        <video ref="video" class="custom-video_video" autoplay muted>
            <source :src="source" type="video/mp4">
        </video>
        <img v-if="videoState.play"
             class="custom-video_play custom-video_play-pause iconfont icon-zanting"
             src="../assets/ic_play.png"
             alt=""
             @click="pause('btn')"/>
        <img v-else
             class="custom-video_play custom-video_play-play iconfont icon-bofang"
             src="../assets/ic_pause.png"
             alt=""
             @click="play('btn')"/>
    </div>
</template>

<script>
    export default {
        name: "CustomVideo",
        data() {
            return {
                videoState: {
                    play: true, //播放状态
                    playState: true,
                },
                videoDom: null, // video
            }
        },
        props: {
            source: {
                type: String,
                default: ""
            },
            videoWidth: {
                type: String,
                default: ""
            }
        },
        methods: {
            play(flag) { // 播放按钮事件
                if (flag) this.videoState.playState = true;
                this.videoState.play = true;
                this.videoDom.play()
            },
            pause(flag) { // 暂停按钮事件
                if (flag) this.videoState.playState = false;
                this.videoDom.pause();
                this.videoState.play = false
            },
        },
        mounted() {
            this.videoDom = this.$refs["video"]
        }
    }
</script>

<style scoped lang="less">
    .custom-video {
        position: relative;

        .custom-video_video {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }

        .custom-video_play {
            display: inline-block;
            position: absolute;
            top: calc(50% - 25px);
            left: calc(50% - 25px);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 30px;
            color: #1575be;

            &:hover {
                box-shadow: 0 0 10px #5A4180;
                transition: all 0.4s;
            }
        }

        .custom-video_play-pause {
            display: none;
        }

        &:hover > .custom-video_play-pause {
            cursor: pointer;
            display: inline-block;
        }
    }
</style>
