<template>
    <div class="headerMenu">
      <h1>个人简历</h1>
      <ul class="bar">
        <li v-for="(items,index) in nav" :key="index">
          <a href="#" v-bind:name="items.anchor"></a>
          {{ items.title }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'header-menu',
  data () {
    return {
      nav: [
        {
          title: '个人信息',
          anchor: 'personal'
        },
        {
          title: '技能技巧',
          anchor: 'talent'
        },
        {
          title: '工作经历',
          anchor: 'experience'
        },
        {
          title: '项目经验',
          anchor: 'project'
        },
        {
          title: '联系方式',
          anchor: 'contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .headerMenu {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .headerMenu h1 {
    width: 50%;
    line-height: 200px;
    color: #636363;
    margin: 0 auto;
    font-size: 60px;
  }

  .headerMenu .bar {
    width: 50%;
  }

  .headerMenu .bar li {
    width: 50%;
    padding: 15px 0;
    text-align: center;
    background: #ffffffa7;
    margin: 15px 0;
  }

  .headerMenu .bar li:hover {
    background: rgba(162, 214, 8, 0.65);
  }

  @media screen and (max-width: 1024px) {
    .headerMenu {
      display: block;
    }

    .headerMenu .bar {
      margin: 0 auto;
    }

    .headerMenu h1 {
      width: 100%;
    }

    .headerMenu .bar li {
      width: 100%;
    }
  }

  @media screen and (max-width: 504px) {
    .headerMenu .bar {
      width: 90%;
    }
  }
</style>
