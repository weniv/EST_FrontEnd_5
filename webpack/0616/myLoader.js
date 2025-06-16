// 로더가 읽을 파일이 item으로 전달됩니다. item은 리소스 파일의 콘텐츠를 담고 있는 문자열입니다.
module.exports = function myLoader(item) {

    console.log('hello my Loader!!');
    // 반환하는 리소스를 replace 문법을 통해 가공합니다.
    return item.replace('console.log(', 'alert(');
}