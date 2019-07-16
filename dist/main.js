const superManager = new SuperManager
const renderer = new Renderer

const getCity=async function(){
superManager.getDataFromDB(//)
superManager.getCity(//)
renderer.render(data)
}


const getItem=async function(){
 superManager.getDataFromDB(//)
 superManager.getItem(//)
 renderer.render(data)
}
    



$('#search-city').on('click', getCity)
$('#search-item').on('click', getitem)