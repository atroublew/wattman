<template>
  <!-- nav -->
  <div id='nav'>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple-dark wattman">WATTMAN</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-dark nav"
      :class="{'has-drop':drop1}" 
      @mouseover='overMainPage' @mouseleave='leaveMainPage'>首页</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-dark nav"
      :class="{'has-drop':drop2}"
      @mouseover='overSolution' @mouseleave='leaveSolution'>解决方案</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-dark nav"
      :class="{'has-drop':drop3}"
      @mouseover='overAboutUs' @mouseleave='leaveAboutUs'>关于我们</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-dark nav"
      :class="{'has-drop':drop4}"
      @mouseover='overJoinUs' @mouseleave='leaveJoinUs'>加入我们</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-dark nav"
      :class="{'has-drop':drop5}"
      @mouseover='overConnect' @mouseleave='leaveConnect'>联系</div></el-col>
    </el-row>
    <div class='solution-msg' v-show='showSolMsg' @mouseover='overSolution' @mouseleave='leaveSolution'>
      <el-row>
      <el-col :span="6" :offset="4"><div>
        <h3>工业视觉</h3>
        <p>方坯视频计数与编码识别系统</p>
        <p>在线钢卷编码识别系统</p>
        <p>表面缺陷检测系统</p>
        <p>板坯号识别系统</p>
      </div>
      </el-col>
      <el-col :span="6">
      <div>
        <h3>三维重建</h3>
        <p>铁包钢包内衬侵蚀分析系统</p>
        <p>仓库物料计数系统</p>
      </div>
      </el-col>
      <el-col :span="6">
      <div>
        <h3>自主定位</h3>
        <p>园区车辆定位系统</p>
        <p>室内移动设备定位系统</p>
      </div>
      </el-col>
      </el-row>
      <el-row>
      <el-col :span="6" :offset="4">
      <div class='fdiv'>
        <h3>工业机器人</h3>
        <p>碳块清理机器人</p>
        <p>扒渣机器人</p>
      </div>
      </el-col>
      <el-col :span="6">
      <div>
        <h3>三维地图</h3>
        <p>工业园区内部三维地图制作系统</p>
      </div>
      </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      classA: true,
      drop1: false,
      drop2: false,
      drop3: false,
      drop4: false,
      drop5: false,
      showSolMsg: false,
    }
  },
  methods: {
    overMainPage() {
      this.drop1 = true;
    },
    leaveMainPage() {
      this.drop1 = false;
    },
    overSolution() {
      this.drop2 = true;
      this.showSolMsg = true;
    },
    leaveSolution() {
      this.drop2 = false;
      this.showSolMsg = false;
    },
    overAboutUs() {
      this.drop3 = true;
    },
    leaveAboutUs() {
      this.drop3 = false;
    },
    overJoinUs() {
      this.drop4 = true;
    },
    leaveJoinUs() {
      this.drop4 = false;
    },
    overConnect() {
      this.drop5 = true;
    },
    leaveConnect() {
      this.drop5 = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
  margin: 0;
  padding: 0;
}
#nav{
  width: 100%;
  height: 115px;
  color: white;
  background: #0B3771;
  position: fixed;
}
.wattman{
  text-align: center;
  font-size: 35px;
  line-height: 115px;
  cursor: pointer;
}
.nav{
  line-height: 115px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}
.has-drop{
  border-bottom: 2px solid white;
}
.solution-msg{
  color: black;
}
.solution-msg{
  height: 450px;
}
.solution-msg h3,.solution-msg p{
  cursor: pointer;
}
</style>
