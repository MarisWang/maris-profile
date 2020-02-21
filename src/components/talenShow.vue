<script>
  export default {
    name: 'talen-show',
    data () {
      return {
        lists: [
          {
            name: 'JavaScript',
            percentage: '90%'
          },
          {
            name: 'Jquery',
            percentage: '95%'
          },
          {
            name: 'VUE',
            percentage: '90%'
          },
          {
            name: 'React',
            percentage: '95%'
          },
          {
            name: 'NodeJS',
            percentage: '90%'
          },
          {
            name: 'Angular',
            percentage: '90%'
          },
          {
            name: 'GraphQL',
            percentage: '60%'
          },
          {
            name: 'MongoDB',
            percentage: '60%'
          },
          {
            name: 'UI设计',
            percentage: '50%'
          }
        ]
      }
    }
  }
</script>
<template>
    <div class="talent">
        <h2>技能技巧 </h2>
        <ul>
            <li v-for="(items,index) in lists" :key="index">
                <span class="text">{{items.name}}<em>{{items.percentage}}</em></span>
                <span class="progress"><b class="progressBar"
                                          v-bind:style="{width: items.percentage}"></b></span>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    .talent {
        width: 100%;
        max-width: 600px;
        padding: 20px 45px;
        background: rgba(225, 225, 225, 0.5);
        margin: 0 15%;

        li {
            width: 100%;
            text-align: left;

            .text {
                em {
                    margin: 0 10px;
                    color: orange;
                }
            }

            .progress {
                width: 100%;
                line-height: 8px;
                background: #d8d8d8;
                border-radius: 15px;
                margin: 10px 0;
                text-align: left;
            }
        }
    }

    .progressBar {
        height: 10px;
        line-height: 10px;
        background: rgba(162, 214, 8, 0.65);
        border-radius: 15px;
    }

    @media screen and (max-width: 1024px) {
        .talent {
            width: 90%;
            padding: 20px 15px;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 768px) {

    }
</style>
