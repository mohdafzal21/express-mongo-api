hotels= [];
hotels.database = {};

const loadAssets = function(){

    $.getJSON("/", function(data){
        
        hotels.database = data;
        hotels.init();
    });
}

hotels.init = function(){
    hotels.del();
    hotels.upd()
    hotels.addR()
    hotels.generateMarkup();
}

hotels.addR = function(){
    $('.addR').on("click",function(){
        $('form').show();
        
        
    })
}

 hotels.del = function(){
     $('.del').on("click",function(){
         console.log(req.body);;
         
     })
 }

 hotels.upd = function(){
    $('.upd').on("click",function(){
        console.log("clicked");
    })
}


hotels.generateMarkup = function(){
  var template = '';

  template += '<div class="addR"><button>Add Restaurants</button></div>'
     
    $.each(hotels.database, function(index){
        db = hotels.database
        id = db[index];
        console.log(id);
        
        
        template += '<div class="item">'
        template += '<div>"'+id.address+'"</div>';
        template += '<div>"'+id.name+'"</div>';
        template += '<div>"'+id.phone+'"</div>';
        template += '<div>'
        template += '<button class="del">delete</button>'
        template += '</div>'
        template += '<div>'
        template += '<button class="upd">Update</button>'
        template += '</div>'
        template += '</div>'
    })
  
    $('.content').append(template);
     hotels.del();
     hotels.upd();
     hotels.addR();

    
}


loadAssets();