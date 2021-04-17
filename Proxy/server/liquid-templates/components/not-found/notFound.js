const proxyRoute = process.env.PROXY_ROUTE;

exports.notFound = () => {

    return `
      <div class="wrapper">
  <div class="text_group">
    <p class="text_404">404</p>
    <p class="text_lost">The page you are looking for <br />has been lost in space.</p>
  </div>
  <div class="window_group">
    <div class="window_404">
      <div class="stars"></div>
    </div>
  </div>
</div>

        <style>
            @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap");
.wrapper {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  background: #eee;
}
.wrapper .text_group .text_404 {
  font-family: "Comic Neue", cursive;
  font-size: 10em;
  box-sizing: border-box;
  color: #363636;
}
.wrapper .text_group .text_lost {
  font-family: "Comic Neue", cursive;
  font-size: 2em;
  line-height: 50px;
  box-sizing: border-box;
  color: #565656;
}
.wrapper .window_group .window_404 {
  width: 200px;
  height: 350px;
  border-radius: 100px;
  box-shadow: -3px -3px 0px 5px #d4d4d4, 5px 5px 0px 2px white;
  background: linear-gradient(310deg, #020024 0%, #09096b 0%, black 80%);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.wrapper .window_group .window_404 .stars {
  width: 400px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  animation: flyby 30s linear infinite;
}
.wrapper .window_group .window_404 .stars .star {
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(1) {
  width: 3px;
  height: 3px;
  left: 351px;
  top: 106px;
  animation: twinkle1 10s linear infinite;
  animation-delay: 11s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(1):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(2) {
  width: 2px;
  height: 2px;
  left: 89px;
  top: 97px;
  animation: twinkle2 9s linear infinite;
  animation-delay: 17s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(2):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(3) {
  width: 3px;
  height: 3px;
  left: 171px;
  top: 265px;
  animation: twinkle3 10s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(3):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(4) {
  width: 3px;
  height: 3px;
  left: 224px;
  top: 158px;
  animation: twinkle4 6s linear infinite;
  animation-delay: 7s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(4):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(5) {
  width: 3px;
  height: 3px;
  left: 55px;
  top: 22px;
  animation: twinkle5 9s linear infinite;
  animation-delay: 13s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(5):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(6) {
  width: 3px;
  height: 3px;
  left: 286px;
  top: 294px;
  animation: twinkle6 12s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(6):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(7) {
  width: 3px;
  height: 3px;
  left: 343px;
  top: 198px;
  animation: twinkle7 9s linear infinite;
  animation-delay: 7s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(7):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(8) {
  width: 1px;
  height: 1px;
  left: 98px;
  top: 348px;
  animation: twinkle8 7s linear infinite;
  animation-delay: 17s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(8):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(9) {
  width: 1px;
  height: 1px;
  left: 92px;
  top: 65px;
  animation: twinkle9 10s linear infinite;
  animation-delay: 8s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(9):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(10) {
  width: 1px;
  height: 1px;
  left: 310px;
  top: 288px;
  animation: twinkle10 6s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(10):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(11) {
  width: 3px;
  height: 3px;
  left: 47px;
  top: 259px;
  animation: twinkle11 12s linear infinite;
  animation-delay: 11s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(11):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(12) {
  width: 1px;
  height: 1px;
  left: 390px;
  top: 257px;
  animation: twinkle12 10s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(12):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(13) {
  width: 2px;
  height: 2px;
  left: 102px;
  top: 122px;
  animation: twinkle13 11s linear infinite;
  animation-delay: 13s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(13):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(14) {
  width: 2px;
  height: 2px;
  left: 308px;
  top: 239px;
  animation: twinkle14 7s linear infinite;
  animation-delay: 10s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(14):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(15) {
  width: 1px;
  height: 1px;
  left: 52px;
  top: 12px;
  animation: twinkle15 12s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(15):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(16) {
  width: 1px;
  height: 1px;
  left: 34px;
  top: 2px;
  animation: twinkle16 10s linear infinite;
  animation-delay: 5s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(16):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(17) {
  width: 2px;
  height: 2px;
  left: 20px;
  top: 293px;
  animation: twinkle17 8s linear infinite;
  animation-delay: 7s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(17):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(18) {
  width: 2px;
  height: 2px;
  left: 389px;
  top: 324px;
  animation: twinkle18 6s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(18):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(19) {
  width: 2px;
  height: 2px;
  left: 240px;
  top: 97px;
  animation: twinkle19 13s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(19):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(20) {
  width: 3px;
  height: 3px;
  left: 78px;
  top: 12px;
  animation: twinkle20 9s linear infinite;
  animation-delay: 7s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(20):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(21) {
  width: 2px;
  height: 2px;
  left: 274px;
  top: 59px;
  animation: twinkle21 6s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(21):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(22) {
  width: 1px;
  height: 1px;
  left: 178px;
  top: 305px;
  animation: twinkle22 12s linear infinite;
  animation-delay: 16s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(22):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(23) {
  width: 3px;
  height: 3px;
  left: 96px;
  top: 190px;
  animation: twinkle23 6s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(23):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(24) {
  width: 1px;
  height: 1px;
  left: 400px;
  top: 120px;
  animation: twinkle24 11s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(24):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(25) {
  width: 1px;
  height: 1px;
  left: 154px;
  top: 142px;
  animation: twinkle25 7s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(25):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(26) {
  width: 2px;
  height: 2px;
  left: 354px;
  top: 41px;
  animation: twinkle26 10s linear infinite;
  animation-delay: 13s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(26):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(27) {
  width: 2px;
  height: 2px;
  left: 57px;
  top: 324px;
  animation: twinkle27 12s linear infinite;
  animation-delay: 11s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(27):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(28) {
  width: 2px;
  height: 2px;
  left: 33px;
  top: 34px;
  animation: twinkle28 12s linear infinite;
  animation-delay: 11s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(28):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(29) {
  width: 3px;
  height: 3px;
  left: 285px;
  top: 53px;
  animation: twinkle29 11s linear infinite;
  animation-delay: 17s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(29):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(30) {
  width: 2px;
  height: 2px;
  left: 148px;
  top: 113px;
  animation: twinkle30 10s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(30):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(31) {
  width: 2px;
  height: 2px;
  left: 126px;
  top: 254px;
  animation: twinkle31 6s linear infinite;
  animation-delay: 16s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(31):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(32) {
  width: 3px;
  height: 3px;
  left: 30px;
  top: 89px;
  animation: twinkle32 10s linear infinite;
  animation-delay: 9s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(32):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(33) {
  width: 3px;
  height: 3px;
  left: 390px;
  top: 165px;
  animation: twinkle33 9s linear infinite;
  animation-delay: 7s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(33):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(34) {
  width: 2px;
  height: 2px;
  left: 101px;
  top: 339px;
  animation: twinkle34 11s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(34):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(35) {
  width: 3px;
  height: 3px;
  left: 302px;
  top: 125px;
  animation: twinkle35 9s linear infinite;
  animation-delay: 8s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(35):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(36) {
  width: 3px;
  height: 3px;
  left: 172px;
  top: 100px;
  animation: twinkle36 8s linear infinite;
  animation-delay: 10s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(36):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(37) {
  width: 2px;
  height: 2px;
  left: 369px;
  top: 299px;
  animation: twinkle37 10s linear infinite;
  animation-delay: 4s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(37):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(38) {
  width: 1px;
  height: 1px;
  left: 308px;
  top: 166px;
  animation: twinkle38 10s linear infinite;
  animation-delay: 4s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(38):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(39) {
  width: 1px;
  height: 1px;
  left: 11px;
  top: 202px;
  animation: twinkle39 11s linear infinite;
  animation-delay: 8s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(39):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(40) {
  width: 1px;
  height: 1px;
  left: 396px;
  top: 104px;
  animation: twinkle40 6s linear infinite;
  animation-delay: 14s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(40):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(41) {
  width: 2px;
  height: 2px;
  left: 182px;
  top: 207px;
  animation: twinkle41 9s linear infinite;
  animation-delay: 10s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(41):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(42) {
  width: 1px;
  height: 1px;
  left: 305px;
  top: 69px;
  animation: twinkle42 9s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(42):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(43) {
  width: 2px;
  height: 2px;
  left: 74px;
  top: 247px;
  animation: twinkle43 9s linear infinite;
  animation-delay: 10s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(43):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(44) {
  width: 2px;
  height: 2px;
  left: 16px;
  top: 12px;
  animation: twinkle44 8s linear infinite;
  animation-delay: 7s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(44):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(45) {
  width: 2px;
  height: 2px;
  left: 197px;
  top: 61px;
  animation: twinkle45 12s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(45):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(46) {
  width: 3px;
  height: 3px;
  left: 42px;
  top: 210px;
  animation: twinkle46 12s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(46):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(47) {
  width: 2px;
  height: 2px;
  left: 316px;
  top: 18px;
  animation: twinkle47 11s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(47):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(48) {
  width: 2px;
  height: 2px;
  left: 15px;
  top: 173px;
  animation: twinkle48 12s linear infinite;
  animation-delay: 8s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(48):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(49) {
  width: 1px;
  height: 1px;
  left: 66px;
  top: 341px;
  animation: twinkle49 12s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(49):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(50) {
  width: 3px;
  height: 3px;
  left: 53px;
  top: 276px;
  animation: twinkle50 11s linear infinite;
  animation-delay: 16s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(50):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(51) {
  width: 2px;
  height: 2px;
  left: 353px;
  top: 230px;
  animation: twinkle51 11s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(51):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(52) {
  width: 2px;
  height: 2px;
  left: 216px;
  top: 271px;
  animation: twinkle52 13s linear infinite;
  animation-delay: 9s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(52):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(53) {
  width: 2px;
  height: 2px;
  left: 189px;
  top: 291px;
  animation: twinkle53 6s linear infinite;
  animation-delay: 5s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(53):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(54) {
  width: 1px;
  height: 1px;
  left: 1px;
  top: 124px;
  animation: twinkle54 10s linear infinite;
  animation-delay: 13s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(54):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(55) {
  width: 1px;
  height: 1px;
  left: 75px;
  top: 127px;
  animation: twinkle55 9s linear infinite;
  animation-delay: 13s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(55):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(56) {
  width: 3px;
  height: 3px;
  left: 28px;
  top: 119px;
  animation: twinkle56 13s linear infinite;
  animation-delay: 10s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(56):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(57) {
  width: 2px;
  height: 2px;
  left: 52px;
  top: 15px;
  animation: twinkle57 7s linear infinite;
  animation-delay: 11s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(57):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(58) {
  width: 2px;
  height: 2px;
  left: 170px;
  top: 99px;
  animation: twinkle58 6s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(58):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(59) {
  width: 2px;
  height: 2px;
  left: 290px;
  top: 49px;
  animation: twinkle59 10s linear infinite;
  animation-delay: 17s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(59):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(60) {
  width: 3px;
  height: 3px;
  left: 65px;
  top: 265px;
  animation: twinkle60 6s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(60):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(61) {
  width: 1px;
  height: 1px;
  left: 137px;
  top: 108px;
  animation: twinkle61 10s linear infinite;
  animation-delay: 5s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(61):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(62) {
  width: 3px;
  height: 3px;
  left: 256px;
  top: 312px;
  animation: twinkle62 6s linear infinite;
  animation-delay: 10s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(62):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(63) {
  width: 2px;
  height: 2px;
  left: 184px;
  top: 192px;
  animation: twinkle63 9s linear infinite;
  animation-delay: 18s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(63):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(64) {
  width: 1px;
  height: 1px;
  left: 117px;
  top: 153px;
  animation: twinkle64 11s linear infinite;
  animation-delay: 16s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(64):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(65) {
  width: 3px;
  height: 3px;
  left: 326px;
  top: 219px;
  animation: twinkle65 9s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(65):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(66) {
  width: 2px;
  height: 2px;
  left: 267px;
  top: 48px;
  animation: twinkle66 12s linear infinite;
  animation-delay: 9s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(66):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(67) {
  width: 3px;
  height: 3px;
  left: 235px;
  top: 31px;
  animation: twinkle67 11s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(67):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(68) {
  width: 2px;
  height: 2px;
  left: 72px;
  top: 300px;
  animation: twinkle68 8s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(68):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(69) {
  width: 2px;
  height: 2px;
  left: 6px;
  top: 196px;
  animation: twinkle69 7s linear infinite;
  animation-delay: 5s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(69):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(70) {
  width: 3px;
  height: 3px;
  left: 297px;
  top: 57px;
  animation: twinkle70 12s linear infinite;
  animation-delay: 11s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(70):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(71) {
  width: 3px;
  height: 3px;
  left: 134px;
  top: 58px;
  animation: twinkle71 6s linear infinite;
  animation-delay: 8s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(71):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(72) {
  width: 3px;
  height: 3px;
  left: 177px;
  top: 289px;
  animation: twinkle72 8s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(72):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(73) {
  width: 1px;
  height: 1px;
  left: 258px;
  top: 177px;
  animation: twinkle73 10s linear infinite;
  animation-delay: 14s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(73):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(74) {
  width: 3px;
  height: 3px;
  left: 185px;
  top: 230px;
  animation: twinkle74 6s linear infinite;
  animation-delay: 14s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(74):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(75) {
  width: 3px;
  height: 3px;
  left: 269px;
  top: 303px;
  animation: twinkle75 13s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(75):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(76) {
  width: 2px;
  height: 2px;
  left: 378px;
  top: 153px;
  animation: twinkle76 9s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(76):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(77) {
  width: 1px;
  height: 1px;
  left: 104px;
  top: 292px;
  animation: twinkle77 10s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(77):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(78) {
  width: 3px;
  height: 3px;
  left: 294px;
  top: 192px;
  animation: twinkle78 6s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(78):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(79) {
  width: 2px;
  height: 2px;
  left: 343px;
  top: 176px;
  animation: twinkle79 12s linear infinite;
  animation-delay: 14s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(79):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(80) {
  width: 2px;
  height: 2px;
  left: 295px;
  top: 288px;
  animation: twinkle80 8s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(80):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(81) {
  width: 1px;
  height: 1px;
  left: 124px;
  top: 279px;
  animation: twinkle81 10s linear infinite;
  animation-delay: 12s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(81):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(82) {
  width: 1px;
  height: 1px;
  left: 120px;
  top: 88px;
  animation: twinkle82 8s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(82):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(83) {
  width: 2px;
  height: 2px;
  left: 119px;
  top: 321px;
  animation: twinkle83 7s linear infinite;
  animation-delay: 8s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(83):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(84) {
  width: 1px;
  height: 1px;
  left: 224px;
  top: 251px;
  animation: twinkle84 9s linear infinite;
  animation-delay: 9s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(84):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(85) {
  width: 3px;
  height: 3px;
  left: 82px;
  top: 180px;
  animation: twinkle85 6s linear infinite;
  animation-delay: 14s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(85):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(86) {
  width: 1px;
  height: 1px;
  left: 255px;
  top: 99px;
  animation: twinkle86 13s linear infinite;
  animation-delay: 9s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(86):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(87) {
  width: 1px;
  height: 1px;
  left: 323px;
  top: 290px;
  animation: twinkle87 7s linear infinite;
  animation-delay: 11s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(87):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(88) {
  width: 2px;
  height: 2px;
  left: 36px;
  top: 15px;
  animation: twinkle88 13s linear infinite;
  animation-delay: 6s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(88):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(89) {
  width: 2px;
  height: 2px;
  left: 145px;
  top: 305px;
  animation: twinkle89 11s linear infinite;
  animation-delay: 17s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(89):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(90) {
  width: 1px;
  height: 1px;
  left: 258px;
  top: 73px;
  animation: twinkle90 6s linear infinite;
  animation-delay: 15s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(90):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(91) {
  width: 3px;
  height: 3px;
  left: 213px;
  top: 131px;
  animation: twinkle91 6s linear infinite;
  animation-delay: 8s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(91):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(92) {
  width: 3px;
  height: 3px;
  left: 340px;
  top: 99px;
  animation: twinkle92 11s linear infinite;
  animation-delay: 5s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(92):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(93) {
  width: 3px;
  height: 3px;
  left: 88px;
  top: 280px;
  animation: twinkle93 8s linear infinite;
  animation-delay: 16s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(93):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(94) {
  width: 1px;
  height: 1px;
  left: 92px;
  top: 345px;
  animation: twinkle94 7s linear infinite;
  animation-delay: 17s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(94):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(95) {
  width: 3px;
  height: 3px;
  left: 194px;
  top: 294px;
  animation: twinkle95 8s linear infinite;
  animation-delay: 7s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(95):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(96) {
  width: 2px;
  height: 2px;
  left: 69px;
  top: 322px;
  animation: twinkle96 6s linear infinite;
  animation-delay: 13s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(96):before {
  content: "";
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(97) {
  width: 1px;
  height: 1px;
  left: 345px;
  top: 43px;
  animation: twinkle97 10s linear infinite;
  animation-delay: 13s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(97):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(98) {
  width: 3px;
  height: 3px;
  left: 155px;
  top: 259px;
  animation: twinkle98 11s linear infinite;
  animation-delay: 4s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(98):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(99) {
  width: 3px;
  height: 3px;
  left: 45px;
  top: 321px;
  animation: twinkle99 9s linear infinite;
  animation-delay: 16s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(99):before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(100) {
  width: 1px;
  height: 1px;
  left: 124px;
  top: 80px;
  animation: twinkle100 12s linear infinite;
  animation-delay: 17s;
}
.wrapper .window_group .window_404 .stars .star:nth-of-type(100):before {
  content: "";
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  filter: blur(1px);
}

@keyframes twinkle1 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle2 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle3 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle4 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle5 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle6 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle7 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle8 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle9 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle10 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle11 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle12 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle13 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle14 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle15 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle16 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle17 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle18 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle19 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle20 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle21 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle22 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle23 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle24 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle25 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle26 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle27 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle28 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle29 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle30 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle31 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle32 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle33 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle34 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle35 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle36 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle37 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle38 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle39 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle40 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle41 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle42 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle43 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle44 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle45 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle46 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle47 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle48 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle49 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle50 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle51 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle52 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle53 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle54 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle55 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle56 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle57 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle58 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle59 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle60 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle61 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle62 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle63 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle64 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle65 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle66 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle67 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle68 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle69 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle70 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle71 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle72 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle73 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle74 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle75 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle76 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle77 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle78 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle79 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle80 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle81 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle82 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle83 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle84 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle85 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle86 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle87 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle88 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle89 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle90 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle91 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle92 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle93 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle94 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle95 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle96 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle97 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle98 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle99 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes twinkle100 {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(0.3, 0.3);
  }
  20% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(0.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes flyby {
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
}
@media only screen and (min-width: 1080px) {
  .wrapper .text_group {
    flex: 0 0 30%;
    margin-left: 25%;
    align-items: flex-end;
  }
  .wrapper .window_group {
    flex: 1 0 40%;
    margin-top: 0;
    margin-left: 5%;
  }
}
@media only screen and (max-width: 1079px) {
  .wrapper .text_group {
    flex: 0 0 100%;
    margin: 0;
    align-items: center;
  }
  .wrapper .text_group .text_lost {
    width: 100%;
    padding: 0 10px;
    font-size: 1.7em;
    line-height: 35px;
  }
  .wrapper .window_group {
    flex: 0 0 100%;
  }
  .wrapper .window_group .window_404 {
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
  }
}

        </style>

        `
};


