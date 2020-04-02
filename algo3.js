const videos = [
    {
        title: 'Video 1',
        nbView: 2000
    },
    {
        title: 'Video 1',
        nbView: 100
    },
    {
        title: 'Video 1',
        nbView: 2000000
    },
    {
        title: 'Video 1',
        nbView: 34567
    },
    {
        title: 'Video 1',
        nbView: 3039
    },
]



// Afficher le nombre moyen de vue  résultat : 407941.2
// toujours pareil: console.log(taSuperFonction(videos)) // 407941.2

function totalViews (videoArray){
    let total = 0
    for(let video of videoArray){
        total+= video.nbView;
    }
    return total
}
console.log(totalViews(videos));
