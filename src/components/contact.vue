<template>
    <div class="contact" id="contact">
        <h2>联系方式 </h2>
        <ul>
            <li>
                <span><em class="fa fa-phone"></em>10086转人工服务</span>
                <span><em class="fa fa-qq"></em>漂流瓶联系</span>
            </li>
            <li>
                <span><em class="fa fa-envelope"></em>自动回复</span>
                <span><em class="fa  fa-facebook-square"></em>动态下留言</span>
            </li>
            <li>
                <span><em class="fa fa-skype"></em>视屏通话</span>
                <span><em class="fa  fa-wechat"></em>附近摇一摇</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'contact'
  }
</script>

<style scoped lang="less">
    .contact {
        width: 600px;
        padding: 20px 45px;
        background: #ffffffa7;
        margin: 0 15%;

        ul li {
            display: flex;
            justify-content: space-between;

            span {
                text-align: left;
                width: 200px;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .contact {
            width: 90%;
            padding: 20px 15px;
            margin: 0 auto;

            ul {
                li {
                    display: block;

                    span {
                        width: 100%;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {

    }
</style>
