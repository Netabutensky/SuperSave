class SuperManager {

    constructor() {
        this.userData = []
    }
    
    saveLogin(data)
    {
        localStorage.data = data
    }
    saveStart(data2)
    {
        localStorage.data2 = data2
    }
    async sendUser()
    {   
        const firstInfo = JSON.parse(localStorage.data)
        const secondInfo = JSON.parse(localStorage.data2)
        const user = {user_name : firstInfo[0], user_id : firstInfo[1], user_city : secondInfo[0], shop_list : secondInfo[1]}
        console.log(user)
        await $.post('/user' ,user )
    }
}




    // async getDataFromDB(cityName) {
    //     let self = this.storeData
    //     let res = await $.get(`/city/${cityName}`)
    //         for (let i=0; i<res.length; i++) {
    //             self.push(res[i])
    //         }
    //     return this.storeData
    // }


    // async getCity(cityName) {
    //     let res = await $.get(`/city/${cityName}`)
    //     this.storeData.push({ cityData: res })
    //     console.log(this.storeData)
    //     return this.storeData
    // }


    // async getProduct(product) {
    //     let self = this.storeData
    //     let res = await $.get(`/city/${product}`)
    //     self.push({ product: res })
    // }


    // removeStore(storeName) {
    //     $.ajax({
    //         type: "DELETE",
    //         url: `/city/${storeName}`,
    //         success: function () {
    //             console.log("deleted")
    //         }
    //     })
    //     this.storeData = this.storeData.filter(c => c.name != cityName)
    // }

    // removeProduct(product) {
    //     $.ajax({
    //         type: "DELETE",
    //         url: `/city/${product}`,
    //         success: function () {
    //             console.log("deleted")
    //         }
    //     })
    //     this.storeData = this.storeData.filter(c => c.name != cityName)
    // }




