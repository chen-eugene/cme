<template>
    <transition>
        <div class="toast">
      <p>
        {{message}}
      </p>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'niu-toast'
    }
</script>

<style scoped lang="less">
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6.24rem;
        text-align: center;
        z-index: 9999;
        p {
            padding: 0.24rem 0.85rem 0.2rem 0.85rem;
            font-size: 0.28rem;
            color: #ffffff;
            border-radius: 0.16rem;
            background: rgba(0, 0, 0, 0.64);
            max-width: 7.2rem;
        }
    }
</style>
