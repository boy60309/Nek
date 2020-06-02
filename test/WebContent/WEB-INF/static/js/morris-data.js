



$.ajax({
		type : "GET",
		url : "/POCT/Get_Server_Info",				
		contentType: "application/json; charset=utf-8",
		//dataType : "JSON",		
		//async : false,
		
		success : function(result) {	
			var errornum;
			var data = JSON.parse( result );
			//errornum=data.ErrorNum;
			//alert(errornum); 
			//if(errornum==0){
				
				//Draw_Num_Object(data);
				//area.options.ykeys=[data.Dept[0],data.Dept[1],data.Dept[2],data.Dept[3],data.Dept[4],data.Dept[5]];
				//area.options.labels=[data.Dept[0],data.Dept[1],data.Dept[2],data.Dept[3],data.Dept[4],data.Dept[5]];
			area.options.ykeys=[data.AreaItem[0]];
			area.options.labels=[data.AreaItem[0]];	
			area.setData(data.AreaData);
				
			Donut.setData( [
				        { label: "Total Strip", value: data.Strip_ALL[0] },
				        { label: "Overdue Strip", value: data.Strip_ALL[1] },
				        { label: "Available Strip", value: data.Strip_ALL[2] },
				]);
			
			
			var len=data.BarItem.length;
			//alert (len);
			if(len==0)
			{
				
				
				
			}
			else if(len==1)
			{
				bar.options.ykeys=[data.BarItem[0]];
				bar.options.labels=[data.BarItem[0]];	
				bar.setData(data.BarData);
			}
			else if(len==2)
			{
				bar.options.ykeys=[data.BarItem[0],data.BarItem[1]];
				bar.options.labels=[data.BarItem[0],data.BarItem[1]];
				bar.setData(data.BarData);
			}
			else if(len==3)
			{
				bar.options.ykeys=[data.BarItem[0],data.BarItem[1],data.BarItem[2]];
				bar.options.labels=[data.BarItem[0],data.BarItem[1],data.BarItem[2]];	
				bar.setData(data.BarData);
			}
			else if(len==4)
			{
				bar.options.ykeys=[data.BarItem[0],data.BarItem[1],data.BarItem[2],data.BarItem[3]];
				bar.options.labels=[data.BarItem[0],data.BarItem[1],data.BarItem[2],data.BarItem[3]];
				bar.setData(data.BarData);
			}
			else if(len==5)
			{
				bar.options.ykeys=[data.BarItem[0],data.BarItem[1],data.BarItem[2],data.BarItem[3],data.BarItem[4]];
				bar.options.labels=[data.BarItem[0],data.BarItem[1],data.BarItem[2],data.BarItem[3],data.BarItem[4]];	
				bar.setData(data.BarData);
			}				
			
			
			/*
			bar.options.ykeys=["小兒科","新成代謝科","內科","腎臟科"];
			bar.options.labels=["小兒科","新成代謝科","內科","腎臟科"];
			bar.setData([
					{ "y": "202004", "小兒科": 110, "新成代謝科":90,"內科":50,"腎臟科":200 },
			        			
			]);	
			*/	
				
			
			
			
				Draw_Num_Object(data);
				
				var Msg=data.Msg;	
				if(Msg!=null)
				{
					showMsg(Msg);
				}
				else {
					showNoMsg();
					
				}
				
			//}
		},
		error : function() {
			bootbox.alert("伺服器異常");
		}
});	



var Donut =new Morris.Donut({
    element: 'morris-donut-chart',
    data: [{
        label: "Available meter",
        value: 30
    }, {
        label: "QC Overdue meter",
        value: 30
    }, {
        label: "Backup Meter",
        value: 40
    }],
    resize: true
});

var area =new Morris.Area({
	element : 'morris-area-chart',			
	data : 
	[{
        "period": "2010 Q1",
        "B0": 2666,
        "B1": 0,
        "B2": 2647
    }, {
        "period": "2010 Q2",
        "B0": 2778,
        "B1": 2294,
        "B2": 2441
    }],
    xkey: "period",
    ykeys: ["B0", "B1", "B2"],
    labels: ["B0", "B1", "B2"],
    pointSize: 2,
    hideHover: "auto",
    resize: true	
});

		
		
	
    /*
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
	*/

var bar =new Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
        y: '2006',
        a: 100,
        b: 90
    }, {
        y: '2007',
        a: 75,
        b: 65
    }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    hideHover: 'auto',
    resize: true
});	

/*
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
 	
*/	
	


function Draw_Num_Object(data)
{
			//alert("Draw")
	var Meter_num=data.MeterNum;	
	document.getElementById("MeterNum").innerHTML=Meter_num;

	var UnQCNum=data.UnQCNum;	
	document.getElementById("UnQCNum").innerHTML=UnQCNum;
			
	var OpUserNum=data.OpUserNum;	
	document.getElementById("OpUserNum").innerHTML=OpUserNum;	
			
	var PatUserNum=data.PatUserNum;	
	document.getElementById("PatUserNum").innerHTML=PatUserNum;
			
	var StripNum=data.StripNum;	
	document.getElementById("StripNum").innerHTML=StripNum;
			
	var DeptNum=data.DeptNum;	
	document.getElementById("DeptNum").innerHTML=DeptNum;	
						
}
function showNoMsg()
{	
	$('.list-group').append('<a href="#" class="list-group-item">'+ 
			 '<i class="fa fa-comment fa-fw"></i>No event' + 
			 '<span class="pull-right text-muted small">'+
			 '<em></em>' + 
			 '</span></a>');

}
		
function showMsg(Msg)
{
	//var Length = data.Msg.length;
	//alert(Length)
	//for(var i=0; i<Length; i++)
	for(var i in Msg)	
	{
		if(Msg[i].Event_Type==0)
		{
			$('.list-group').append('<a href="#" class="list-group-item">'+ 
									 '<i class="fa fa-comment fa-fw"></i>'+Msg[i].Event_Msg + 
									 '<span class="pull-right text-muted small">'+
									 '<em>'+Msg[i].Event_Time +'</em>' + 
									 '</span></a>');	
		}
		else if(Msg[i].Event_Type==1)
		{
			$('.list-group').append('<a href="#" class="list-group-item">'+ 
						 '<i class="fa fa-upload fa-fw"></i>'+Msg[i].Event_Msg + 
						 '<span class="pull-right text-muted small">'+
						 '<em>'+Msg[i].Event_Time +'</em>' + 
						 '</span></a>');			
				
		}
		else if(Msg[i].Event_Type==2)
		{
			$('.list-group').append('<a href="#" class="list-group-item">'+ 
						 '<i class="fa fa-download fa-fw"></i>'+Msg[i].Event_Msg + 
						 '<span class="pull-right text-muted small">'+
						 '<em>'+Msg[i].Event_Time +'</em>' + 
						 '</span></a>');			
				
		}
	}	
}		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		