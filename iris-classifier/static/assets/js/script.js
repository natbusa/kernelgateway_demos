$("button#train").click(function(){

    var var_x = $("#var_x").val();
    var var_y = $("#var_y").val();
    var model = $("#model").val()
    var path = "/model/train/"+var_x+"/"+var_y+"?model="+model

    $.get(path).done(function(data, status){
        $("#train_output").html("Model: " + data);

        var p1 = $.get("/model/confusion/plot");
        var p2 = $.get("/model/predict/plot");

        $.when(p1, p2).done(function(r1, r2) {
            $("#predict_plot").html(r1[0]);
            $("#confusion_plot").html(r2[0]);

            $("#predict_form").show()
        });

    });
});

$("button#predict").click(function(){

    var val_x = $("#val_x").val();
    var val_y = $("#val_y").val();
    var path = "/model/predict?variables="+val_x+","+val_y

    $.get(path).done(function(data, status){
        $("#predict_output").html("Class: " + data);
    });
});