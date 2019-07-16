class SuperManager {

    constructor(storeData) {
        this.storeData = []
    }


    async getDataFromDB() {
        let self = this.storeData
        let res = await $.get(//yuval//)
            for (let i=0; i<res.length; i++) {
                self.push(res[i])
            }
        return this.storeData
    }

    
    async getCity(cityName) {
        let self = this.storeData
        let data = await this.storeData.find(i => i.name === cityName)
        await $.post(//yuval//, data)
        return data
    }


    async getStore(storeName) {
        let x = await $.get(//yuval//)
        this.cityData.push(x)
        return x
    }


    removeStore(storeName) {
        $.ajax({
            type: "DELETE",
            url: `/city/${storeName}`,
            success: function () {
                console.log("deleted")
            }
        })
        this.storeData = this.storeData.filter(c => c.name != cityName)
    }


}

