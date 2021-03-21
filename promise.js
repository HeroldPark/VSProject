// 비동기 동작 객체
// pending, fulfilled, rejected 상태

function task1(fullfill, reject) {
    console.log('task1 시작');
    setTimeout(function() {
        console.log('task1 끝');
        fulfill('Task1 결과');
    }, 3000);
}

function fullfilled(result) {
    console.log('fulfilled : ', result);
}

function rejected(result) {
    console.log('rejected : ', result);
}

new Promise(task1).then(fullfilled, rejected);