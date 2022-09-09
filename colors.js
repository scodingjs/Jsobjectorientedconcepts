let colorChange = {

}

Object.defineProperties(colorChange,{
    _color:{
        value : "Green",
        enumerable : true,
        configurable:true,
        writable:true

    },
    color:{
        get:function(){
            return this._color;
        },
        set: function(value){
           this. _color = value;
        }
    }
})
colorChange.color = "Orange";
console.log(colorChange.color)


let listThem = Object.getOwnPropertyDescriptor(colorChange,"color")

Object.values(listThem).forEach( e => console.log(e))

Object.keys(listThem).forEach(key => console.log(`${key} is ${listThem.key}`))

Object.entries(listThem).forEach(([key,value]) => console.log(`${key} -- ${value}`))

for(const key in listThem){
    console.log(`${key} ---- ${listThem[key]}`)
}