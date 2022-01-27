import React from 'react'
import * as database from './database.js'
//import {time1} from './database'
// попередній стан
let pc1 = 1 //контакт ст 1
let pv1 = 1 //верстат ст 1
let ps1 = 1 //тулейка ст 1
let pa1 = 1 //аплікатор ст 1

let pc2 = 0 //контакт ст 2
let pv2 = 0 //верстат ст 2
let ps2 = 0 //тулейка ст 2
let pa2 = 0 //аплікатор ст 2
//об’єкт відсутній	0
//встановлений об’єкт	1

//---------------------------------------------------------

// майбутній стан
let fc1 = 0 //контакт ст 1
let fv1 = 0 //верстат ст 1
let fs1 = 2 //тулейка ст 1
let fa1 = 2 //аплікатор ст 1 

let fc2 = 2 //контакт ст 2
let fv2 = 2 //верстат ст 2
let fs2 = 0 //тулейка ст 2
let fa2 = 0 //аплікатор ст 2
//об’єкт відсутній	0
//об’єкт з попереднього замовлення	1
//новий об’єкт	2

//----------------------------------------------------------

let wire = 2 //заміна проводу
//без заміни проводу	0
//заміна кольору проводу	1
//заміна перерізу проводу	2
//заміна типу проводу	3

//----------------------------------------------------------

let wireCrossSection = 3 //переріз проводу

let cycleSize = 199 //розмір циклу

//-----------------------------------------------------------

// функція для визначення суми часу для потрібних дій оператора в залежності від типу переналадки (вхідні дані)
const timeForSetup = () => {
    let result = 0;

    if (cycleSize >= 200 && (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) !== (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) !== (fc2 === 2 || fv2 === 2))))) {
        result += database.time1
        console.log(database.time1)
    }
    if (cycleSize >= 200 && (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) && (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) && (fc2 === 2 || fv2 === 2))))) {
        result += database.time2
        console.log(database.time2)
    }
    if ((pv1 === 1 && fv1 !== 1) !== (pv2 === 1 && fv2 !== 1)) {
        result += database.time3
        console.log(database.time3)
    }
    if ((pv1 === 1 && fv1 !== 1) && (pv2 === 1 && fv2 !== 1)) {
        result += database.time4
        console.log(database.time4)
    }
    result += database.time5
    console.log(database.time5)

    if (pv2 === 1 && (fv2 === 0 || fv2 === 2)) {
        result += database.time6
        console.log(database.time6)
    }
    if (fv2 === 2) {
        result += database.time7
        console.log(database.time7)
    }
    if (pc2 === 1 && (fc2 === 0 || fc2 === 2)) {
        result += database.time8
        console.log(database.time8)
    }
    if (fc2 === 2) {
        result += database.time9
        console.log(database.time9)
    }
    if ((ps2 === 1 && (fs2 === 0 || fs2 === 2)) || (pa2 === 1 && (fa2 === 0 || fa2 === 2))) {
        result += database.time10
        console.log(database.time10)
    }
    if (fa2 === 2) {
        result += database.time11
        console.log(database.time11)
    }
    if (fa2 === 2) {
        result += database.time12
        console.log(database.time12)
    }
    if (fa2 === 2) {
        result += database.time13
        console.log(database.time13)
    }
    if (fa2 === 2) {
        result += database.time14
        console.log(database.time14)
    }
    if (fs2 === 2) {
        result += database.time15
        console.log(database.time15)
    }
    if (fc2 === 2 || fv2 === 2 || fs2 === 2 || fa2 === 2) {
        result += database.time16
        console.log(database.time16)
    }
    if (wire === 1 || wire === 2 || wire === 3) {
        result += database.time17
        console.log(database.time17)
    }
    if (pv1 === 1 && (fv1 === 0 || fv1 === 2)) {
        result += database.time18
        console.log(database.time18)
    }
    if (fv1 === 2) {
        result += database.time19
        console.log(database.time19)
    }
    if (pc1 === 1 && (fc1 === 0 || fc1 === 2)) {
        result += database.time20
        console.log(database.time20)
    }
    if (fc1 === 2) {
        result += database.time21
        console.log(database.time21)
    }
    if ((ps1 === 1 && (fs1 === 0 || fs1 === 2)) || (pa1 === 1 && (fa1 === 0 || fa1 === 2))) {
        result += database.time22
        console.log(database.time22)
    }
    if (fa1 === 2) {
        result += database.time23
        console.log(database.time23)
    }
    if (fa1 === 2) {
        result += database.time24
        console.log(database.time24)
    }
    if (fa1 === 2) {
        result += database.time25
        console.log(database.time25)
    }
    if (fa1 === 2) {
        result += database.time26
        console.log(database.time26)
    }
    if (fs1 === 2) {
        result += database.time27
        console.log(database.time27)
    }
    if (fc1 === 2 || fv1 === 2 || fs1 === 2 || fa1 === 2) {
        result += database.time28
        console.log(database.time28)
    }
    if (wire === 2) {
        result += database.time29
        console.log(database.time29)
    }
    if (wire !== 0) {
        result += database.time30
        console.log(database.time30)
    }
    if (wire !== 0) {
        result += database.time31
        console.log(database.time31)
    }
    result += database.time32
    console.log(database.time32)

    if (wire !== 0 || fc1 === 2 || fv1 === 2 || fc2 === 2 || fv2 === 2) {
        result += database.time33
        console.log(database.time33)
    }
    if (fv1 === 2) {
        result += database.time34
        console.log(database.time34)
    }
    if (fv2 === 2) {
        result += database.time35
        console.log(database.time35)
    }
    result += database.time36
    console.log(database.time36)

    if (wire !== 0 || fc1 === 2 || fv1 === 2 || fc2 === 2 || fv2 === 2) {
        result += database.time37
        console.log(database.time37)
    }
    if (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) !== (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) !== (fc2 === 2 || fv2 === 2)))) {
        result += database.time38
        console.log(database.time38)
    }
    if (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) && (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) && (fc2 === 2 || fv2 === 2)))) {
        result += database.time39
        console.log(database.time39)
    }
    if (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) !== (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) !== (fc2 === 2 || fv2 === 2)))) {
        result += database.time40
        console.log(database.time40)
    }
    if (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) && (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) && (fc2 === 2 || fv2 === 2)))) {
        result += database.time41
        console.log(database.time41)
    }
    if (wire === 1 && (fc1 !== 2 && fv1 !== 2 && fc2 !== 2 && fv2 !== 2) && ((fc1 === 1 || fv1 === 1) !== (fc2 === 1 || fv2 === 1))) {
        result += database.time42
        console.log(database.time42)
    }
    if (wire === 1 && (fc1 !== 2 && fv1 !== 2 && fc2 !== 2 && fv2 !== 2) && ((fc1 === 1 || fv1 === 1) && (fc2 === 1 || fv2 === 1))) {
        result += database.time43
        console.log(database.time43)
    }
    if (wireCrossSection <= 0.35 && (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) !== (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) !== (fc2 === 2 || fv2 === 2))))) {
        result += database.time44
        console.log(database.time44)
    }
    if (wireCrossSection <= 0.35 && (((wire === 2 || wire === 3) && ((fc1 === 1 || fc1 === 2 || fv1 === 1 || fv1 === 2) && (fc2 === 1 || fc2 === 2 || fv2 === 1 || fv2 === 2))) || ((wire === 0 || wire === 1) && ((fc1 === 2 || fv1 === 2) && (fc2 === 2 || fv2 === 2))))) {
        result += database.time45
        console.log(database.time45)
    }
    

    return result
    
}



console.log(`total time =  ${timeForSetup()}`)