<template>
  <div id='app'>
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
        @mouseover='overAboutUs' @mouseleave='leaveAboutUs' @click='toAboutUs'>关于我们</div></el-col>
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
  <!-- 轮播图 -->
  <div id='slide'>
    <ul>
      <li v-for='(item,index) in imgs' :key='index' v-show="index===currentIndex">
        <img :src="imgs[currentIndex]" class='img'>
      </li>
    </ul>
    <el-col :span="1" :offset="2">
      <img src='../assets/img/left.png' class='arrow' @click='changeImg'>
    </el-col>
    <el-col :span="8" :offset="4">
    <div class='text'>
      <h1>WATTMAN</h1>
      <h1>工业革命推动者</h1>
      <p>机器学习等技术正在不断地颠覆传统行业，</p>
      <p>成为诸多行业破茧成蝶的关键助推力。</p>
      <button>关于我们</button>
    </div>
    </el-col>
    <el-col :span="1" :offset="22">
      <img src='../assets/img/right.png' class='arrow' @click='changeImg'>
    </el-col>
  </div>
  <!-- products -->
  <div id='products'>
    <h1>PRODUCTS</h1>
    <div class='product-sol'>
      <div class='product-wrap'>
        <div class='product-wrap-wrap'>
          <img src='http://qiniu.wattman.cn/product_autoArm_2020_02_10.png'>
          <p class='product-name'>智能感知机械臂</p>
        </div>
        <div class='product-wrap-wrap'>
          <div class='product-wrap-wrap-wrap'>
            <img src='http://qiniu.wattman.cn/product_onlineSurfaceDefectDetectionSystem_2020_02_10.png'>
            <p class='product-name'>表面缺陷检测系统</p>
          </div>
          <div class='product-wrap-wrap-wrap'>
            <img src='http://qiniu.wattman.cn/product_industrialNumberIdentificationSystem_2020_02_10.png'>
            <p class='product-name'>工业编码识别系统</p>
          </div>
        </div>
      </div>
      <div class='product-wrap'>
        <div class='product-wrap-wrap'>
          <div class='product-wrap-wrap-wrap'>
            <img src='http://qiniu.wattman.cn/product_materialMeasurementSystem_2020_02_10.png'>
            <p class='product-name'>物料计量系统</p>
          </div>
          <div class='product-wrap-wrap-wrap'>
            <img src='http://qiniu.wattman.cn/product_indoorMobileDeviceLocationSystem_2020_02_10.png'>
            <p class='product-name'>移动设备定位系统</p> 
          </div>
        </div>
        <div class='product-wrap-wrap'>
          <div class='product-wrap-wrap-wrap'>
            <img src='http://qiniu.wattman.cn/product_factoryVehicleLocation_2020_02_10.png'>
            <p class='product-name'>园区车辆定位系统</p>
          </div>
          <div class='product-wrap-wrap-wrap'>
            <img src='http://qiniu.wattman.cn/product_ladleLifeCycleSystem_2020_02_10.png'>
            <p class='product-name'>铁通生命周期系统</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 工业视觉 -->
  <div class='industrial-vision'>
    <img src='../assets/img/a-a_industrial-vision_f-l.jpg' :class="{'boost':ivclass,'reduce':isreduce}"
    @mouseover="overiv" @mouseleave="leaveiv">
    <el-row>
    <el-col :span="20" :offset="4"><div class="grid-content bg-purple text"
    @mouseover="overiv" @mouseleave="leaveiv">
      <h1>工业视觉</h1>
      <p>融合机器视觉与三维感知技术，与现场实际工况深度结合，</p>
      <p>为企业客户提供高效精准的定制化工业视觉解决方案</p>
      <button>了解更多</button>
    </div></el-col>
    </el-row>
  </div>
  <!-- 3d -->
  <div class='industrial-vision'>
    <img src='../assets/img/a-a_3d-modeling_f-r.png' :class="{'boost':ivclass1,'reduce':isreduce1}"
    @mouseover="overiv1" @mouseleave="leaveiv1">
    <el-row>
    <el-col :span="12" :offset="12"><div class="grid-content bg-purple text"
    @mouseover="overiv1" @mouseleave="leaveiv1">
      <h1>三维重建</h1>
      <p>通过3D传感器获取真实三维信息,结合相机的二维投影和纹理</p>
      <p>细节,精确细腻地恢复出物体的三维结构,支持大场景实时三维</p>
      <p>重建和小场景精密三维重建</p>
      <button>了解更多</button>
    </div></el-col>
    </el-row>
  </div>
  <!-- 工业机器人 -->
  <div class='industrial-vision'>
    <img src='../assets/img/technicalIntroduction4.jpg.png' :class="{'boost':ivclass,'reduce':isreduce}"
    @mouseover="overiv" @mouseleave="leaveiv">
    <el-row>
    <el-col :span="20" :offset="4"><div class="grid-content bg-purple text"
    @mouseover="overiv" @mouseleave="leaveiv">
      <h1>工业机器人</h1>
      <p>利用机器视觉与实时稠密三维重建技术，自主规划机械臂运</p>
      <p>动轨迹，并针对现场工况，设计特定末端机械结构与电气方</p>
      <p>案，推动企业客户工业生产无人化、智能化进程</p>
      <button>了解更多</button>
    </div></el-col>
    </el-row>
  </div>
  <!-- 自主定位 -->
   <div class='industrial-vision'>
    <img src='../assets/img/technicalIntroduction1_.png' :class="{'boost':ivclass1,'reduce':isreduce1}"
    @mouseover="overiv1" @mouseleave="leaveiv1">
    <el-row>
    <el-col :span="12" :offset="12"><div class="grid-content bg-purple text"
    @mouseover="overiv1" @mouseleave="leaveiv1">
      <h1>自主定位</h1>
      <p>基于多源传感器融合定位技术，支持室内外场景的高精度定</p>
      <p>位，广泛应用于仓库天车、叉车等移动设备定位，园区车辆</p>
      <p>定位等场景</p>
      <button>了解更多</button>
    </div></el-col>
    </el-row>
  </div>
  <!-- 底部信息 -->
  <div class='footer-msg'>
    <div class='poflex2'>
      <h3>产品</h3>
      <p>方坯视频计数与编码识别系统</p>
      <p>在线钢卷编码识别系统</p>
      <p>在线表面缺陷检测系统</p>
      <p>铁包钢包内衬侵蚀分析系统</p>
      <p>物料计量系统</p>
      <p>园区车辆定位系统</p>
      <p>室内移动设备定位系统</p>
      <p>碳块清理机器人</p>
      <p>扒渣机器人</p>
    </div>
    <div class='poflex'>
      <h3>应用</h3>
      <p>工业视觉</p>
      <p>三维重建</p>
      <p>自主定位</p>
      <p>工业机器人</p>
      <p>三维地图</p>
    </div>
    <div class='poflex'>
      <h3>关于我们</h3>
      <p>公司介绍</p>
    </div>
    <div class='poflex2'>
      <h3>联系我们</h3>
          <p>电 话：400-666-3011</p>
          <p><span style="margin-left: 53px">010-63971911</span></p>
          <p>传 真：010-63971913</p>
          <p>邮 箱：marketing@wattman.cn</p>
          <p>地 址：北京市海淀区复兴路乙12号中国铝业大厦</p>
    </div>
    <div class='poflex2'>
      <h3>关注我们</h3>
        <img src='../assets/img/follow_us.jpg'>
    </div>
  </div>
  <!-- footer -->
  <div class='footer'>
    <h3>法律</h3>
    <h3>隐私</h3>
    <h3>联系我们</h3>
    <p><span>京ICP备19043472号</span><span>©2020 北京瓦特曼科技有限公司版权所有</span></p>
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
      ivclass: false,
      isreduce: false,
      ivclass1: false,
      isreduce1: false,
      imgs: ['http://qiniu.wattman.cn/ladle1.jpg','http://qiniu.wattman.cn/ladle2.jpg'],
      currentIndex: 0
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
    },
    changeImg() {
      if(this.currentIndex === 0) {
        this.currentIndex = 1;
      } else{
        this.currentIndex = 0;
      }
    },
    overiv() {
      this.isreduce = false;
      this.ivclass = true;
    },
    leaveiv() {
      this.isreduce = true;
      this.ivclass = false;
    },
    overiv1() {
      this.isreduce1 = false;
      this.ivclass1 = true;
    },
    leaveiv1() {
      this.isreduce1 = true;
      this.ivclass1 = false;
    },
    toAboutUs() {
      this.$router.push('aboutUs')
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
  height: 7.1rem;
  color: white;
  background: #0B3771;
  z-index: 2;
  position: fixed;
}
button{
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
  font-size: 1.25rem;
  background: #0B3771;
  width: 10rem;
  height: 5rem;
  border-radius: 10px;
  cursor: pointer;
}
.wattman{
  text-align: center;
  font-size: 2.2rem;
  line-height: 7.1rem;
  cursor: pointer;
}
.nav{
  line-height: 7.1rem;
  text-align: center;
  font-size: 1.25rem;
  cursor: pointer;
}
.has-drop{
  border-bottom: 2px solid white;
}
.solution-msg{
  color: black;
  background: white;
}
.solution-msg{
  height: 450px;
}
.solution-msg h3,.solution-msg p{
  cursor: pointer;
}
#slide .img{
  width: 100%;
  height: 100%;
  /* position: absolute; */
}
#slide .text{
  position: absolute;
  color: white;
  top: 30%;
}
#slide .text p{
  font-size: 20px;
}
#slide .text p:first-of-type{
  margin-top: 50px;
}
#slide .text button{
  margin-top: 30px;
}
ul,li{
  margin: 0;
  padding: 0;
}
#slide .arrow{
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  cursor: pointer;
}
#slide{
  position: relative;
}
#products{
  width: 100%;
  height: 56.25rem;
  margin-top: 4.68rem;
  background:#0B3771;
}
#products h1{
  color: white;
  text-align: center;
  padding-top: 5rem;
}
.product-wrap{
  height: 40rem;
  background: white;
  float: left;
  flex: 1;
  margin: 5rem 5rem 0 5rem;
  display: flex;
}
.product-sol{
  display: flex;
}
.product-wrap-wrap{
  flex: 1;
  height: 40rem;
  background: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #0B3771;
  cursor: pointer;
}
.product-wrap-wrap-wrap{
  flex: 1;
  border: 1px solid #0B3771;
  height: 0;
}
#products img{
  width: 100%;
  height: 80%;
}
#products .product-name{
  cursor: pointer;
  color: #0B3771;
  text-align: center;
  font-size: 0.8rem;
}
.industrial-vision{
  position: relative;
  margin-top: 4.7rem;
}
@keyframes scaleDraw {  
  0%{
    transform: scale(1);  
  }
  100%{
    transform: scale(1.1); 
  }
}
.industrial-vision img{
  /* position: absolute; */
  width: 100%;
}
.industrial-vision .boost{
  -webkit-animation: scaleDraw 2s ease-in-out 1;
  animation-fill-mode: forwards;
}
@keyframes scaleDraw1 {  
  0%{
    transform: scale(1.1);  
  }
  100%{
    transform: scale(1.0); 
  }
}
.industrial-vision .reduce{
  -webkit-animation: scaleDraw1 2s ease-in-out 1;
  animation-fill-mode:forwards;
}
.industrial-vision .text{
  color: white;
  position: absolute;
  bottom: 15rem;
}
.footer-msg{
  display: flex;
  margin-top: 5rem;
  background: #E5EAF0;
  height: 30rem;
  width: 100%;
  color: black;
  border-top: 2px solid #CCD6E1;
}
.footer-msg div:first-child{
  margin-left: 15rem;
}
.footer-msg .poflex2{
  flex: 2;
  margin-top: 3rem;
}
.footer-msg .poflex{
  flex: 1;
  margin-top: 3rem;
}
.footer-msg p{
  cursor: pointer;
}
.footer-msg img{
  width: 120px;
  height: 120px;
}
.footer{
  width: 100%;
  height: 115px;
  background: #0B3771;
  color: white;
}
.footer h3{
  float: left;
  margin-left: 2rem;
  line-height: 115px;
  cursor: pointer;
}
.footer h3:first-child{
  margin-left: 16rem;
}
.footer p{
  float: left;
  line-height: 115px;
  margin-left: 16rem;
}
.footer span{
  margin-left: 2rem;
  color: #709CAB;
}
</style>
