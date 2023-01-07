/* 
 * 背景切换
 */
var gallery = [
  { vol: "2021年11月", author: ["2312张峻嘉"], list: [{ name: "211101_绩笑_窗边", id: "2/04/04/kBiwl" }, { name: "211102_绩笑_书堆", id: "2/04/04/kB11g" }, { name: "211103_绩笑_讲台", id: "2/04/04/kBFKP" }, { name: "211104_绩笑_课桌", id: "2/04/04/kBz56" }, { name: "211105_绩笑_商店", id: "2/04/04/kBh0b" }, { name: "211106_绩笑_云层", id: "2/04/04/kB7HB" }, { name: "211107_绩笑_蒲公英", id: "2/04/04/kBN8s" },] },
  { vol: "2021年12月①期", author: ["2222王一苇", "2215史晓芳", "2205康亦菲", "2203袁瑜彤", "2216赵凌玥", "2210龚泽城"], list: [{ name: "211201_純粋な_校门", id: "2/04/04/kBrxK" }, { name: "211202_純粋な_楼顶", id: "2/04/04/kBAJa" }, { name: "211203_純粋な_操场", id: "2/04/04/kBKfS" }, { name: "211204_純粋な_广场", id: "2/04/04/kBvBN" }, { name: "211205_齐天_书桌", id: "2/04/04/kByKC" }, { name: "211206_云山_环道", id: "2/04/04/kBg0L" }, { name: "211207_Echo_云海", id: "2/04/04/kBpMi" }, { name: "211208_Echo_楼顶", id: "2/04/04/kBJ1X" }, { name: "211209_Echo_幕影", id: "2/04/04/kBPHt" }, { name: "211210_Echo_操场", id: "2/04/04/kBRXx" }, { name: "211211_Echo_楼道", id: "2/04/04/kB4xj" }, { name: "211212_Echo_水杉", id: "2/04/04/kBDJp" }, { name: "211213_凌球_雪松", id: "2/04/04/kBHlU" }, { name: "211214_北盼城南烟花繁_日落", id: "2/04/04/kBEBY" }, { name: "211215_北盼城南烟花繁_楼道", id: "2/04/04/kBGZv" }, { name: "211216_北盼城南烟花繁_兼程", id: "2/04/04/kBQcq" },] },
  { vol: "2021年12月②期", author: ["2203张家云", "2211魏欣瑶", "2204郑笑然"], list: [{ name: "211217_小佗_紫叶李", id: "2/04/04/kB0Mc" }, { name: "211218_小佗_银杏", id: "2/04/04/kTXgU" }, { name: "211219_小佗_复羽叶栾树", id: "2/04/04/kTusY" }, { name: "211220_小佗_云海", id: "2/04/04/kTjtx" }, { name: "211221_小佗_合欢花", id: "2/04/04/kT2jj" }, { name: "211222_小佗_梅", id: "2/04/04/kT8Wp" }, { name: "211223_小佗_合欢", id: "2/04/04/kT3ov" }, { name: "211224_小佗_紫叶李", id: "2/04/04/kTCrq" }, { name: "211225_小佗_操场", id: "2/04/04/kTwGc" }, { name: "211226_小佗_幕墙与树", id: "2/04/04/kUM3r" }, { name: "211227_小佗_篮球架", id: "2/04/04/kUaiM" }, { name: "211228_小佗_永远热爱", id: "2/04/04/kUotG" }, { name: "211229_姚小瑶_云", id: "2/04/04/kUq21" }, { name: "211230_姚小瑶_运动会", id: "2/04/04/kUBWI" }, { name: "211231_暮草兮_龙棕", id: "2/04/04/kUTgD" },] },
  { vol: "2021年12月③期", author: ["2201李欣源", "2215刘辰靖"], list: [{ name: "211232_Stars_操场", id: "2/04/04/kUUVF" }, { name: "211233_Stars_广场", id: "2/04/04/kUbo6" }, { name: "211234_Stars_操场的云", id: "2/04/04/kUkrP" }, { name: "211235_Stars_云与合欢", id: "2/04/04/kUKrC" }, { name: "211236_靖靖子_夕晖", id: "2/04/04/kUZQL" }, { name: "211237_靖靖子_不落", id: "2/04/04/kUvCi" }, { name: "211238_靖靖子_夕云", id: "2/04/04/kUgiX" }, { name: "211239_靖靖子_运动会", id: "2/04/04/kUm4t" }, { name: "211240_靖靖子_金叶女贞", id: "2/04/04/kUp6x" }, { name: "211241_靖靖子_教室后", id: "2/04/04/kUPbj" }, { name: "211242_靖靖子_对面宿舍", id: "2/04/04/kUtYU" }, { name: "211243_靖靖子_书架", id: "2/04/04/kURmp" }, { name: "211244_靖靖子_楼外楼", id: "2/04/04/kUDqY" }, { name: "211245_靖靖子_讲桌下", id: "2/04/04/kUHAv" }, { name: "211246_靖靖子_谁的课桌", id: "2/04/04/kUz3l" }, { name: "211247_靖靖子_午间", id: "2/04/04/kUhig" }, { name: "211248_靖靖子_货架", id: "2/04/04/kUn2s" }, { name: "211249_靖靖子_这又是谁的课桌", id: "2/04/04/kUxQb" }] },
  { vol: "2021年12月④期", author: ["2203郑小雨"], list: [{ name: "211250_秤砣_墙上", id: "2/04/04/kUi4B" }, { name: "211251_秤砣_捉光", id: "2/04/04/kU7bK" }, { name: "211252_秤砣_楼间松", id: "2/04/04/kUNma" }, { name: "211253_秤砣_栾树外", id: "2/04/04/kUeVS" }, { name: "211254_秤砣_枫香树下", id: "2/04/04/kUAqN" }, { name: "211255_秤砣_鳞状云", id: "2/04/04/kULSq" }, { name: "211256_秤砣_第二场雪", id: "2/04/04/kU06G" }, { name: "211257_秤砣_外立面", id: "2/04/04/kUECc" }, { name: "211258_秤砣_放飞气球", id: "2/04/04/kUSDM" }, { name: "211259_秤砣_气球外的梦", id: "2/04/04/kUQnr" }, { name: "211260_秤砣_远方的灯", id: "2/04/04/kUdk1" }, { name: "211261_秤砣_晴", id: "2/04/04/kUf5F" }, { name: "211262_秤砣_月", id: "2/04/04/kUsmI" },] },
  { vol: "2021年末补充", author: ["2210龚泽城", "2225安睿琦", "2210李维钒"], list: [{ name: "211263_北盼城南烟花繁_看操场", id: "2/04/04/kUVYD" }, { name: "211264_北盼城南烟花繁_球场", id: "2/04/04/kUlA6" }, { name: "211265_东隅_日出", id: "2/04/04/kU9SP" }, { name: "211266_东隅_对面", id: "2/04/04/kUjwb" }, { name: "211267_东隅_操场与日落", id: "2/04/04/kU6nl" }, { name: "211268_SuperR1SE_一框", id: "2/04/04/kU8Dg" }, { name: "211269_SuperR1SE_背后", id: "2/04/04/kUX8B" }, { name: "211270_SuperR1SE_日", id: "2/04/04/kUIks" },] },
  { vol: "2022年1月①期", author: ["2205董家亦", "2219郎国璇"], list: [{ name: "220101_亦_于云出", id: "2/04/04/kWOKN" }, { name: "220102_亦_楼与楼", id: "2/04/04/kWM5S" }, { name: "220103_亦_看台上", id: "2/04/04/kWaSC" }, { name: "220104_亦_球场的黄昏", id: "2/04/04/kUCfa" }, { name: "220105_亦_旗杆与云海", id: "2/04/04/kU3pK" }, { name: "220106_亦_操场", id: "2/04/04/kW51i" }, { name: "220107_亦_绚", id: "2/04/04/kWowL" }, { name: "220108_亦_霞", id: "2/04/04/kWBDX" }, { name: "220109_亦_天空之下是热爱", id: "2/04/04/kWT8t" }, { name: "220110_亦_射者中", id: "2/04/04/kWWxx" }, { name: "220111_亦_胶囊仓降落台", id: "2/04/04/kWbpj" }, { name: "220112_泡泡_捉云", id: "2/04/04/kWkfp" }, { name: "220113_泡泡_云上冲浪", id: "2/04/04/kWzBU" }, { name: "220114_泡泡_日落于东", id: "2/04/04/kWFKY" }, { name: "220115_泡泡_饱和度战士", id: "2/04/04/kWh0v" },] },
  { vol: "2022年1月②期", author: ["2216吴滢羽", "2210李维钒", "2216刘子璐", "2219杜碧涵"], list: [{ name: "220116_吴鸭鸭_艺术节的夜", id: "2/04/04/kWnMq" }, { name: "220117_吴鸭鸭_落日与晚风", id: "2/04/04/kW11c" }, { name: "220118_吴鸭鸭_校庆人海", id: "2/04/04/kW7Hr" }, { name: "220119_吴鸭鸭_校庆幕后", id: "2/04/04/kWNXM" }, { name: "220120_SuperR1SE_广场", id: "2/04/04/kWrxG" }, { name: "220121_SuperR1SE_球场", id: "2/04/04/kWAJ1" }, { name: "220122_纸某鹿_浪漫了整片天", id: "2/04/04/kWKfI" }, { name: "220123_纸某鹿_云之形", id: "2/04/04/kkBbx" }, { name: "220124_纸某鹿_持不稳的黄昏", id: "2/04/04/kkTgj" }, { name: "220125_木鱼_欢庆之夜", id: "2/04/04/kkotX" }, { name: "220126_木鱼_虹", id: "2/04/04/kkq2t" },] },
  { vol: "2022年1月③期", author: ["2226刘一可"], list: [{ name: "220126_派小星_光帆", id: "2/04/04/kkaii" }, { name: "220127_派小星_摘", id: "2/04/04/kkUVp" }, { name: "220128_派小星_觅", id: "2/04/04/kkbqU" }, { name: "220129_派小星_镜中云", id: "2/04/04/kkkrY" }, { name: "220130_派小星_叶影", id: "2/04/04/kkxQv" }, { name: "220131_派小星_镶", id: "2/04/04/kkzCq" }, { name: "220132_派小星_遇", id: "2/04/04/kkhic" }, { name: "220133_派小星_路迹", id: "2/04/04/kki4r" }, { name: "220134_派小星_映", id: "2/04/04/kkn6M" }, { name: "220135_派小星_雨过", id: "2/04/04/kk7bG" }, { name: "220136_派小星_覆云", id: "2/04/04/kkNm1" }, { name: "220137_派小星_楼", id: "2/04/04/kkeVI" },] },
  { vol: "2022年1月④期", author: ["2221王楷超"], list: [{ name: "220138_古怪_某人的杯子", id: "2/04/04/kkZQ6" }, { name: "220139_古怪_桌上的笔袋", id: "2/04/04/kkKAF" }, { name: "220140_古怪_讲台前的杯子", id: "2/04/04/kkvCP" }, { name: "220141_古怪_打球的少年们", id: "2/04/04/kkgnb" }, { name: "220142_古怪_阳光直射的地方", id: "2/04/04/kkAqD" }, { name: "220143_古怪_空虚的走廊", id: "2/04/04/kkm4l" }, { name: "220144_古怪_神奇的房间", id: "2/04/04/kkp6g" }, { name: "220145_古怪_死里卷", id: "2/04/04/kkPkB" }, { name: "220146_古怪_古怪的笔袋", id: "2/04/04/kkRms" }, { name: "220147_古怪_午间的书桌", id: "2/04/04/kktYK" }, { name: "220148_古怪_凌乱的课桌", id: "2/04/04/kkD5a" }, { name: "220149_古怪_我不知道起什么名字了", id: "2/04/04/kkHAS" }, { name: "220150_古怪_剩余的143天", id: "2/04/04/kkLSN" }, { name: "220151_古怪_那边的兼程楼", id: "2/04/04/kkECC" }, { name: "220152_古怪_周六的街道", id: "2/04/04/kkQnL" },] },
  { vol: "2022年2月①期", author: ["2314郭姝含", "2226?张若旭"], list: [{ name: "220201_一棵果树_云树", id: "2/04/04/kkSDi" }, { name: "220202_一棵果树_团", id: "2/04/04/kk06X" }, { name: "220203_一棵果树_驾一叶", id: "2/04/04/kkdkt" }, { name: "220204_一棵果树_艺术", id: "2/04/04/kkspx" }, { name: "220205_一棵果树_漾", id: "2/04/04/kkVYj" }, { name: "220206_一棵果树_霞", id: "2/04/04/kkf5p" }, { name: "220207_抓旭_叶间", id: "2/04/04/kkjwv" }, { name: "220208_抓旭_云帘", id: "2/04/04/kk9SY" }, { name: "220209_抓旭_望月", id: "2/04/04/kklKU" }, { name: "220210_抓旭_海中树", id: "2/04/04/kk61q" }, { name: "220211_抓旭_微夏", id: "2/04/04/kkX8r" }, { name: "220212_抓旭_云生", id: "2/04/04/kkIxM" }, { name: "220213_抓旭_天之纹", id: "2/04/04/kk3pG" }, { name: "220214_抓旭_光迹", id: "2/04/04/kkCf1" }, { name: "220215_抓旭_行路", id: "2/04/04/kxM5I" }, { name: "220216_抓旭_树下", id: "2/04/04/kxOKD" },] },
  { vol: "2022年2月②期", author: ["2221王楷超"], list: [{ name: "220217_古怪_相机水印忘关了", id: "2/04/04/kxa0F" }, { name: "220218_古怪_傍晚", id: "2/04/04/kxow6" }, { name: "220219_古怪_植被颜色是不是太深了", id: "2/04/04/kx51P" }, { name: "220220_古怪_这张忘了拍的是哪了", id: "2/04/04/kxBHb" }, { name: "220221_古怪_Lightroom改的天空", id: "2/04/04/kxT8l" }, { name: "220222_古怪_回村的小路", id: "2/04/04/kxWxg" }, { name: "220223_古怪_等等，这是哪来着，我又忘了", id: "2/04/04/kxbJB" }, { name: "220224_古怪_千万别细看这张", id: "2/04/04/kxkfs" }, { name: "220225_古怪_再不走就快天黑了", id: "2/04/04/kxzBK" }, { name: "220226_古怪_话说山和坡的区别是啥", id: "2/04/04/kxFZa" }, { name: "220227_古怪_你知道水塔在哪吗？", id: "2/04/04/kxh0S" }, { name: "220228_古怪_这张好黑啊", id: "2/04/04/kk8Dc" }, { name: "220229_古怪_呃，写不出来名字了，那就叫无题吧", id: "2/04/04/kx11C" }, { name: "220230_古怪_平淡无奇的一张", id: "2/04/04/kxnMN" }, { name: "220231_古怪_不知名公园", id: "2/04/04/kxNXi" },] },
  { vol: "2022年2月末~3月", author: ["2216孙子萱", "2125吴子建", "2309李羽凡"], list: [{ name: "220232_太阳_松", id: "2/04/04/kxrxX" }, { name: "220233_太阳_雪与外立面", id: "2/04/04/kx7HL" }, { name: "220234_太阳_柳下", id: "2/04/04/kxAJt" }, { name: "220235_太阳_窗间", id: "2/04/04/kxKlx" }, { name: "220236_太阳_漫雪", id: "2/04/04/kxvBj" }, { name: "220237_太阳_余晖", id: "2/04/04/kxyZp" }, { name: "220301_Telsaの的折耳猫_赛场", id: "2/04/04/kxgcU" }, { name: "220302_Telsaの的折耳猫_树林", id: "2/04/04/kxpMY" }, { name: "220303_Telsaの的折耳猫_操场", id: "2/04/04/kxJ7v" }, { name: "220304_Ivana_从窗而来", id: "2/04/04/kxPLq" }, { name: "220305_Ivana_与黑板", id: "2/04/04/kxRXc" }, { name: "220306_Ivana_许久不见", id: "2/04/04/kx4zr" },] },
  { vol: "2022年4月①期", author: ["2226何欣怡", "2309孙瑄梓", "2215?"], list: [{ name: "220401_梦颜_窗边的", id: "2/04/04/kxGZI" }, { name: "220402_梦颜_所盼", id: "2/04/04/kxET1" }, { name: "220403_酸子_牡丹", id: "2/04/04/kx0OF" }, { name: "220404_酸子_压枝", id: "2/04/04/kxc76" }, { name: "220405_酸子_纹", id: "2/04/04/kxQcD" }, { name: "220406_酸子_花间", id: "2/04/04/kxdLP" }, { name: "220407_酸子_园中", id: "2/04/04/kxsub" }, { name: "220408_酸子_芽", id: "2/04/04/kxYzl" }, { name: "220409_夜枯_花落", id: "2/04/04/kxfPg" }, { name: "220410_夜枯_暝", id: "2/04/04/kxl9B" }, { name: "220411_夜枯_识月", id: "2/04/04/kxjTs" }, { name: "220412_夜枯_世间烂漫", id: "2/04/04/kx2vK" }, { name: "220413_夜枯_市光", id: "2/04/04/kx6da" }, { name: "220414_夜枯_飘雪", id: "2/04/04/kxXOS" }, { name: "220415_夜枯_染", id: "2/04/04/kxuNN" }, { name: "220416_夜枯_晨光", id: "2/04/04/kx3uL" }, { name: "220417_夜枯_上灯", id: "2/04/04/kxILC" }, { name: "220418_夜枯_扬", id: "2/04/04/kxwFi" }, { name: "220419_夜枯_晨", id: "2/04/04/kzMPX" }, { name: "220420_夜枯_眺", id: "2/04/04/kzO9t" }, { name: "220421_夜枯_将落", id: "2/04/04/kzoUx" }, { name: "220422_夜枯_未落", id: "2/04/04/kz5dp" }, { name: "220423_夜枯_正落", id: "2/04/04/kzqvj" }, { name: "220424_夜枯_升", id: "2/04/04/kzWEv" }, { name: "220425_夜枯_已落", id: "2/04/04/kzTaU" }, { name: "220426_夜枯_共徘徊", id: "2/04/04/kzUNY" }, { name: "220427_夜枯_虹", id: "2/04/04/kzbIq" }, { name: "220428_夜枯_鳞", id: "2/04/04/kzxFc" }, { name: "220429_夜枯_层", id: "2/04/04/kzzRr" }, { name: "220430_夜枯_绽樱", id: "2/04/04/kzFjM" }, { name: "220431_夜枯_读书吧", id: "2/04/04/kziUG" }, { name: "220432_夜枯_四月又至", id: "2/04/04/kzny1" },] },
  { vol: "2022年4月②期", author: ["?冯朝阳", "2216肖文琪", "2216王晟乾", "2424郭丙康", "24?毛璇", "2203张家云"], list: [{ name: "220433_℃_正盛", id: "2/04/06/kruYq" }, { name: "220434_℃_热爱", id: "2/04/06/krXmv" }, { name: "220435_即兴_熙攘", id: "2/04/06/kr26U" }, { name: "220436_即兴_归", id: "2/04/06/kr8bY" }, { name: "220437_即兴_向晚", id: "2/04/06/krj4p" }, { name: "220438_William_余日", id: "2/04/09/kHSkL" }, { name: "220439_William_望山", id: "2/04/09/kH0pi" }, { name: "220440_ttgz_花语", id: "2/04/09/kHG6C" }, { name: "220441_ttgz_樱花下", id: "2/04/09/kHs5t" }, { name: "220442_ttgz_一枝", id: "2/04/09/kHcYX" }, { name: "220443_ttgz_新发", id: "2/04/09/kHVKx" }, { name: "220444_ttgz_投", id: "2/04/09/kHYSj" }, { name: "220445_Yurosan_楼心", id: "2/04/10/k0AwB" }, { name: "220446_小佗_花下", id: "2/04/10/k0vDK" }, { name: "220447_小佗_向阳", id: "2/04/10/k0Zns" },] },
  { vol: "2022年4月③期", author: ["2309孙瑄梓", "2203郑小雨", "2216孙子萱"], list: [{ name: "220448_酸子_群楼", id: "2/04/18/xBt21" }, { name: "220449_酸子_嫣", id: "2/04/18/xBDWI" }, { name: "220450_酸子_筑", id: "2/04/18/xBPiM" }, { name: "220451_酸子_檐牙", id: "2/04/18/xBRtG" }, { name: "220452_酸子_廊", id: "2/04/18/xBp3r" }, { name: "220453_秤砣_不候", id: "2/04/18/xBHgD" }, { name: "220454_秤砣_盼", id: "2/04/18/xBLVF" }, { name: "220455_秤砣_落英", id: "2/04/18/xBGo6" }, { name: "220456_秤砣_夹道", id: "2/04/18/xBQrP" }, { name: "220457_太阳_河畔", id: "2/04/20/xJYNY" }, { name: "220458_太阳_与樱", id: "2/04/20/xJjFc" }, { name: "220459_太阳_归途", id: "2/04/20/xJVaU" }, { name: "220460_太阳_亭外", id: "2/04/20/xJlIq" }, { name: "220461_太阳_于观景台", id: "2/04/20/xJfEv" },] },
  { vol: "2022年4月④期", author: ["24?吕沛锡"], list: [{ name: "220462_ALPEISN_云壤", id: "2/04/27/x2VpX" }, { name: "220463_ALPEISN_叶上海", id: "2/04/27/x2lBx" }, { name: "220464_ALPEISN_栾与棚", id: "2/04/27/x2Yft" }, { name: "220465_ALPEISN_旗杆", id: "2/04/27/x2sxi" }, { name: "220466_ALPEISN_我中使命", id: "2/04/27/x2c8L" }, { name: "220467_ALPEISN_寂", id: "2/04/27/x29Kj" }, { name: "220468_ALPEISN_已暝", id: "2/04/27/x2j0p" }, { name: "220469_ALPEISN_长焦之外", id: "2/04/27/x26MU" }, { name: "220470_ALPEISN_光变", id: "2/04/27/x281Y" },] },
  { vol: "2022年5月①期", author: ["2221强奕恒", "2216蒋鹏程", "2202葛铭哲"], list: [{ name: "220501_小雨到处跑_老街", id: "2/05/03/z15XD" }, { name: "220502_小雨到处跑_新市", id: "2/05/03/z1qHI" }, { name: "220503_小雨到处跑_石鼓", id: "2/05/03/z1McM" }, { name: "220504_小雨到处跑_渭河", id: "2/05/03/z1o71" }, { name: "220505_小雨到处跑_欲暝", id: "2/05/03/z1aMG" }, { name: "220506_小雨到处跑_丰茂", id: "2/05/03/z1TzF" }, { name: "220507_小雨到处跑_晃", id: "2/05/03/z1UJ6" }, { name: "220508_小雨到处跑_对岸", id: "2/05/03/z1WlP" }, { name: "220509_小雨到处跑_连", id: "2/05/03/z1kTb" }, { name: "220510_程程_球场漫步", id: "2/05/11/zfQJt" }, { name: "220511_程程_一隅", id: "2/05/11/zfcBj" }, { name: "220512_程程_净空", id: "2/05/11/zfSlx" }, { name: "220513_头_望联盟桥", id: "2/05/11/zfLXi" },] },
  { vol: "2022年5月②期", author: ["2303陈佳怡", "2302徐萤", "2308董仰儒", "2216赵凌玥"], list: [{ name: "220514_沉积岩_被劈开的云", id: "2/05/11/zfGxX" }, { name: "220515_Bittersweet_撷", id: "2/05/15/z37jN" }, { name: "220516_Bittersweet_我们", id: "2/05/15/z3ryL" }, { name: "220517_Bittersweet_瞥", id: "2/05/15/z31RS" }, { name: "220518_Bittersweet_框", id: "2/05/15/z3nha" }, { name: "220519_Bittersweet_回不去的梦", id: "2/05/15/z3eUC" }, { name: "220520_Bittersweet_子虚", id: "2/05/15/z3Asi" }, { name: "220521_沉积岩_槐", id: "2/05/15/z3ZaX" }, { name: "220522_寒香_梅", id: "2/05/24/h4NZl" }, { name: "220523_凌球_观", id: "2/06/03/nQ1vD" }, { name: "220524_凌球_幢", id: "2/06/03/nQ7dF" },] },
  { vol: "2022年6月①期", author: ["2216刘子璐", "2024黄怡涵", "2321田雨杉"], list: [{ name: "220601_纸某鹿_片云", id: "2/06/28/NiuFX" }, { name: "220602_纸某鹿_落", id: "2/06/28/Ni8Ii" }, { name: "220603_纸某鹿_朦胧", id: "2/06/28/NiIRt" }, { name: "220604_纸某鹿_一米", id: "2/06/28/NiwUj" }, { name: "220605_纸某鹿_夕日", id: "2/06/28/Ni3jx" }, { name: "220606_纸某鹿_浮光", id: "2/06/28/NnMyp" }, { name: "220607_纸某鹿_眺", id: "2/06/28/NnOsU" }, { name: "220608_纸某鹿_松", id: "2/06/28/Nnqev" }, { name: "220609_纸某鹿_一别", id: "2/06/28/Nn5Gq" }, { name: "220610_四郎_叶下", id: "2/06/28/NnoaY" }, { name: "220611_四郎_云间", id: "2/06/28/NnBIc" }, { name: "220612_33_那次日落", id: "2/06/28/NnUhr" }, { name: "220613_33_在树之间", id: "2/06/28/NnWtM" }, { name: "220614_33_光的印迹", id: "2/06/28/NnbjG" },] },
  { vol: "2022年6月②期", author: ["2311杨周明"], list: [{ name: "220615_无情小明_护", id: "2/06/28/NnxW1" }, { name: "220616_无情小明_走向", id: "2/06/28/NnzyI" }, { name: "220617_无情小明_土地", id: "2/06/28/NnFsD" }, { name: "220618_无情小明_浮云", id: "2/06/28/NnioF" }, { name: "220619_无情小明_铁路", id: "2/06/28/Nn1GP" }, { name: "220620_无情小明_训练", id: "2/06/28/Nn73b" }, { name: "220621_无情小明_觅云", id: "2/06/28/Nnne6" }, { name: "220622_无情小明_见云", id: "2/06/28/Nnehl" }, { name: "220623_无情小明_羡云", id: "2/06/28/Nnrtg" }, { name: "220624_无情小明_芳道", id: "2/06/28/NnY4r" }, { name: "220625_无情小明_挂银", id: "2/06/28/NndCq" }, { name: "220626_无情小明_披雪", id: "2/06/28/NncQv" }, { name: "220627_无情小明_浸白", id: "2/06/28/Nn0rY" }, { name: "220628_无情小明_方砖", id: "2/06/28/NnVic" }, { name: "220629_无情小明_十月廿三申时", id: "2/06/28/Nnf6M" }, { name: "220630_无情小明_酉时不见月", id: "2/06/28/Nn9bG" }, { name: "220631_无情小明_映河", id: "2/06/28/Nn2VI" },] },
  { vol: "2022年6~7月上 ", author: ["24?吕沛锡", "20?孟子皓", "2321田雨杉", "24?段昊悦", "2024黄怡涵"], list: [{ name: "220632_ALPEISN_织空", id: "2/06/28/Nnjm1" }, { name: "220633_糸守_暮语", id: "2/06/28/Nn8qD" }, { name: "220634_糸守_偏撷", id: "2/06/28/NnXAF" }, { name: "220635_33_可燃", id: "2/06/28/NnuQ6" }, { name: "220636_33_尽染", id: "2/06/28/NnICP" }, { name: "220701_硫酸锌不要酸_游云.png", id: "2/07/03/N0Maj" }, { name: "220702_四郎_云衾", id: "2/07/03/N0Oep" }, { name: "220703_四郎_于维也纳", id: "2/07/03/N0aGU" }, { name: "220704_四郎_瓦上云", id: "2/07/21/rB7SM" }, { name: "220705_四郎_叶间楼", id: "2/07/21/rBNCG" }, { name: "220707_四郎_林中花", id: "2/07/21/rBrn1" },] },
  { vol: "2022年7月下", author: ["2301亢艺璇", "2201赵琰华", "2408李诗哲"], list: [{ name: "220708_风吹不过江川_映空", id: "2/07/28/r4y5p" }, { name: "220709_风吹不过江川_日暮", id: "2/07/28/r4gKU" }, { name: "220710_风吹不过江川_意中云", id: "2/07/28/r4Kpx" }, { name: "220711_风吹不过江川_绪难平", id: "2/07/28/r4ZYj" }, { name: "220712_拾汘_层峦叠嶂", id: "2/07/28/r4Akt" }, { name: "220713_拾汘_野望", id: "2/07/28/r4mSY" }, { name: "220714_拾汘_霞观", id: "2/07/28/r4pwv" }, { name: "220715_拾汘_漩云", id: "2/07/28/r4P1q" }, { name: "220716_拾汘_岸上塔", id: "2/07/28/r4RDc" }, { name: "220717_拾汘_晨光荷", id: "2/07/28/r4t8r" }, { name: "220718_拾汘_云蔽日", id: "2/07/28/r4DxM" }, { name: "220719_拾汘_柳前路", id: "2/07/28/r4HpG" }, { name: "220720_拾汘_游园", id: "2/07/28/r4Lf1" }, { name: "220721_Dolores_Tyndall", id: "2/07/28/r4G5I" }, { name: "220722_Dolores_Morning", id: "2/07/28/r4QKD" }, { name: "220723_Dolores_Lake", id: "2/07/28/r4S0F" }, { name: "220724_Dolores_Cloud", id: "2/07/28/r40w6" }, { name: "220725_Dolores_Road", id: "2/07/28/r4d1P" },] },
  { vol: "2022年9月", author: ["23?刘岩", "2328张鹏铖"], list: [{ name: "220901_鱼征_行空", id: "2/10/07/ptLkF" }, { name: "220902_鱼征_暗橘", id: "2/10/07/ptZbY" }, { name: "220903_鱼征_行廊", id: "2/10/07/pttn1" }, { name: "220904_鱼征_昇", id: "2/10/07/ptEm6" }, { name: "220905_鱼征_蔽", id: "2/10/07/ptvmv" }, { name: "220906_鱼征_后生", id: "2/10/07/ptmqc" }, { name: "220907_鱼征_远光", id: "2/10/07/ptyYq" }, { name: "220908_鱼征_流纹", id: "2/10/07/ptpAr" }, { name: "220909_鱼征_", id: "2/10/07/ptJSM" }, { name: "220910_鱼征_云啮", id: "2/10/07/ptPCG" }, { name: "220911_鱼征_与光同程", id: "2/10/07/pt44I" }, { name: "220912_鱼征_云云", id: "2/10/07/ptD6D" }, { name: "220913_鱼征_云云云", id: "2/10/07/ptGYP" }, { name: "220914_鱼征_云云云云", id: "2/10/07/ptS5b" }, { name: "220915_鱼征_云云云云日", id: "2/10/07/pt0Al" }, { name: "220916_伪装孤独_黄昏", id: "2/10/07/ptcSg" },] },
  { vol: "2022年10月", author: ["24?王艺珈", "2306史雨晖", "2216刘子璐"], list: [{ name: "221001_KT_乒乒乓乓", id: "2/10/07/pt9kS" }, { name: "221002_KT_东云", id: "2/10/07/ptVns" }, { name: "221003_KT_夜月", id: "2/10/07/ptdwB" }, { name: "221004_KT_问晨", id: "2/10/07/ptf8a" }, { name: "221005_KT_筐日", id: "2/10/07/ptYDK" }, { name: "221006_KT_觅空", id: "2/10/07/ptjpN" }, { name: "221007_KT_楼后", id: "2/10/07/p4M8p" }, { name: "221008_KT_纸浅", id: "2/10/07/p4axU" }, { name: "221009_KT_望红", id: "2/10/07/p4opY" }, { name: "221010_KT_携月", id: "2/10/07/ptC1x" }, { name: "221011_KT_其会", id: "2/10/07/ptwDj" }, { name: "221012_prlgrim_午后", id: "2/10/26/PfBnI" }, { name: "221013_prlgrim_柳上云", id: "2/10/26/Pfqw1" }, { name: "221014_纸某鹿_AI朝霞", id: "2/10/26/PfLlq" }, { name: "221015_纸某鹿_AI日出", id: "2/10/26/PfHJv" }, { name: "221016_纸某鹿_AI日落", id: "2/10/26/PfDxY" }, { name: "221017_纸某鹿_AI远峰落日", id: "2/10/26/PftXU" },] },
  { vol: "2022年底", author: ["2413任子祺", "23?刘岩"], list: [{ name: "221101_呱唧_山望", id: "2/12/16/HBqoL" }, { name: "221102_呱唧_瞰林", id: "2/12/16/HBBGX" }, { name: "221103_呱唧_朦云", id: "2/12/16/HB5ri" }, { name: "22104_呱唧_云驻", id: "2/12/16/HBasC" }, { name: "221201_鱼柾_遮(冬季限定)", id: "2/12/16/HBOgN" },] },
  { vol: "2023年1月", author: ["2309孙瑄梓", "24?猴墩"], list: [{ name: "230101_酸子_云中印象", id: "3/01/03/E8Lwa" }, { name: "230102_酸子_镜中暮", id: "3/01/03/E8HSK" }, { name: "230103_酸子_穹下楼影", id: "3/01/03/E845B" }, { name: "230104_酸子_枝上有佳果", id: "3/01/03/E8GnS" }, { name: "230105_酸子_谁人窗中晖", id: "3/01/03/E8DAs" }, { name: "230106_猴墩_花下行", id: "3/01/05/Ge8qq" }, { name: "230107_猴墩_窥篁", id: "3/01/05/Ge9bU" }, { name: "230108_猴墩_不忘初心", id: "3/01/05/GejgY" }, { name: "230109_猴墩_馆中灯火", id: "3/01/05/Gef2p" }, { name: "230110_猴墩_楼林蔽空", id: "3/01/05/Ge2Vv" },] },
];
bg.vol = [];
!function () {
  for (var v in gallery) for (var p in gallery[v].list) bg.vol.push(~~v);
  var bgList = document.getElementById("bglist");
  if (bgList) bgList.innerHTML = function () {
    var l = "";
    for (v in gallery) {
      l += "<details>\n  <summary>" + gallery[v].vol + "</summary>\n  <div class='alist'>\n";
      for (p in gallery[v].list) l += "    <a onclick='bg(" + v + "," + p + ")'>" + gallery[v].list[p].name + "</a>\n";
      l += "  </div>\n</details>\n";
    }
    // console.log(l);
    return l;
  }();
  bg([gallery.length - 1, gallery.length - 2][~~(Math.random() * 2)]);
}();
function bg(v, p) {
  // 若同时以new Date作为volnum和picseed的随机种子，会产生特定的余数对应关系
  if (v == null) v = bg.vol[~~(Math.random() * bg.vol.length)];
  if (p == null) p = ~~(Math.random() * gallery[v].list.length);
  document.body.style.backgroundImage = "url(https://i.imgtg.com/202" + gallery[v].list[p % (gallery[v].list.length)].id + ".jpg)";
  // 定时换壁纸（康总加成🙏）
  clearInterval(bg.interval);
  bg.interval = setInterval(bg, 2040411);
  return document.getElementById("bg").innerHTML = "背景：" + gallery[v].list[p % (gallery[v].list.length)].name + "@" + gallery[v].vol;
}
