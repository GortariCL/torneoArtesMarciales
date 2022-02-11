class Personaje{
    constructor(nombre, img, poder, raza){
        let _nombre = nombre;
        let _img = img;
        let _poder = poder;
        let _raza = raza;

        this._getNombre  = () => _nombre;
        this._getImg  = () => _img;
        this._getPoder = () => _poder;
        this._getRaza  = () => _raza;

        this._setPoder = (nuevo_poder) => _poder = nuevo_poder;
    }

    get getNombre(){
        return this._getNombre();
    }
    get getImg(){
        return this._getImg();
    }
    get getPoder(){
        return this._getPoder();
    }
    set setPoder(nuevo_poder){
        this._setPoder(nuevo_poder);
    }
    get getRaza(){
        return this._getRaza();
    }
}

export default Personaje;

/* let obj = new Personaje("goku","..", 2000, "saiyajin");
console.log(obj.getPoder);
obj.setPoder = 1500;
console.log(obj.getPoder); */