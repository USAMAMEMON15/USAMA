$("p").on("click" , function(){
    console.log("you clicked");
    $(this).hide()
})

//Id selector 
$("#1").on("click" , function(){
    console.log("this is id", this)
    $(this).hide()
})

//claas selector
$(".h1").on("click" , function(){
    console.log("this is class", this)
    $(this).hide()
})

// ============>
    $(".para").on("click" , function(){
        console.log("timing");
        $(this).hide(3000)
        $(this).show(3000)
    })

    $(".btn").on("click" , function(){
        $(".para").toggle(3000)
        // $("#1").toggle(3000)
    })

    $(".btn").on("click" , function(){
        $(".para").fadeToggle(5000)
        
    })