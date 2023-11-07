const lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas purus id consectetur mattis. Suspendisse eu nisl at neque tristique mattis vitae vitae odio. Quisque at tortor turpis. Mauris luctus lacus at semper fermentum. Nam libero dui, volutpat et porta ac, porttitor sed purus. Etiam feugiat pellentesque sem, sodales sollicitudin ipsum. Praesent sapien augue, interdum dictum gravida ut, blandit sed dolor. Donec mattis ex eu eros feugiat, eget porttitor neque malesuada. Vivamus nulla ex, vulputate maximus ante a, facilisis aliquet ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed gravida urna in tellus tempor sollicitudin. In semper metus sed velit elementum sodales in a ipsum. Fusce vulputate non eros eget dignissim.",
    "Maecenas a sagittis dui, sed ornare velit. Nunc interdum et metus vel molestie. Praesent in tellus suscipit, blandit ex at, mattis dui. Aenean eget arcu sit amet nulla euismod efficitur eu vitae augue. Ut erat eros, cursus sed rutrum in, cursus quis purus. Etiam facilisis nibh tortor, nec accumsan enim venenatis eget. Etiam scelerisque accumsan nibh. Praesent volutpat non ex eget iaculis. Morbi vel lacinia purus, ut vulputate leo.",
    "Nunc ex dolor, ornare nec consectetur sit amet, consequat sed orci. Duis gravida mauris semper, egestas arcu eget, euismod elit. Proin eu vulputate felis, vitae ullamcorper massa. Aenean consectetur rutrum purus. Aenean sit amet odio laoreet, blandit lectus in, accumsan libero. Sed quis nisl vel lorem congue pulvinar. Vestibulum et nulla eros. Proin quis sollicitudin lectus. Praesent ut tempus velit. In in maximus tortor. Phasellus in ligula enim. Suspendisse potenti. Donec ornare lorem vel commodo bibendum. Cras feugiat interdum euismod.",
    "Maecenas non elit ipsum. Vestibulum enim magna, bibendum vel massa nec, convallis dignissim ipsum. In dignissim neque id magna egestas, id dictum purus suscipit. Donec faucibus sapien urna. In nec posuere felis, non facilisis neque. Pellentesque rhoncus felis eget nisl pretium iaculis. Maecenas eget purus tortor. Duis tincidunt volutpat vehicula. Cras vitae mollis urna. Nullam vitae ultricies nulla.",
    "Mauris vel augue laoreet lacus vulputate consectetur eget sed velit. Fusce a velit nisi. Etiam consectetur lectus iaculis, suscipit ipsum vel, eleifend mi. Duis scelerisque nibh ut felis viverra eleifend. Sed varius rutrum massa, non consequat tortor mollis ac. Nunc quis porta odio. Sed in felis commodo neque pharetra imperdiet placerat eget ante. Cras auctor ex id ex posuere accumsan. In sed nisl semper, posuere erat ac, lobortis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at rutrum odio. Duis varius in dolor nec fermentum.",
    "Sed vel commodo tortor. Sed elementum ligula a dapibus viverra. Vivamus vehicula consequat ipsum, quis lacinia elit auctor aliquet. Phasellus at turpis malesuada purus elementum cursus scelerisque vitae dolor. Vivamus ultrices nisl ex, ut pellentesque tellus lacinia ut. Etiam ante dui, dignissim in mauris non, blandit vehicula ante. Duis nisl nisi, vestibulum at sodales et, molestie accumsan ex.",
    "In vitae elementum nisi. Integer pulvinar, felis id aliquet fermentum, lectus orci scelerisque dui, et feugiat odio risus et nisl. Duis molestie metus mauris, ac condimentum odio sodales vitae. Curabitur feugiat lobortis convallis. Pellentesque ac posuere dui, quis venenatis ipsum. Quisque arcu massa, rutrum id neque vulputate, vehicula posuere diam. Nulla vulputate feugiat massa, sit amet tempus felis bibendum a. Duis finibus velit vel orci posuere imperdiet. Donec gravida pretium orci sed dictum.",
    "Sed at eros nunc. Nam pharetra egestas metus, id sollicitudin neque. Fusce finibus dapibus nunc, eget elementum tellus porttitor quis. Aenean urna turpis, ultricies ut egestas ultrices, hendrerit eget nibh. Aliquam dui ex, euismod vel eros non, eleifend consectetur enim. Vivamus ullamcorper eros ut urna lacinia, vitae porta libero egestas. Sed sit amet lorem vestibulum, placerat dolor bibendum, condimentum turpis. Pellentesque tellus nibh, bibendum ut feugiat a, gravida vitae quam. Nam a fermentum leo. Cras sed enim non sapien euismod tristique a sit amet arcu.",
    "Praesent eget velit in metus fermentum consequat. Integer rutrum aliquam purus ut ornare. Mauris commodo facilisis lorem ullamcorper posuere. Nulla eleifend finibus venenatis. Vivamus massa augue, mollis et ultrices non, iaculis id lectus. Phasellus placerat nunc nisi, vitae bibendum dolor aliquet ut. Ut vestibulum faucibus volutpat. Aliquam maximus ultrices neque lobortis tincidunt. Duis sodales dolor in libero tempor, maximus pulvinar lorem accumsan. Etiam nec ante et ligula ultrices rhoncus. Nam dignissim consectetur massa, sed vehicula diam bibendum nec. Proin et ex imperdiet, sodales felis vitae, aliquam nisl. Ut vel nisi rutrum, congue sem in, hendrerit ligula.",
    "Nulla sed ultrices elit. Donec vitae purus ac nibh venenatis condimentum. Phasellus dictum mattis orci, non tincidunt felis aliquet at. Vestibulum vulputate faucibus justo at mattis. Fusce mollis lacinia neque, sit amet congue neque laoreet venenatis. Mauris blandit odio ut sem iaculis efficitur. Nunc sem magna, sollicitudin at volutpat ac, scelerisque ut erat. Donec tincidunt leo id magna feugiat condimentum. Etiam dapibus justo sem, nec scelerisque urna suscipit sit amet. Vivamus sed aliquet nunc."

]





function generateClick() {
    let input = parseInt(document.getElementById("input").value);

    if (input > 0 && input <= 10) {
        let selectedLorem = lorem.slice(0, input); 
        let paragraphs = selectedLorem.join('<br><br>'); 
        document.getElementById("paragraphs").innerHTML = paragraphs; 
    } else {
        alert("Lütfen 1 ile 10 arası bir değer giriniz.");
    }
}





















// lorems.forEach(function(lorem){
//     let result = document.getElementById("paragraphs");
//     if(0<input<11){



//     }

// })