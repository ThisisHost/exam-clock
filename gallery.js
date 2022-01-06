/* 
 * 背景切换
 */
var gallery = [
  { volname: "默认", author: ["宝鸡中学官网"], pic: [{ name: "campus", xwzbid: "e6e5b4e8e80debb10e61f854696cef7f" }, { name: "autumn", xwzbid: "da07a39c238357f9c39e5717b8a9c8f9" },] },
  { volname: "2021年11月", author: ["2312张峻嘉"], pic: [{ name: "211101_绩笑_窗边", xwzbid: "ad57061c5331004aa903a538e60ce6f6" }, { name: "211102_绩笑_书堆", xwzbid: "3e3c8cfccf6f1fbd5dca012da616f94a" }, { name: "211103_绩笑_讲台", xwzbid: "c10719e3cf6fb335b3be8bf91fb91da3" }, { name: "211104_绩笑_课桌", xwzbid: "84ebd03a1fa73c3cf8c545adf7a61003" }, { name: "211105_绩笑_商店", xwzbid: "c8030ebcf54a299ec68a0d7714c3079e" }, { name: "211106_绩笑_云层", xwzbid: "8c02d70150f0d44bd12c8dd78cfe8e0b" }, { name: "211107_绩笑_蒲公英", xwzbid: "06a9213ddf6c271efb5f362599c3a0a7" },] },
  { volname: "2021年12月①期", author: ["2222王一苇", "2215史晓芳", "2205康亦菲", "2203袁瑜彤", "2216赵凌玥", "2210龚泽城"], pic: [{ name: "211201_純粋な_校门", xwzbid: "ffe43161091c3e086c0c757513938708" }, { name: "211202_純粋な_楼顶", xwzbid: "8e10d9dd4dfe9673813fd3380e45d174" }, { name: "211203_純粋な_操场", xwzbid: "79d1d64ad68cc39a4f4f658cc1c86dd4" }, { name: "211204_純粋な_广场", xwzbid: "655996e17525aec70a552349bbff0158" }, { name: "211205_齐天_书桌", xwzbid: "9f1f737065468006c5b38ab3b16684b7" }, { name: "211206_云山_环道", xwzbid: "d689b757ce6c36ead44ab44d7680f387" }, { name: "211207_Echo_云海", xwzbid: "16a660a4e4151664fabcd933830fc66b" }, { name: "211208_Echo_楼顶", xwzbid: "f0347b55687558faedf4fcef68bd198d" }, { name: "211209_Echo_杨树林", xwzbid: "183f64fe28824c645f25d31a65bfb9a3" }, { name: "211210_Echo_操场", xwzbid: "def64788d6b39f9317a1138df0f1e3b9" }, { name: "211211_Echo_楼道", xwzbid: "c637b572159025a80ac59ea89daddfa1" }, { name: "211212_Echo_水杉", xwzbid: "283b282532369cff4dc08cbab06728eb" }, { name: "211213_凌球_雪松", xwzbid: "8f63d50aaf96d9f6ad0ec95e8f85f4a5" }, { name: "211214_北盼城南烟花繁_日落", xwzbid: "90c10f637fe3b7300f34fe093e625cd7" }, { name: "211215_北盼城南烟花繁_楼道", xwzbid: "50a6aac0b92c42889c502c450089c5d4" }, { name: "211216_北盼城南烟花繁_兼程", xwzbid: "0f0c9d868e6c1fd2a421daaab42d40c3" },] },
  { volname: "2021年12月②期", author: ["2203张家云", "2211魏欣瑶", "2204郑笑然"], pic: [{ name: "211217_小佗_紫叶李", xwzbid: "3dd9e1d14e00d30be6788c3c7e791825" }, { name: "211218_小佗_银杏", xwzbid: "d3e1e44a52d431c3db18956ac0e9bb5a" }, { name: "211219_小佗_复羽叶栾树", xwzbid: "9c3bf1777cbae93cd8fd2ea4be6c0882" }, { name: "211220_小佗_云海", xwzbid: "e0b08330ddb922b237d5abfeac533d8a" }, { name: "211221_小佗_合欢花", xwzbid: "62883665ddfa464d974a26e71f14a785" }, { name: "211222_小佗_梅", xwzbid: "837ea0c0bcf79ff942eb7a5207371b6a" }, { name: "211223_小佗_合欢", xwzbid: "f7aa6954c006e7aec0f27f165860a08c" }, { name: "211224_小佗_紫叶李", xwzbid: "493d51e87092698ede2d60e7b163c054" }, { name: "211225_小佗_操场", xwzbid: "b211467545e5f09e693849584c052a98" }, { name: "211226_小佗_幕墙与树", xwzbid: "96b4ecbb376b43e757f4cba5e9014e97" }, { name: "211227_小佗_篮球架", xwzbid: "d7b20ec4149b9a021382969fabae8a2e" }, { name: "211228_小佗_永远热爱", xwzbid: "d90dff621e86a8823fad14e10a0e19cd" }, { name: "211229_姚小瑶_云", xwzbid: "73ef8cf22f34cb1cce637858ebe6f823" }, { name: "211230_姚小瑶_运动会", xwzbid: "0dbb9156e678aa0ff5d69bec04918279" }, { name: "211231_暮草兮'_龙棕", xwzbid: "17164c2b8293ea432c67f62f965ff5eb" },] },
  { volname: "2021年12月③期", author: ["2201李欣源", "2215刘辰靖"], pic: [{ name: "211232_Stars_操场", xwzbid: "d48b74b952603771a200c84ef987bceb" }, { name: "211233_Stars_广场", xwzbid: "8e2bab626390aa6c028c8c11c1ba4ed1" }, { name: "211234_Stars_操场的云", xwzbid: "f4bc39ce9dabf094144ede0f9aa6a14e" }, { name: "211235_Stars_云与合欢", xwzbid: "c7c7a922db451d29d7c59594772ae1de" }, { name: "211236_靖靖子_夕晖", xwzbid: "2b7dd636bc86d45d59b3315312d41231" }, { name: "211237_靖靖子_不落", xwzbid: "9efaae46b92844286176d5c59564b84b" }, { name: "211238_靖靖子_夕云", xwzbid: "627489cebe36f3d4deb35e81be6de23e" }, { name: "211239_靖靖子_运动会", xwzbid: "0a30aa1d60450824ebbcda1e0ec07987" }, { name: "211240_靖靖子_金叶女贞", xwzbid: "43587a6d8b599ad74faf07a7e6db0bac" }, { name: "211241_靖靖子_教室后", xwzbid: "3723ab6fa16c6fcfb77a44750cce82ec" }, { name: "211242_靖靖子_对面宿舍", xwzbid: "f98487cf34fd3f2c46955d7d96d52792" }, { name: "211243_靖靖子_书架", xwzbid: "9c5595051c1efa899d4cb631c98fbd3c" }, { name: "211244_靖靖子_楼外楼", xwzbid: "60f04203cd77c2edd3d0649b0730b7c3" }, { name: "211245_靖靖子_讲桌下", xwzbid: "7edd089e817c0e0760fa31022a119827" }, { name: "211246_靖靖子_谁的课桌", xwzbid: "b92d78904365196b62671f6ae18c783d" }, { name: "211247_靖靖子_午间", xwzbid: "5e4ca1325b1131b9033692d54b560b64" }, { name: "211248_靖靖子_货架", xwzbid: "840afd0bef2f8e7db8902f682a01c3bf" }, { name: "211249_靖靖子_这又是谁的课桌", xwzbid: "133043b71104bcfd3857fb7a1c37f934" }] },
  { volname: "2021年12月④期", author: ["2203郑小雨"], pic: [{ name: "211250_秤砣_墙上", xwzbid: "cd6c6646c287c61186a8dc8e9a37c122" }, { name: "211251_秤砣_捉光", xwzbid: "e784b18a14ee01a346cbe5b3dcb9d2fa" }, { name: "211252_秤砣_楼间松", xwzbid: "0accbbd75a7e388c49570c8b7942b60f" }, { name: "211253_秤砣_栾树外", xwzbid: "cc64de25816d74e1c331aa742c908ae6" }, { name: "211254_秤砣_枫香树下", xwzbid: "8978baa3db6e135df052ce27cd275119" }, { name: "211255_秤砣_鳞状云", xwzbid: "b488e5316d3f9d618238513b87eba901" }, { name: "211256_秤砣_第二场雪", xwzbid: "ea1b46a7492764684940a21c0a330cfa" }, { name: "211257_秤砣_外立面", xwzbid: "58f5c3cbbe3b9a8f3c30ee187c8d86bc" }, { name: "211258_秤砣_放飞气球", xwzbid: "3f364038682a6e14fa979cec7ab1f537" }, { name: "211259_秤砣_气球外的梦", xwzbid: "6a6817decfb67e533f6233973391de4f" }, { name: "211260_秤砣_远方的灯", xwzbid: "8b3e96da5f9815accda9d45a7b1ad934" }, { name: "211261_秤砣_晴", xwzbid: "eb33091a563ffcc451f2a7e0110b91a5" }, { name: "211262_秤砣_月", xwzbid: "984018fb175143bbfaf789cf0482c382" },] },
  { volname: "2021年末补充", author: ["2210龚泽城", "2225安睿琦", "2210李维钒"], pic: [{ name: "211263_北盼城南烟花繁_看操场", xwzbid: "e7cdfcb8c3d6e9a5e40500cfd06dfb07" }, { name: "211264_北盼城南烟花繁_球场", xwzbid: "4e13762feb990cd70f7c85202f79c602" }, { name: "211265_东隅_日出", xwzbid: "42e670813470264ab26564603cb339b4" }, { name: "211266_东隅_对面", xwzbid: "892e21899186de12922f1c3637eba077" }, { name: "211267_东隅_操场与日落", xwzbid: "02d88527ad0c8c52bc1783c913b3f40b" }, { name: "211268_SuperR1SE_一框", xwzbid: "af5aff6617de43af5e02427a7e47b917" }, { name: "211269_SuperR1SE_背后", xwzbid: "128c64fa0b384652dcc1927ffc177349" }, { name: "211270_SuperR1SE_日", xwzbid: "5e0180e07eefbe0111f6190047f13f66" },] },
  { volname: "2022年1月①期", author: ["2205董家亦", "2219郎国璇"], pic: [{ name: "220101_亦_于云出", xwzbid: "b541338cf74529c25c2bdc49bc60a0e7" }, { name: "220102_亦_楼与楼", xwzbid: "3779bba383ac9bac48edb3b5f985ec7c" }, { name: "220103_亦_看台上", xwzbid: "c3466dba45a7cd5d994239864c3337fa" }, { name: "220104_亦_球场的黄昏", xwzbid: "a77709bdf5e66108d01df9d2e0ec574c" }, { name: "220105_亦_旗杆与云海", xwzbid: "e9c907be322c6ccb1fb12a758c077118" }, { name: "220106_亦_操场", xwzbid: "a9905c6f35a0ce234c445047ba6831ac" }, { name: "220107_亦_绚", xwzbid: "028e6b27082a3f639cd76cf2412c3870" }, { name: "220108_亦_霞", xwzbid: "8399df720705576b96b3fa5614b20a0f" }, { name: "220109_亦_天空之下是热爱", xwzbid: "3fb8a659e3f007028ed6a883feb2c826" }, { name: "220110_亦_射者中", xwzbid: "880c7bab6ff2758e613026061057b66d" }, { name: "220111_亦_胶囊仓降落台", xwzbid: "5281c3afcfc0ed009ad30e0ce904e2b1" }, { name: "220112_泡泡_捉云", xwzbid: "5f86951f06b25fe14bf64eacfd9b98d7" }, { name: "220113_泡泡_云上冲浪", xwzbid: "f0f626c3c35de4fbfce1e559239f05be" }, { name: "220114_泡泡_日落于东", xwzbid: "da54edf43f49d0787be388214595f0d9" }, { name: "220115_泡泡_饱和度战士", xwzbid: "726df029cc3363b74b4ebf6735e3a7a1" },] },
  { volname: "2022年1月②期", author: ["2216吴滢羽", "2210李维钒"], pic: [{ name: "220116_吴鸭鸭_艺术节的夜", xwzbid: "f8a8b60d377a67ccc84a4b7fdeddbd2d" }, { name: "220117_吴鸭鸭_落日与晚风", xwzbid: "44843696ffc75688134a689b2fe8208d" }, { name: "220118_吴鸭鸭_校庆人海", xwzbid: "288b4ac91a4c8ba1ccc44844e2b444c7" }, { name: "220119_吴鸭鸭_校庆幕后", xwzbid: "39005bc4839eef48712d66869bb00774" }, { name: "220120_SuperR1SE_广场", xwzbid: "970e5ad16c4d9bd5610146813a572ef3" }, { name: "220121_SuperR1SE_球场", xwzbid: "092ea5b17974b750e3497af6a9a4dc5e" },] },
];
var $volnum = [4, 5, 6, 6, 7, 7, 7, 8, 8];
var bgInterval;
function bg(volnum, picseed) {
  try {
    // 若同时以new Date()作为volnum和picseed的随机种子，会产生特定的余数对应关系
    if (volnum == null) volnum = $volnum[~~(Math.random() * $volnum.length)];
    if (picseed == null) picseed = ~~(Math.random() * gallery[volnum].pic.length);
    document.documentElement.style.backgroundImage = "url(https://images.xuewuzhibu.cn/" + gallery[volnum].pic[picseed % (gallery[volnum].pic.length)].xwzbid + ".jpg)";
    // 定时换壁纸（康总加成🙏）
    clearInterval(bgInterval);
    bgInterval = setInterval(bg, 2004 * 0411);
    send(output("bg", "背景: " + gallery[volnum].pic[picseed % (gallery[volnum].pic.length)].name + "@" + gallery[volnum].volname) + " <span class='dim'>内部代码bg(" + volnum + "," + picseed % (gallery[volnum].pic.length) + ") 在右键菜单可指定背景，使用须遵守<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh'> CC BY-NC-SA 4.0 </a>许可。</div>");
  } catch (e) {
    console.warn(send("主背景函数出错，已启用备用背景。\n") + e);
    eleMain.style.background = "rgba(0,0,0,0.75)";
    switch (volnum % 3) {
      case 0: document.getElementsByTagName('html')[0].style.backgroundImage = 'url(' + prompt('输入背景url') + ')'; break;
      case 1: document.documentElement.style.backgroundImage = "url(https://bu.dusays.com/2021/11/23/" + ['9dd5f0f9ae39c', '86f0354849ead', 'aef07ee202d3c', 'a3676bbf32d4e', '4b347391fec34', 'b1a6b10044d7e', '10f58d6677aeb'][picseed % 7] + ".jpg)"; break;
      case 2: document.documentElement.style.backgroundImage = "url(https://bu.dusays.com/2021/12/19/" + ['0e34aef718e53', 'cbb7ca9f47a46', 'd9daedc01bca6', '2ecfe0c8ff887', '8a1d489af0279', '12479fb170d16', '9b17e5fffdb73', 'cad676f747c56', 'eaf02f09741ea', 'c03de66f3cef0', '84a92ddf8c5c8', '6b4b98bd96ee2', '0b91c8d48bbb0'][picseed % 13] + ".jpg)"; break;
      default: document.documentElement.style.backgroundImage = eleMain.style.background = "";
    }
  }
}
bg();
output("bglist", function () {
  for (var l = '<!-- 通过style.js生成的历史背景树状目录 -->\n', v = 0; v < gallery.length; v++) {
    l += '  <div class="dropdown">' + gallery[v].volname + '\n    <div style="min-width:16em;overflow-y:auto;">\n';
    for (picnum = 0; picnum < gallery[v].pic.length; picnum++) {
      l += '      <a onclick="bg(' + v + ',' + picnum + ')">' + gallery[v].pic[picnum].name + '</a>\n';
    }
    l += '    </div>\n </div>\n';
  }
  return l;
}());
