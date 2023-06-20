<template>
  <div class="juke-box">
    <div class="turntable">
      <div class="record"></div>
      <div class="needle"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

@turntable-color: #f1f1f1;
@record-color: #000;
@needle-color: #000;

.juke-box {
  width: 300px;
  text-align: center;

  .turntable {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: @turntable-color;

    .record {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 160px;
      height: 160px;
      background-color: @record-color;
      border-radius: 50%;
    }

    .needle {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 80px;
      background-color: @needle-color;
    }
  }
}
</style>