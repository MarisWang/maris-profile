<template>
  <div class="workExperience">
    <h2>工作经历</h2>
    <ul>
      <li v-for="(item,index) in experiences" :key="index">
        <h5>时间：{{item.time}}</h5>
        <h5>公司：{{item.company}}</h5>
        <h5>部门：{{item.apartment}}</h5>
        <h5>职位：{{item.position}}</h5>
        <h5>离职原因：{{item.resaon}}</h5>
      </li>
    </ul>
    <br/>
    <p>熟练掌握ReactJS、VUEJS、以及AngularJS，在nodeJS的开发环境下，快速搭建项目工程，以UI设计为参考，
      通过精简的HTML和CSS代码，再结合Ant-design 或者Element-UI等入门轻便的类库，99%UI设计页面还原；
      然后，axios或者Fetch、apollo-fetch获取APi数据，通过都返回数据的解析，将数据和页面内容联系起来；
      接下来、借以wow.js为页面添加些许动画效果，使得页面更加的生动；最后，配合测试人员，以有效的和
      快速的方式，解决页面存在的问题，使得用户有更加流畅、快捷的体验。</p>
    <a href="https://resume-f86fc.web.app/#/" target="_blank">https://resume-f86fc.web.app/#/</a>
  </div>
</template>

<script>
export default {
  name: 'workExperience',
  data () {
    return {
      experiences: [
        {
          time: '2018.01-目前',
          company: '科技狗',
          apartment: '信息系统二次开发',
          position: 'web前端开发工程师',
          resaon: '在职'
        },
        {
          time: '2017.07-2018.01',
          company: '中软国际',
          apartment: '汇丰银行第四事业开发部',
          position: 'web前端开发工程师',
          resaon: '出国谋求更好发展和生活'
        },
        {
          time: '2015.03-2017.06',
          company: '软通动力',
          apartment: '华为业务线  SPO实施部',
          position: 'web前端开发工程师',
          resaon: '技能提升'
        }
      ]
    }
  }
}
</script>

<style scoped>
.workExperience{
  width: 90%;
  padding: 20px 45px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.4);
}
.workExperience ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.workExperience ul li{
  width: 300px;
  line-height: 30px;
  margin: 10px auto;
  box-shadow: 0 10px 10px 0 rgba(0,0,0,0.50);
}
.workExperience p{
  text-align: left;
  text-indent: 30px;
  line-height: 25px;
}
.workExperience a{
  text-align: left;
  display: block;
  color: #008fd1;
}
.workExperience a:hover{
  text-decoration: underline;
}
</style>
