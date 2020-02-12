<script>
import HeaderMenu from './headerMenu'
import PersonalInformation from './personalInformation'
import TalenShow from './talenShow'
import Experience from './projects'
import Contact from './contact'
import WorkExperience from './workExperience'

export default {
  name: 'headPage',
  components: {
    HeaderMenu,
    PersonalInformation,
    TalenShow,
    Experience,
    Contact,
    WorkExperience
  }
}
</script>
<template>
  <main class="pageContent">
    <div class="fixedBgImgs bg1">
      <HeaderMenu/>
    </div>
    <div class="fixedBgImgs bg2">
      <PersonalInformation/>
    </div>
    <div class="fixedBgImgs bg3">
      <TalenShow/>
    </div>
    <div class="fixedBgImgs bg5">
      <Experience/>
    </div>
    <div class="fixedBgImgs bg4">
      <WorkExperience/>
    </div>
    <div class="fixedBgImgs bg6">
      <Contact/>
    </div>
  </main>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .fixedBgImgs {
    min-height: 100vh;
    background-size: cover;
    background: no-repeat fixed center center;
    display: flex;
    align-items: center;
  }

  .fixedBgImgs.bg1 {
    background-image: url("../assets/bg-01.jpg");
  }

  .fixedBgImgs.bg2 {
    background-image: url("../assets/bg-02.jpg");
  }

  .fixedBgImgs.bg3 {
    background-image: url("../assets/bg-03.jpg");
  }

  .fixedBgImgs.bg4 {
    background-image: url("../assets/bg-08.jpg");
  }
  .fixedBgImgs.bg5 {
    background-image: url("../assets/bg-05.jpg");
  }
  .fixedBgImgs.bg6 {
    background-image: url("../assets/bg-06.jpg");
  }
</style>
