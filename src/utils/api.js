export function xhrGet(url){
    return new Promise(
        function (res) {
            var xhr = new XMLHttpRequest()
            xhr.open("GET", url)
            xhr.send(null)
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200){
                    res(JSON.parse(xhr.response))
                }
            }
        }
    )
}

export function xhrPost(url, data){
    data = JSON.stringify(data);
    return new Promise(
        function (res) {
            var xhr = new XMLHttpRequest()
            xhr.open("POST", url)
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data)
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200){
                    res(JSON.parse(xhr.response))
                }
            }
        }
    )
}