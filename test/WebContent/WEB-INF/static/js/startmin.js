

/* this part need execute wait a while 
 
$.ajax({
		type : "GET",
		url : "/POCT/Get_ElementCnt",				
		contentType: "application/json; charset=utf-8",
		//data: { "Dept_batch" :"0","Dept_Quantity" :"24" },			
		success : function(result) {	

			var errornum;
			var data = JSON.parse( result );
			//Dept_num=data.Dept_Num;
			//Dept_ALLnum=data.Dept_ALL;
			
			errornum=data.ErrorNum;
			//alert(errornum); 
			if(errornum==0)
			{
				Draw_Num_Object(data);
				
			} 
			
						
		},
		error : function() {
			Draw_Dept_Object_Clear();
			
		}
});	
*/

function reflash_page()
{
	location.reload();
}
setTimeout(reflash_page,120000);

/*
setTimeout( function Get_AllInfo()
{
	
	var xmlHttp = new XMLHttpRequest();
	
	xmlHttp.open( "GET", "/POCT/Get_Server_Info", false ); 
        
    xmlHttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    
    request = '{\"\"}';
	
    //alert(request); 
    xmlHttp.send(request);		
    response=xmlHttp.responseText;
	
    var data = JSON.parse( response );
    errornum=data.ErrorNum;
    alert(errornum);    
    if(errornum==0){
    	
    	Draw_Num_Object(data);
    	//alert("同步成功");
    	//area.options.ykeys=[data.Dept[0],data.Dept[1],data.Dept[2],data.Dept[3],data.Dept[4],data.Dept[5]];
		//area.options.labels=[data.Dept[0],data.Dept[1],data.Dept[2],data.Dept[3],data.Dept[4],data.Dept[5]];				
		//area.setData(data.Data);
		
		//Donut.setData( [
		//        { label: "Total Strip", value: data.Strip_ALL[0] },
		//        { label: "Overdue Strip", value: data.Strip_ALL[1] },
		//        { label: "Available Strip", value: data.Strip_ALL[2] },
		//]);
    }
    
    else {
    	alert("同步失敗"); 
    }
    

},1000);

*/












$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});





















