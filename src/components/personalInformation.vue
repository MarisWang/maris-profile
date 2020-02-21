<template>
    <div class="personalInformation">
        <h2>个人信息 </h2>
        <ul>
            <li>
                <span><em class="fa fa-user"></em>Maris</span>
                <span><em class="fa fa-transgender"></em>女</span>
            </li>
            <li>
                <span><em class="fa fa-home"></em>陕西</span>
                <span><em class="fa  fa-calendar"></em>1991年10月</span>
            </li>
            <li>
                <span><em class="fa fa-fort-awesome"></em>西安大学</span>
                <span><em class="fa  fa-desktop"></em>计算机</span>
            </li>
            <li>
                <span><em class="fa fa-graduation-cap"></em>本科学士学位</span>
                <span><em class="fa  fa-language"></em>英语口语流利</span>
            </li>
            <li>
                <span><em class="fa fa-briefcase"></em>求职：web前端相关工作</span>
                <span><em class="fa fa-keyboard-o"></em>4年前端相关工作经验</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'personal-information'
  }
</script>

<style scoped lang="less">
    .personalInformation {
        width: 600px;
        padding: 20px 45px;
        background: #ffffffa7;
        margin: 0 15%;

        li {
            display: flex;
            justify-content: space-between;

            span {
                width: 50%;
                text-align: left;
            }
        }

        p {
            margin: 15px 0;
            line-height: 40px;
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1024px) {
        .personalInformation {
            width: 90%;
            padding: 20px 15px;
            margin: 0 auto;

            li {
                display: block;

                span {
                    width: 100%;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {

    }
</style>
