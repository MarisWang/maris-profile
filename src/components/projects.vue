<template>
    <div class="projects">
        <h2>项目经验 </h2>
        <el-collapse v-for="(item,index) in projects" v-model="activeName" accordion :key="index">
            <el-collapse-item v-bind:title="item.name" v-bind:name="index+1">
                <h6>项目名称：</h6>
                <p>{{item.name}}</p>
                <h6>所在公司：</h6>
                <p>{{item.company}}</p>
                <h6>所用时间：</h6>
                <p>{{item.time}}</p>
                <h6>开发工具：</h6>
                <p>{{item.tools}}</p>
                <h6>技术实现：</h6>
                <p>{{item.skills}}</p>
                <h6>承担角色：</h6>
                <p>{{item.role}}</p>
                <h6>项目概述：</h6>
                <p>{{item.desc}}</p>
                <h6>主要职责：</h6>
                <ul>
                    <li v-for="(n,i) in item.duty" :key="i">{{i+1}}{{n}}</li>
                </ul>
                <h6>项目总结：</h6>
                <p>{{item.submit}}</p>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
  export default {
    name: 'projects',
    data () {
      return {
        activeName: '1',
        projects: [
          {
            name: '朱一龙个人网站',
            company: '无（闲暇时间学习GraphQL和MongoDB做的）',
            time: '历史3个月，包含了数据库，后台，管理员页面，以及用户页面',
            tools: 'webStorm',
            skills: 'ReactJS ,Javascript,ant-design，GraphQL,MongoDB,Fetch等',
            role: '全站工程师',
            desc: '闲暇时间学习GraphQL和MongoDB做的时做的一个明星个人网页，包含了明星的个人信息，作品介绍，获奖经历等；整个网站从UI设计，数据库，后台，管理员系统，到前端页面都由自己独立完成；',
            duty: [
              '通过NodeJS自主搭建ReactJS前端开发环境和后台的开发环境',
              '使用ReactJS技术借助ant-design实现基础的网页界面，GraphQL和MongoDB技术来实现后台数据的增删改查和存储',
              '利用ReactJS相关技术实现页面的自适应效果',
              '在ReactJS的基础上，使用Axios实现前后端数据的交互'
            ],
            submit: '快速熟悉和掌握了ReactJS技术的技巧，在自适应以及处理元素的显示和隐藏，VUE的强大功能，为开发提供了更加便捷和快速的方法；同时强大的组件化开发，使得代码在逻辑上更加的清晰明了；初次体验了写后台的乐趣，在学习的过程中，逐渐成长，为成为一个全站工程师，打好基础；分别使用了rest和express来实现后台，领略了express带来的便捷开发，配合fetch进行前后台数据的交互时，返回数据更加的精准，前端可以自由操控所需字段，减少冗余的数据返回；且可以实现一次请求多个数据的便捷，减轻了因多次请求给服务器端带来的负担；'
          },
          {
            name: 'DXS网络管理系统',
            company: '科技狗',
            time: '2018.03-2018.5',
            tools: 'webStorm',
            skills: 'Jquery  VUE.Js HTML+CSS Element-UI等',
            role: '前端工程师',
            desc: '这是一个为网站安全保驾护航的应用网页，以VUE为住，Element-UI为辅，实现了各种类型的查询和相关信心的对比，并且支持支付；',
            duty: [
              '通过NodeJS自主搭建ReactJS开发环境',
              '使用ReactJS技术借助ant-design实现基础的网页界面',
              '利用ReactJS相关技术实现页面的自适应效果',
              '在ReactJS的基础上，使用Axios实现前后端数据的交互'
            ],
            submit: '快速熟悉和掌握了ReactJS技术的技巧，在自适应以及处理元素的显示和隐藏，VUE的强大功能，为开发提供了更加便捷和快速的方法；同时强大的组件化开发，使得代码在逻辑上更加的清晰明了；'
          },
          {
            name: 'YUAN',
            company: '无（闲暇时间学习GraphQL和MongoDB做的）',
            time: '历史3个月，包含了数据库，后台，管理员页面，以及用户页面',
            tools: 'webStorm',
            skills: 'ReactJS ,Javascript,ant-design，GraphQL,MongoDB,Fetch等',
            role: '全站工程师',
            desc: '闲暇时间学习GraphQL和MongoDB做的时做的一个明星个人网页，包含了明星的个人信息，作品介绍，获奖经历等；整个网站从UI设计，数据库，后台，管理员系统，到前端页面都由自己独立完成；',
            duty: [
              '通过NodeJS自主搭建VUE开发环境',
              '使用VUE技术借助Element-UI实现基础的网页界面',
              '利用VUE相关技术实现页面的自适应效果',
              '在VUE的基础上，使用Axios实现前后端数据的交互'
            ],
            submit: '快速熟悉和掌握了VUE技术的技巧，在自适应以及处理元素的显示和隐藏，VUE的强大功能，为开发提供了更加便捷和快速的方法；同时强大的组件化开发，使得代码在逻辑上更加的清晰明了；VUE使用起来确实比reactjs 简单方便多，代码也清晰，上手比较快；\n' +
              '需要获得更多的相关工作信息和经验，请登 https://yuan-44yuan.firebaseapp.com/ 查看原型页面'
          },
          {
            name: '股票管理系统',
            company: '科技狗',
            time: '2018.02-2018.04',
            tools: 'webStorm',
            skills: 'Jquery  AngularJS HTML+CSS AdminLTE等',
            role: '前端工程师',
            desc: '此网站是一个股票管理的系统网站，在AdminLte的技术上，以angular为基础，实现了个人股票的购买历史详情查询，在Echarts的技术上，实现了指定时间内的股票走势图标展示等；',
            duty: [
              '利用HTML/css完成了PC页面的的书写，实现屏幕的自适应',
              '利用AngularJs完成了用户登录界面基础信息的校验，各项接口数据的交互和配置路由',
              '利用ajax请求后台接口获取数据并渲染在页面上',
              '在PC端的基础上，实现移动端，主要用到了zepto.Js技术'
            ],
            submit: '熟悉了angular的登录校验的相关知识，体会到angular为开大带来的便捷和快速；'
          },
          {
            name: 'transmit用户登录UI',
            company: '软通动力 SPO实施部',
            time: '017.07-2018.01',
            tools: 'webStorm',
            skills: 'jquery  AngularJs  HTML+CSS  zepto.js   Ajax 等',
            role: '前端工程师',
            desc: '主要是针对银行旧版本的登录界面进行了新的设计和开发，采用了新的技术来完善旧版本的功能和界面UI;实现PC端的基础上，做了移动端的处理，使得登录界面在移动端也可以正常使用；',
            duty: [
              '利用HTML/css完成了PC页面的的书写，实现屏幕的自适应',
              '利用AngularJs完成了用户登录界面基础信息的校验，各项接口数据的交互和配置路由',
              '利用ajax请求后台接口获取数据并渲染在页面上',
              '在PC端的基础上，实现移动端，主要用到了zepto.Js技术'
            ],
            submit: '熟悉了angular的登录校验的相关知识，体会到angular为开大带来的便捷和快速；'
          },
          {
            name: 'eModel',
            company: '软通动力 华为业务线',
            time: '2015.03-2017.06',
            tools: 'webStorm',
            skills: 'jquery  AngularJs  HTML+CSS  Ajax 等',
            role: '前端工程师',
            desc: '这款多页面的项目主要用户数据的整理分析，包含表格中的筛选排序等功能，并结合canvas对于数据的增删改查进行了新的尝试；',
            duty: [
              '理解和分析需求，使用Photoshop技术设计页面UI效果图',
              '利用HTML/css完成页面UI',
              '利用jqueryUI来实现界面上的动化效果',
              '利用ajax请求后台接口获取数据并渲染在页面上',
              '修改页面中存在的问题，包括浏览器的兼容性，各种bug，以及屏幕的自适应效果'
            ],
            submit: '对于echarts插件进行了系统和全面的学习，数据的解析和处理上更加的得心应手，熟练掌握了jqueryUi的使用技能；'
          },
          {
            name: 'Nbiot',
            company: '软通动力 华为业务线',
            time: '2015.03-2017.06',
            tools: 'webStorm',
            skills: 'jquery  AngularJs  HTML+CSS  Ajax 等',
            role: '前端工程师',
            desc: '此网页主要用户移动，联通，电信等通讯行业，用来实现远程的网路基站的自动化部署；页面分工精细，四个主页面组成，每一个页面都是自动化部署的步骤;',
            duty: [
              '理解和分析需求，使用Photoshop技术设计页面UI效果图',
              '利用HTML/css完成页面UI',
              '利用jqueryUI来实现界面上的动化效果',
              '利用ajax请求后台接口获取数据并渲染在页面上',
              '修改页面中存在的问题，包括浏览器的兼容性，各种bug，以及屏幕的自适应效果'
            ],
            submit: '此项目花费时间比较久，用了react技术做了其中的一部分，后来因为国内网络权限问题，不得已改用Jquery技术来实现；但是在这个过程中学会了使用react技术；'
          },
          {
            name: '其他项目',
            company: '以上公司',
            time: '2015.03-目前',
            tools: 'webStorm',
            skills: 'jquery,AngularJs,HTML+CSS,Ajax,react,vue等',
            role: '前端工程师',
            desc: '三角工具，逻辑专网，wolf-user,VPNcash，DreamTech,LineJR，PayQR等',
            duty: [],
            submit: ''
          }
        ]
      }
    }
  }
</script>
<style>
    .projects .el-collapse {
        border-top: none;
        border-bottom: none;
    }

    .projects .el-collapse .el-collapse-item .el-collapse-item__header {
        padding-left: 10px;
        font-size: 1em;
        background-color: #ffffff29;
        border-bottom: none;
        color: #dbdbdb;
    }

    .projects .el-collapse .el-collapse-item .el-collapse-item__wrap {
        padding: 0 20px;
        background: transparent;
        border-bottom: none;
    }

</style>
<style scoped lang="less">
    .projects {
        width: 90%;
        padding: 20px 45px;
        margin: 0 auto;

        h6 {
            text-align: left;
            color: #dbdbdb;
            font-weight: bold;
            font-size: 1em;
        }

        p {
            text-align: left;
            margin-left: 60px;
            color: #dbdbdb;
        }

        ul {
            margin-left: 50px;

            li {
                text-align: left;
                margin-left: 8px;
                color: #dbdbdb;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .projects {
            margin: 20px auto;
        }
    }

    @media screen and (max-width: 768px) {

    }
</style>
