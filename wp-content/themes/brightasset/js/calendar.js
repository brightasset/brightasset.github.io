$(function(){

  //初期設定
  var $calendar = $('#calendarObj');
  var $calendarInfo = $('.l-sub__calendar__info__data');
  var weekTbl = ['日','月','火','水','木','金','土'];
  var monthTbl= [31,28,31,30,31,30,31,31,30,31,30,31];
  var nowDate = new Date();
  var nowYear = nowDate.getFullYear();
  var nowMonth = nowDate.getMonth()+1;
  var tmpYear = nowDate.getFullYear();
  var tmpMonth = nowDate.getMonth()+1;
  //console.log(tmpYear+':'+tmpMonth);

  //
  function setCalender(yearData,monthData){
    //うるう年チェック
    if(yearData%4==0){
      if(yearData%100==0){
        if(yearData%400==0){
          monthTbl[1]=29;
        }else{
          monthTbl[1]=28;
        }
      }else{
        monthTbl[1]=29;
      }
    }else{
      monthTbl[1]=28;
    }

    //指定の月の最初の日を取得
    var trgFirstDate = new Date(yearData,(monthData-1),1);
    var trgFirstWeek = trgFirstDate.getDay();
    //console.log(trgFirstWeek);

    //HTML生成
    var tmpHTML = '';
    var contLi = 0;
    tmpHTML += '<ul>';
    //曜日ヘッダ
    for(var i=0;i<weekTbl.length;i++){
      tmpHTML += '<li>'+weekTbl[i]+'</li>';
      contLi++;
    }
    //曜日頭出し
    for(var i=0;i<trgFirstWeek;i++){
      tmpHTML += '<li>&nbsp;</li>';
      contLi++;
    }
    //日付セット
    for(var i=0;i<monthTbl[monthData-1];i++){
      //イベントの存在チェック
      var tmpKey = '';
      tmpKey += yearData;
      tmpKey += ('0'+monthData).slice(-2);
      tmpKey += ('0'+(i+1)).slice(-2);

      //休日チェック
      if(holidayData[tmpKey]){
        tmpHTML += '<li class="holiday">';
      }else{
        tmpHTML += '<li>';
      }
      //
      if(seminarData[tmpKey]){
      tmpHTML += '<a href="'+seminarData[tmpKey].url+'" title="'+seminarData[tmpKey].title+'">'+(i+1)+'</a>';
      }else{
        tmpHTML += (i+1);
      }
      //
      tmpHTML += '</li>';
      
      contLi++;
    }
    //残マス
    if(contLi%7!=0){
      for(var i=0;i<7-contLi%7;i++){
        tmpHTML += '<li>&nbsp;</li>';
      }
    }

    tmpHTML += '</ul>';

    //HTML書き出し
    $calendarInfo.html(tmpYear+'年'+tmpMonth+'月');
    $calendar.html(tmpHTML);
  }
  setCalender(tmpYear,tmpMonth);

  //カレンダー切り替え
  $('.l-sub__calendar__info__cont .leftBtn').on('click',function(){
    tmpMonth--;
    if(tmpMonth<1){
      tmpMonth+=12;
      tmpYear--;
    }
    setCalender(tmpYear,tmpMonth);
  });
  $('.l-sub__calendar__info__cont .centerBtn').on('click',function(){
    tmpYear=nowYear;
    tmpMonth=nowMonth;
    setCalender(tmpYear,tmpMonth);
  });
  $('.l-sub__calendar__info__cont .rightBtn').on('click',function(){
    tmpMonth++;
    if(tmpMonth>12){
      tmpMonth-=12;
      tmpYear++;
    }
    setCalender(tmpYear,tmpMonth);
  });
});