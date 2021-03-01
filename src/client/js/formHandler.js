function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    // the id name is -> for the article url 
    let formText = document.getElementById('name').value;

    if (checkURL(formText)) {
        console.log("*** A Valid URL ***");
        console.log("::: Form Submitted :::");
        postData('http://localhost:8081/API', { url: formText })
            .then(function (res) {
                document.getElementById('polarity').innerHTML = `Polarity ${res.score_tag}`
                document.getElementById('agreement').innerHTML = `agreement ${res.agreement}`
                document.getElementById('subjectivity').innerHTML = `subjectivity ${res.subjectivity}`
                document.getElementById('confidence').innerHTML = `confidence ${res.confidence}`
                document.getElementById('irony').innerHTML = `irony ${res.irony}`
            })
    }
    else {
        alert('NOT a Valid URL, Try again.');
    }

}

//PostData Function
//TODO: post the data to /API path
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    try {
        //console.log("Post data Fun. the newData=" + newData);
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log(error)
    }
};//end of post data

// URL checker function from https://stackoverflow.com/a/5717133 reference
function checkURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
export { handleSubmit }