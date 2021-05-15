// 2021: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2021
// 2020: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2020
// 2019: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2019

zValue = getValue() || setRang()
zValue2= getValue2() || setRang2()
zValue3= getValue3() || setRang3()
zValue4= getValue4() || setRang4()
zValue5= getValue5() || setRang5()
zValue6= getValue6() || setRang6()
zValue7= getValue7() || setRang7()
zValue8= getValue8() || setRang8()
zValue9= getValue9() || setRang9()
zValue10= getValue10() || setRang10()
zValue11= getValue11() || setRang11()
zValue12= getValue12() || setRang12()

let zvE=parseInt(retriveData())

function getValue(){
    let rangOne = document.getElementById("rang1").value
    console.log(rangOne)
    let inputOne = document.getElementById("1").value
    inputOne=parseInt(rangOne)
    console.log(inputOne)
    document.getElementById("1").value = inputOne
    return zValue=parseInt(inputOne)
}
function setRang(){
    let i1 = document.getElementById("1").value
    console.log(i1)
    document.getElementById("rang1").value =i1
    return zValue=parseInt(i1)
}
function getValue2(){
    let rangTwo = document.getElementById("rang2").value
    console.log(rangTwo)
    let inputTwo = document.getElementById("2").value
    inputTwo=parseInt(rangTwo)
    console.log(inputTwo)
    document.getElementById("2").value = inputTwo
    return zValue2=parseInt(inputTwo)
}
function setRang2(){
    let i2 = document.getElementById("2").value
    console.log(i2)
    document.getElementById("rang2").value =i2
    return zValue2=parseInt(i2)
}
function getValue3(){
    let rangThree = document.getElementById("rang3").value
    console.log(rangThree)
    let inputThree = document.getElementById("3").value
    inputThree=parseInt(rangThree)
    console.log(inputThree)
    document.getElementById("3").value = inputThree
    return zValue3=parseInt(inputThree)
}
function setRang3(){
    let i3 = document.getElementById("3").value
    console.log(i3)
    document.getElementById("rang3").value =i3
    return zValue3=parseInt(i3)
}
function getValue4(){
    let rangFour = document.getElementById("rang4").value
    console.log(rangFour)
    let inputFour = document.getElementById("4").value
    inputFour=parseInt(rangFour)
    console.log(inputFour)
    document.getElementById("4").value = inputFour
    return zValue4=parseInt(inputFour)
}
function setRang4(){
    let i4 = document.getElementById("4").value
    console.log(i4)
    document.getElementById("rang4").value =i4
    return zValue4=parseInt(i4)
}
function getValue5(){
    let rangFive = document.getElementById("rang5").value
    console.log(rangFive)
    let inputFive = document.getElementById("5").value
    inputFive=parseInt(rangFive)
    console.log(inputFive)
    document.getElementById("5").value = inputFive
    return zValue5=parseInt(inputFive)
}
function setRang5(){
    let i5 = document.getElementById("5").value
    console.log(i5)
    document.getElementById("rang5").value =i5
    return zValue5=parseInt(i5)
}
function getValue6(){
    let rangSix = document.getElementById("rang6").value
    console.log(rangSix)
    let inputSix = document.getElementById("6").value
    inputSix=parseInt(rangSix)
    console.log(inputSix)
    document.getElementById("6").value = inputSix
    return zValue6=parseInt(inputSix)
}
function setRang6(){
    let i6 = document.getElementById("6").value
    console.log(i6)
    document.getElementById("rang6").value =i6
    return zValue6=parseInt(i6)
}
function getValue7(){
    let rangSeven = document.getElementById("rang7").value
    console.log(rangSeven)
    let inputSeven = document.getElementById("7").value
    inputSeven=parseInt(rangSeven)
    console.log(inputSeven)
    document.getElementById("7").value = inputSeven
    return zValue=parseInt(inputSeven)
}
function setRang7(){
    let i7 = document.getElementById("7").value
    console.log(i7)
    document.getElementById("rang7").value =i7
    return zValue=parseInt(i7)
}
function getValue8(){
    let rangEight = document.getElementById("rang8").value
    console.log(rangEight)
    let inputEight = document.getElementById("8").value
    inputEight=parseInt(rangEight)
    console.log(inputEight)
    document.getElementById("8").value = inputEight
    return zValue=parseInt(inputEight)
}
function setRang8(){
    let i8 = document.getElementById("8").value
    console.log(i8)
    document.getElementById("rang8").value =i8
    return zValue=parseInt(i8)
}
function getValue9(){
    let rangNine = document.getElementById("rang9").value
    console.log(rangNine)
    let inputNine = document.getElementById("9").value
    inputNine=parseInt(rangNine)
    console.log(inputNine)
    document.getElementById("9").value = inputNine
    return zValue9=parseInt(inputNine)
}
function setRang9(){
    let i9 = document.getElementById("9").value
    console.log(i9)
    document.getElementById("rang9").value =i9
    return zValue=parseInt(i9)
}
function getValue10(){
    let rangTen = document.getElementById("rang10").value
    console.log(rangTen)
    let inputTen = document.getElementById("10").value
    inputTen=parseInt(rangTen)
    console.log(inputTen)
    document.getElementById("10").value = inputTen
    return zValue10=parseInt(inputTen)
}
function setRang10(){
    let i10 = document.getElementById("10").value
    console.log(i10)
    document.getElementById("rang10").value =i10
    return zValue10=parseInt(i10)
}
function getValue11(){
    let rangEleven = document.getElementById("rang11").value
    console.log(rangEleven)
    let inputEleven = document.getElementById("11").value
    inputEleven=parseInt(rangEleven)
    console.log(inputEleven)
    document.getElementById("11").value = inputEleven
    return zValue11=parseInt(inputEleven)
}
function setRang11(){
    let i11 = document.getElementById("11").value
    console.log(i11)
    document.getElementById("rang11").value =i11
    return zValue11=i11
}
function getValue12(){
    let rangTwelve = document.getElementById("rang12").value
    console.log(rangTwelve)
    let inputTwelve = document.getElementById("12").value
    inputTwelve=parseInt(rangTwelve)
    console.log(inputTwelve)
    document.getElementById("12").value = inputTwelve
    return zValue12=parseInt(inputTwelve)
}
function setRang12(){
    let i12 = document.getElementById("12").value
    console.log(i12)
    document.getElementById("rang12").value =i12
    return zValue12=parseInt(i12)
}

function berechne(){
    let endValue = parseInt(zValue)+parseInt(zValue2)+parseInt(zValue3)+parseInt(zValue4)-parseInt(zValue5)+parseInt(zValue6)+parseInt(zValue7)-parseInt(zValue8)-parseInt(zValue9)-parseInt(zValue10)-parseInt(zValue11)-parseInt(zValue12)
    let int =parseInt(endValue)
    console.log(endValue)

document.getElementById("endbetrag").value=int

}

function retriveData(){
    p = document.getElementById("betrag").value
    console.log(p)
    return p
}
function getZve(){
    let betr= retriveData()

    if(document.getElementById("select").value ==1){
    switch(betr !=0){
        case(betr<=9744):
        document.getElementById("mdb").innerHTML= "<h1>EST: 0</h1>"
        return 0
        break
        case(betr<=9745 || betr<=14753 ):
        let y = parseInt(betr-9744)/10000
        let endSum = parseInt(((995,21 * y) +1400)*y)
        console.log(y + "this case")
        document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum+'</h1>'
        return endSum
        break
        case(betr<=14754 || betr<=57918):
        let z = parseInt(betr-14753)/10000
        console.log(z)
        let endSum2 =  parseInt((((208.85 * z) + 2397) * z) + 950.96)
        document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum2+'</h1>'
        return endSum2
        break
        case(betr<=57919 || betr <=274612):
        let endSum3 = parseInt(0.42 * betr)-9136.63
        document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum3+'</h1>'
        return endSum3
        break
        case(betr<=274613 || 500000):
        let endSum4 = parseInt(0.45 * betr) - 17374.99
        document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum4+'</h1>'
        return endSum4
        break
        default:
        document.getElementById("mdb").innerHTML= '<h1>Betrag ist zu Hoch. Bitte wenden Sie sich an Ihr Steuerberater !</h1>'
        break
                }
    }
    else if(document.getElementById("select").value ==2){
        switch(betr !=0){
            case(betr<=9408):
            document.getElementById("mdb").innerHTML= "<h1>EST: 0</h1>"
            return 0
            break
            case(betr<=9409 || betr<=14532 ):
            let y = parseInt(betr-9409)/10000
            let endSum = parseInt(((972,87 * y) +1400)*y)
            console.log(y + "this case")
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum+'</h1>'
            return endSum
            break
            case(betr<=14533 || betr<=57051):
            let z = parseInt(betr-14533)/10000
            console.log(z)
            let endSum2 =  parseInt((((212.02 * z) + 2397) * z) + 972.79)
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum2+'</h1>'
            return endSum2
            break
            case(betr<=57052 || betr <=270500):
            let endSum3 = parseInt(0.42 * betr)-8963.74
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum3+'</h1>'
            return endSum3
            break
            case(betr<=270501 || 500000):
            let endSum4 = parseInt(0.45 * betr) - 17078.74
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum4+'</h1>'
            return endSum4
            break
            default:
            document.getElementById("mdb").innerHTML= '<h1>Betrag ist zu Hoch. Bitte wenden Sie sich an Ihr Steuerberater !</h1>'
            break
                    }

    }
    else if(document.getElementById("select").value ==3){
        switch(betr !=0){
            case(betr<=9168):
            document.getElementById("mdb").innerHTML= "<h1>EST: 0</h1>"
            return 0
            break
            case(betr<=9169 || betr<=14254 ):
            let y = parseInt(betr-9168)/10000
            let endSum = parseInt(((980,14 * y) +1400)*y)
            console.log(y + "this case")
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum+'</h1>'
            return endSum
            break
            case(betr<=14255 || betr<=55960):
            let z = parseInt(betr-14254)/10000
            console.log(z)
            let endSum2 =  parseInt((((216.16 * z) + 2397) * z) + 965.58)
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum2+'</h1>'
            return endSum2
            break
            case(betr<=55961 || betr <=265326):
            let endSum3 = parseInt(0.42 * betr)-8780.90
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum3+'</h1>'
            return endSum3
            break
            case(betr<=265327 || 500000):
            let endSum4 = parseInt(0.45 * betr) - 16740.68
            document.getElementById("mdb").innerHTML= '<h1>EST:'+ endSum4+'</h1>'
            return endSum4
            break
            default:
            document.getElementById("mdb").innerHTML= '<h1>Betrag ist zu Hoch. Bitte wenden Sie sich an Ihr Steuerberater !</h1>'
            break
                    }
    }
}
function veranlagung(){
    let split = getZve()
    let res = split/2
    console.log(res)
    document.getElementById("mdb").innerHTML= '<h1>EST:'+ res +'</h1>'

   }