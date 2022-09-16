// PROJECT TAGS

let topSection = document.querySelector("body > div > section.projects > div.tag-names");
let tags = topSection.getElementsByClassName('tag');
let cards = document.getElementsByClassName('card-box');
let selectedTags = [];
let tagList = null;

function showRelevantCards(selectedTags) {
    for (const y of cards) {
        // spread operator converts tagList from HTMLCollection to array
        tagList = [...y.getElementsByClassName('tag')];
        // modify each value in the array so that it stores their innerHTML values instead of their elements
        tagList.forEach((t, index) => {tagList[index] = t.innerHTML});

        if (tagList.some(tag => selectedTags.includes(tag))) {
            y.style.display = 'initial';
        } else {
            y.style.display = 'none';
        }

        if (selectedTags.length === 0) {
            y.style.display = 'initial'
        }
    }
}

// add the following event listener for every tag in the top ribbon of "Projects"
for (const x of tags) {
    x.onclick = function() {
        if (x.classList.contains('selected-tag')){
            x.classList.remove('selected-tag');
            selectedTags.splice(selectedTags.indexOf(x.innerHTML),1);
            showRelevantCards(selectedTags);
        } else {
            x.classList.add('selected-tag');
            selectedTags.push(x.innerHTML);
            showRelevantCards(selectedTags);
        }
    }
}