<panel>
  <div class="base-template">
    <div class="base-header">
      <div class="base-header-left">
        <span>设备厂家：</span><span>{{ vendor }}</span>
      </div>
      <div class="base-header-right">
        <span>当前状态：</span><span>{{ on ? '开' : '关' }}</span>
      </div>
    </div>
    <div class="base-content">
      <div class="device device-wrap" :class="on ? 'device-on' : 'device-off'">
        <div class="device-content">
          <svg viewBox="0 0 154 180" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M116.388949,73.5764213 L124.986785,73.5764213 C128.725606,73.5764213 131.784534,70.519128 131.784534,66.7823058 L131.784534,60.3222625 L134.055557,60.3222625 C144.834077,60.3222625 153.652652,51.5084018 153.652652,40.7356441 L153.652652,32.8403848 C153.652652,22.0676267 144.834077,13.2537664 134.055557,13.2537664 L131.784534,13.2537664 L131.784534,6.79372309 C131.784534,3.05690047 128.725606,0 124.986785,0 L116.388949,0 C112.650127,0 109.591592,3.0572933 109.591592,6.79372309 L109.591592,66.7823062 C109.591592,70.519128 112.650128,73.5764213 116.388949,73.5764213 Z" id="路径备份-16"></path>
            <path d="M19.9450875,60.322655 L22.21611,60.322655 L22.21611,66.7826982 C22.21611,70.5195209 25.2750386,73.5768138 29.0138596,73.5768138 L37.6116955,73.5768138 C41.3505169,73.5768138 44.4094452,70.5195205 44.4094452,66.7826982 L44.4094452,6.79411516 C44.4094452,3.05729253 41.3505166,0.000392063519 37.6116955,0.000392063519 L29.0138596,0.000392063519 C25.2750382,0.000392063519 22.21611,3.05768536 22.21611,6.79411516 L22.21611,13.2541584 L19.9450875,13.2541584 C9.16656705,13.2541584 0.347992262,22.0680191 0.347992262,32.8407768 L0.347992262,40.7360362 C0.347992262,51.5084018 9.16656743,60.322655 19.9450875,60.322655 Z" id="路径备份-17"></path>
            <path d="M20.1253712,112.566331 C18.2557639,109.330028 14.077428,108.211219 10.8393944,110.079827 L3.39356633,114.376446 C0.155925385,116.244661 -0.963874981,120.421156 0.905339214,123.657066 L30.9156743,175.608282 C32.7848885,178.844584 36.9636175,179.963393 40.2012585,178.094786 L47.6470865,173.798559 C50.8847275,171.930344 52.0045278,167.753849 50.1353136,164.517546 L20.1253712,112.566331 Z" id="路径备份-18"></path>
            <path d="M150.606293,114.376054 L143.160464,110.079434 C139.922431,108.210827 135.744095,109.330028 133.874488,112.565938 L103.864153,164.517154 C101.994938,167.753456 103.114346,171.929559 106.35238,173.798166 L113.798208,178.094393 C117.035849,179.963001 121.214578,178.843799 123.083792,175.607889 L153.094127,123.656674 C154.964127,120.420763 153.844327,116.244269 150.606293,114.376054 Z" id="路径备份-19"></path>
            <path d="M81.2988474,0.000392063519 L72.7014045,0.000392063519 C68.9625831,0.000392063519 65.9036549,3.05768536 65.9036549,6.79411516 L65.9036549,66.7826982 C65.9036549,70.5195209 68.9625835,73.5768138 72.7014045,73.5768138 L81.2988474,73.5768138 C85.0376688,73.5768138 88.096597,70.5195205 88.096597,66.7826982 L88.096597,6.79411516 C88.096597,3.05768536 85.0376688,0.000392063519 81.2988474,0.000392063519 Z" id="路径备份-20"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="base-footer">
      <div class="button my-button" :class="on ? '' : 'off-button'" @click="handleOn">
        <?xml version="1.0" encoding="UTF-8"?>
          <svg width="20px" height="20px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="智能插座开启" transform="translate(-154.000000, -1344.000000)">
                      <g id="开启-icon" transform="translate(154.000000, 1344.000000)">
                          <rect id="矩形" stroke-opacity="0" stroke="#979797" x="0.5" y="0.5" width="59" height="59"></rect>
                          <g id="编组-3" transform="translate(7.000000, 5.000000)" fill="currentColor" fill-rule="nonzero">
                              <path d="M32.2572571,6.05075683 C31.208634,5.59038662 29.9841723,6.0651067 29.5225715,7.11121286 C29.0609708,8.15731903 29.5370231,9.37855893 30.5857116,9.83892913 C37.4288992,12.8432719 41.8507588,19.6021953 41.8507588,27.0581966 C41.8507588,32.0806541 39.88992,36.802547 36.3294667,40.3539463 C32.7690134,43.9053456 28.0352348,45.8612993 23.0000654,45.8612993 C17.964896,45.8612993 13.2309866,43.9054108 9.6705987,40.3539463 C6.1101454,36.802547 4.14937195,32.0806541 4.14937195,27.0581966 C4.14937195,19.559537 8.60641238,12.7852201 15.5041367,9.7997931 C16.5553101,9.34483672 17.0376401,8.12614065 16.5815976,7.07768633 C16.1254897,6.02916678 14.903513,5.54798926 13.8525358,6.00294564 C5.43739445,9.64501009 0,17.9096923 0,27.0581314 C0,30.1543786 0.608405406,33.1591128 1.80827974,35.9887784 C2.96682645,38.7209301 4.6249012,41.1742375 6.73653355,43.2805388 C8.8481659,45.3867749 11.3076173,47.0406636 14.0467495,48.1962855 C16.8836424,49.3931958 19.8959815,50 23.0000654,50 C26.1040839,50 29.1164884,49.3931306 31.9533159,48.1962855 C34.6924481,47.0406636 37.1518995,45.3867749 39.2635318,43.2805388 C41.3750988,41.1742375 43.0331735,38.7209301 44.1917203,35.9887784 C45.39166,33.1590475 46,30.1543786 46,27.0581314 C46,17.9617432 40.6056334,9.71584631 32.2572571,6.05075683 Z" id="路径备份"></path>
                              <path d="M23.0436163,24.982878 C24.1894116,24.982878 25.1183023,24.0563324 25.1183023,22.9134298 L25.1183023,2.06944819 C25.1183023,0.92654558 24.189477,0 23.0436163,0 C21.8977556,0 20.9689304,0.92654558 20.9689304,2.06944819 L20.9689304,22.9134298 C20.9689304,24.0563324 21.897821,24.982878 23.0436163,24.982878 Z" id="路径备份-7"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
      </div>
      <span>{{ on ? "开启" : "关闭" }}</span>
    </div>
  </div>
</panel>

<script>
export default {
  data () {
    return {
      vendor: 'LME',
      on: false
    }
  },
  methods: {
    handleOn () {
      this.on = !this.on
    }
  }
}

</script>
<style scoped>
.base-template {
  display: flex;
  flex-direction: column;
}
.base-template .base-header {
  margin: 40px 20px;
  display: flex;
  justify-content: space-between;
}
.base-template .base-header span {
  font-size: 12px;
  color: #333;
}
.base-template .base-content, .base-footer {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.base-footer {
  flex-direction: column;
  align-items: center;
}
.base-template .base-footer .button {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 0px rgba(159, 164, 159, .2);
  color: #fff;
}
.base-template .base-footer .my-button {
  background: #88A467;
  font-size: 40px;
  margin-bottom: 10px;
}
.base-template .base-footer .off-button {
  background: #ccc;
}
.device-wrap {
  width: 190PX;
  height: 190px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s .3s;
}
.device-on {
  background: #e7e9e7;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(229, 232, 229, .5);
}
.device-off {
  background: transparent;
  border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(229, 232, 229, 0);
}
.device-wrap .device-content {
  width: 175PX;
  height: 175px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #88a467;
  transition: all .3s;
}
.device-off .device-content {
  background: #C4C5C5;
  color: #F2F4F2;
}
.device-wrap .device-content svg {
  width: 90PX;
}
</style>
