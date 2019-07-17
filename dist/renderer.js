class renderer {

    async start(data) {


        const source = $("#stores-template").html()
        const template = Handlebars.compile(source)
        const somehtml = template({ store: data[0].cityData.city_stores })
        $("#allStores").append(somehtml)

    }


    async homepage(user) {

        const source = $("#title-template").html()
        const template = Handlebars.compile(source)
        const somehtml = template({ user })
        $("#myuser").append(somehtml)

    }


}