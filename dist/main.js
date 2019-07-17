// const render = new renderer()
const superManager = new SuperManager()

const shop_list = []
const secondInfo = []


$('body').on('click', '#submit', function () {
    const firstInfo = []
    const user_name = $('#username').val()
    firstInfo.push(user_name)
    const user_id = $('#userid').val()
    firstInfo.push(user_id)
    superManager.saveLogin(JSON.stringify(firstInfo))
})
$('body').on('click', '#city_search', function () {
    secondInfo.push(user_city = $('#city_input').val())
    console.log('saved!')
})
$('body').on('click', '#product_search', function () {
    shop_list.push( $('#product_input').val())
    console.log('added!')
})
$('body').on('click', '#search-shopping-cart', function () {
    secondInfo.push(shop_list)
    superManager.saveStart(JSON.stringify(secondInfo))
    superManager.sendUser()
})





// const getCity = async function () {
//     const cityInput = $('#city_input').val()
//     let data = await superManager.getCity(cityInput)
//     render.start(data)
//     // return data
// }


// const getItem=async function(){
// const itemInput = $("#search-item").val()
//  superManager.getProduct(itemInput)
//  renderer.render(superManager.storeData)
// }




// $('#city_search').on('click', getCity)
// // $('#search-item').on('click', getitem)