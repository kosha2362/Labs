// --------------------------------------------
function win1() {
  let win1 = window.open('', '_blank', 'width = 200, height = 200, toolbar = no, menubar = no, status = yes, location = no, scrollbars = yes, resizable = no');
}

function win2() {
  let win2 = window.open('', '_blank', 'width = 400, height = 400, toolbar = yes, menubar = yes, status = yes, location = no, scrollbars = no, resizable = no');
}

// --------------------------------------------
// function link() {
//   window.location.href = 'index2.html';
// }

// --------------------------------------------
function changeWidth() {
  window.open('index2.html', '_blank', 'resizable = yes');
}

// 1
setTimeout(function() {
  document.querySelector(".msg").textContent=`1 Название браузера ${browserName}`;
}, 7000);

// 2
document.write("2 Название браузера: " + navigator.userAgent + "<br>");

// 3
let browserName = navigator.appCodeName;
document.write("3 Название браузера: " + browserName + "<br>");

// --------------------------------------------
// let name = prompt("Введите имя пользователя:");
// let interval = prompt("Введите интервал в миллисекундах:");

// setInterval(function() {
//     alert("Привет, " + name + "!");
// }, interval);




navigator.saysWho = (() => {
  const { userAgent } = navigator
  let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
  let temp

  if (/trident/i.test(match[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []

    return `IE ${temp[1] || ''}`
  }

  if (match[1] === 'Chrome') {
    temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)

    if (temp !== null) {
      return temp.slice(1).join(' ').replace('OPR', 'Opera')
    }

    temp = userAgent.match(/\b(Edg)\/(\d+)/)

    if (temp !== null) {
      return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
    }
  }

  match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
  temp = userAgent.match(/version\/(\d+)/i)

  if (temp !== null) {
    match.splice(1, 1, temp[1])
  }

  return match.join(' ')
})()

setTimeout(function() {
  document.querySelector(".msg").textContent=`1 Название браузера ${navigator.saysWho}`;
}, 7000);



