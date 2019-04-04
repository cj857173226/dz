<template>
  <view class="contanier">
    <view class="title">上传房源照片要求</view>
    <view class="demand-box">
      <text>1.无明显修改</text>
      <text>2.无拉伸变形</text>
      <text>3.无水印</text>
      <text>4.不能出现联系方式或品牌宣传</text>
    </view>
    <view class="bedroom-box">
      <view class="top-bedroom">
        <text>卧室</text>
        <view class="example">
          范例
          <text class="iconfont">&#xe65e;</text>
        </view>
      </view>
      <view class="hint-bedroom">
        填写户型和床铺信息后将有更多要求处理。请确保
        <text class="hint-bedroom-color">卧室、床铺、床单、枕头展示齐全</text>
      </view>
      <view>
        <!-- 不会覆盖限制上传图片数量（也就是count参数生效），notli默认false -->
        <sunui-upimg :upImgConfig="upImgConfig" @onUpImg="upImgData" ref="uImage"/>
        <!-- <button type="primary" @tap="getUpImgInfo">获取上传图片信息</button> -->
      </view>
    </view>
  </view>
</template>
<script>

export default {
 
  data() {
    return {
      /**
       * 图片上传配置项
       *
       * 关于阿里云oos,开启oos的话(需要配置./ali-oos/config.js的配置项)
       */
      upImgConfig: {
        // 是否阿里云oos且oos地址必须是https
        oos: true,
        aliConfig: {
          // 阿里云oos上传key_secret(后端传)
          AccessKeySecret: "zmOJcaqKJB5e4gqtLunHcNoMBTdDgp",
          // 阿里云oos上传key_id(后端传)
          OSSAccessKeyId: "LTAIPcJL9J5OZr2G",
          // 阿里云oos上传目录(必须存在)
          oosDirectory: "mifanimg"
        },
        // 后端图片接口地址(阿里云开启oos的话就填写阿里云上传服务器url：http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/否则的话写自己后端上传图片地址，注意把oos置为false!!!)
        url: "http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/",
        // 是否开启notli(开启的话就是选择完直接上传，关闭的话当count满足数量时才上传)
        notli: false,
        // 图片数量
        count: 2,
        // 相机来源([相机,相册],[相机])
        sourceType: true,
        // 是否压缩上传照片(仅小程序生效)
        sizeType: true,
        // 新增上传背景修改
        bgColor: "#0089FC",
        // 新增上传icon图标颜色修改
        iconColor: "#fff",
        // 上传文字描述(仅限四个字)
        text: "上传图片",
        // 删除图标定义背景颜色
        delIconColor: "",
        // 删除图标字体颜色
        delIconText: "",
        // 上传图标替换(+),是个http,https图片地址(https://www.playsort.cn/right.png)
        iconReplace: ""
      },
      imgArr: []
    };
  },
  methods: {
    // 上传图片(2019/3/29新增) -> 手动上传(需要传入上传url,还需要搭配count参数使用!)
    uImageTap() {
      this.$refs.uImage.uploadimage(
        "http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/"
      );
    },
    //获取上传图片返回来的数组(Step1)
    upImgData(e) {
      // 上传图片数组
      let arrImg = [];
      for (let i = 0, len = e.length; i < len; i++) {
        if (e[i].path_server != "") {
          arrImg.push(e[i].path_server.split(","));
        }
      }
      // 图片信息保存到data数组
      this.imgArr = arrImg;
    },
    // 获取上传图片的所有信息(Step2)
    // getUpImgInfo() {
    //   console.log("转成多维数组:", this.imgArr);
    //   console.log("转成一维数组:", this.imgArr.join().split(","));
    // }
  }
};
</script>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  font-size: 14px;
  .title {
    text-align: center;
    padding: 30upx 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
  }
  .demand-box {
    width: 520upx;
    padding: 30upx;
    box-sizing: border-box;
    background-color: #f1f1f1;
    border-radius: 10upx;
    margin: 0 auto;
  }
  .bedroom-box {
    margin-top: 40upx;
    .top-bedroom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10upx;
      .example {
        color: #acacac;
      }
    }
    .hint-bedroom {
      font-size: 12px;
      color: #acacac;
      .hint-bedroom-color {
        color: #000;
        font-weight: 700;
      }
    }
  }
}
</style>
