/* 
 * 适用于宝鸡中学的考试科目列表
 */
console.log("%c\n加入Techaos! 混技\nQQ群: 169994096\n", "font:3em Montserrat,sans-serif;");
console.log("%c\n野生技协(混技分部)\nQQ群: 894656456\n", "font:3em Montserrat,sans-serif;");
/* 
 * 考试科目内容实现
 */
var subject, start, end, updateSubject;
function change(totype) {
  // 切换类型时需要重新初始化的内容
  // mainslogan = subslogan = null;
  start = end = new Date("2021-04");
  progress = subslogannum = 0;
  $mainslogan = "沉着冷静&emsp;诚信考试";
  switch (totype) {
    case "1.2临时":
      // “希望这样的安排以后都不要有”
      $mainslogan = "";
      $subslogan = [""];
      updateSubject = function () {
        $("英语", "2022-01-02", "16:05", "18:00");
        $("晚训", "2022-01-02", "18:25", "18:55", null, ["我猜应该是历史/生物"]);
      };
      break;
    case "高三日常":
      // 特别注意，最后一轮求余后应该是数组第0项
      $mainslogan = "距离高考" + parseInt((new Date("2022-06-07T22:30+08:00") - today) / 864E5) + "天";
      $subslogan = [""];
      updateSubject = function () {
        // “这种情况就比较复杂了，代码和人有一个能跑就行”
        if (today.getDay() == 0) {
          // 周日下午
          // console.log("0simulation" + today);
          $(["综合", "语文"][week % 2], todate, "14:10", "16:40", null,
            ["第" + week + "周" + weekday + "大考练"]);
          $("订正", todate, "16:50", "17:30");
        } else {
          // 非周日的早上
          // console.log("morning" + today);
          if (today.getDay() == 5) $("听力", todate, "07:05", "07:25");
          // “非得早来10分钟”
          $("晨读1", todate, "07:00", "07:25");
          $("晨会", todate, "07:25", "07:30");
          $("晨读2", todate, "07:30", "08:00");
          // “多睡5分钟能咋”
          $("午休", todate, "12:00", "13:50");
        }
        if (today.getDay() != 6) {
          if (today.getDay() == 2 || today.getDay() == 4) {
            // 周二、周四下午
            // console.log("test" + today);
            $("考练", todate, "16:05", "16:50", null,
              ["第" + week + "周(第" + (week % 3 || 3) + "轮): " + weekday +
                ([[, , "语文", , "历史/物理"], [, , "政治/化学", , "数学"], [, , "英语", , "地理/生物"]]
                [week % 3][today.getDay()] || "无") + "限时纠错训练"]);
          }
          // 非周六的晚上
          // console.log("evening" + today);
          $("晚训", todate, "18:25", "18:45", null,
            ["第" + week + ["周: 双周", "周: 单周"][week % 2] + weekday +
              ([["英语", "语文", "地理/物理", "数学", "政治/化学", "历史/生物"],
              ["数学", "英语", "地理/物理", "政治/化学", "语文", "历史/生物"]]
              [week % 2][today.getDay()] || "无") + "小题精练"]);
          $("晚写", todate, "18:45", "18:55");
          $("晚一", todate, "18:55", "19:40");
          $("晚二", todate, "19:50", "20:35");
          $("晚三", todate, "20:50", "22:00");
          $("晚修", todate, "22:00", "23:00");
        } else {
          // 周六的下午和晚上
          // console.log("6simulation" + today);
          $(["英语", "数学"][week % 2], todate, "16:00", "17:45", null,
            ["第" + week + "周" + weekday + "大考练"]);
          $("订正", todate, "17:45", "17:55");
        }
      };
      break;
    case "高三理科":
      $subslogan = ["高三理科月考三: 请以实际司号为准。"];
      updateSubject = function () {
        $("数学", "2021-12-10", "14:00", "16:00");
        $("化学", "2021-12-10", "16:30", "18:10");
        $("语文", "2021-12-11", "07:40", "10:10");
        $("生物", "2021-12-11", "10:40", "12:10");
        $("英语", "2021-12-11", "14:00", "16:00");
        $("物理", "2021-12-11", "16:30", "18:10");
      };
      break;
    case "高三文科":
      $subslogan = ["高三文科月考三: 请以实际司号为准。"];
      updateSubject = function () {
        $("数学", "2021-12-10", "14:00", "16:00");
        $("地理", "2021-12-10", "16:30", "18:10");
        $("语文", "2021-12-11", "07:40", "10:10");
        $("政治", "2021-12-11", "10:40", "12:20");
        $("英语", "2021-12-11", "14:00", "16:00");
        $("历史", "2021-12-11", "16:30", "18:10");
      };
      break;
    case "高二理科":
      $subslogan = ["高二理科阶段考试: 请以实际铃声为准。"];
      updateSubject = function () {
        $("英语", "2021-12-17", "14:00", "16:00");
        $("物理", "2021-12-17", "16:30", "18:10");
        $("语文", "2021-12-18", "07:40", "10:10");
        $("生物", "2021-12-18", "10:40", "12:10");
        $("数学", "2021-12-18", "14:00", "16:00");
        $("化学", "2021-12-18", "16:30", "18:10");
      };
      break;
    case "高二文科":
      $subslogan = ["高二文科阶段考试: 请以实际铃声为准。"];
      updateSubject = function () {
        $("英语", "2021-12-17", "14:00", "16:00");
        $("地理", "2021-12-17", "16:30", "18:10");
        $("语文", "2021-12-18", "07:40", "10:10");
        $("政治", "2021-12-18", "10:40", "12:20");
        $("数学", "2021-12-18", "14:00", "16:00");
        $("历史", "2021-12-18", "16:30", "18:10");
      };
      break;
    case "高一":
      // “高一年级竟然不用”
      $mainslogan = "暂未启用";
      $subslogan = ["高一暂未启用考试时钟。"];
      updateSubject = function () {
        $("数学", "2021-06-28", "14:20", "16:00");
        $("英语", "2021-06-28", "16:30", "18:10");
        $("语文", "2021-06-29", "07:50", "09:50");
        $("化学", "2021-06-29", "10:20", "12:00");
        $("物理", "2021-06-29", "14:20", "16:00");
        $("生物", "2021-06-29", "16:30", "18:00");
        $("政史", "2021-06-30", "07:50", "09:50");
        $("地理", "2021-06-30", "10:20", "11:20");
      };
      break;
    case "临时科目":
      // “大多数人都没用过这个功能”
      $subslogan = [""];
      var ts, tsh, tsm, teh, tem;
      if (!(ts = prompt("考试科目名称(3个字以内)", "临时")) ||
        !(tsh = prompt("考试开始时间(小时)", 16)) ||
        !(tsm = prompt("考试开始时间(分钟)", 25)) ||
        !(teh = prompt("考试结束时间(小时)", 23)) ||
        !(tem = prompt("考试结束时间(分钟)", 55))) {
        // 取消创建临时科目
        console.warn(send("由于操作取消，未生成临时科目。"));
        totype = null;
      } else {
        // 成功创建临时科目
        $(ts, todate, fixDigit(tsh) + ":" + fixDigit(tsm), fixDigit(teh) + ":" + fixDigit(tem));
        // alert("考试科目: " + subject + "\n起止时间: " + getClock(start) + "~" + getClock(end));
        updateSubject = function () { };
        console.log(send("添加了一门在 " + todate + " 从 " + fixDigit(tsh) + ":" + fixDigit(tsm) + " 到 " + fixDigit(teh) + ":" + fixDigit(tem) + " 的科目: " + ts));
      }
      break;
    default:
      $mainslogan = "考试时钟";
      $subslogan = ["不存在的考试类型，请重新选择。"];
      updateSubject = function () { };
  }
  type = totype || type;
  output("type", type);
  // 切换类型的对焦动画
  eleCard.style.filter = "blur(.5em)";
  // “客户想提升‘应用流畅度’，就把延迟改小点”
  setTimeout(function () {
    eleCard.style.filter = "blur(0)";
    updateTime();
    updateExam();
    // 及时更新标语
    updateSlogan();
  }, 400);
}
