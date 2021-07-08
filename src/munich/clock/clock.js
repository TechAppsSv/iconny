// The Munich Proyect

function clock(){
    momentCurrent = new Date()
    hourcode = momentCurrent.getHours()
    minutecode = momentCurrent.getMinutes()
    secondcode = momentCurrent.getSeconds()

    hourPrintable = hourcode + " : " + minutecode + " : " + secondcode

    document.form_clock.clock.value = hourPrintable

    setTimeout("clock()",1000)
}
