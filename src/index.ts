function removeBlock(str: string) {
    if (str) {
        const reg = /^\{/gi
        const reg2 = /\}$/gi
        str = str.replace(reg, '')
        str = str.replace(reg2, '')
        return str
    } else {
        return str
    }
}

class MinReactI18n{
    i18n:any;

    init(i18n:any){
        this.i18n = i18n
    }
    get(i18nKey:string,options:any={}){
        let test = this.i18n[i18nKey]
        if(test){
            test=test.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")
            let valueArr: [string] = test.match(/\{(.+?)\}/g)
            if(valueArr){
                valueArr.forEach(item => {
                    const key = removeBlock(item)
                    const value = options[key]
                    if (key && value) {
                        const regExp = new RegExp('{' + key + '}', 'g');
                        test = test.replace(regExp, value)
                    }
                })
            }
        }
        return test
    }
    getHtml(i18nKey:string,options:any={}){
        const html = this.get(i18nKey,options)
        const dom =document.createElement('span')
        dom.innerHTML=html
        return dom
    }
}
const reactI18n=new MinReactI18n()
export default reactI18n