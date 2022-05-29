'use strict';

const box = document.querySelector('.box');

const observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});
observer.observe(box, {
    childList: true
});

// deleting
observer.disconnect();